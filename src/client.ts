import {FakerAiOptions, GenerateOptions} from "./types";
import { SchemaType } from "./schema";

class FakerAiClient {
  private readonly apiKey: string;
  private model: FakerAiOptions["model"];
  private readonly language: FakerAiOptions["language"];
  private readonly logMode?: FakerAiOptions["logMode"];
  private readonly maxCompletionTokens?: FakerAiOptions["maxCompletionTokens"];

  constructor(options: FakerAiOptions) {
    this.apiKey = options.apiKey;
    this.model = options.model;
    this.language = options.language ?? "fr";
    this.logMode = options.logMode
    this.maxCompletionTokens = options.maxCompletionTokens ?? 8_192
  }

  private formatSchema(schema: SchemaType, depth = 0): string {
    const indent = "  ".repeat(depth);

    if (typeof schema === "string") return schema;

    if ("type" in schema) {
      return schema.description ? `${schema.type} (${schema.description})` : schema.type;
    }

    if ("array" in schema) {
      return `Array of ${schema.length ?? "X"} elements type ${this.formatSchema(schema.array, depth + 1)}`
        + (schema.description ? ` - ${schema.description}` : "");
    }

    if ("object" in schema) {
      const properties = Object.entries(schema.object)
        .map(([key, value]) => `${indent}- **${key}**: ${this.formatSchema(value, depth + 1)}`)
        .join("\n");
      return `Object with attributes :\n${properties}`
        + (schema.description ? `\n${indent}Description : ${schema.description}` : "");
    }

    return "";
  }

  async generate(options: GenerateOptions): Promise<any> {
    const { prompt, schema } = options;

    let fullPrompt = prompt;
    if (schema) {
      fullPrompt += `\nStrictly respect this JSON format:\n${this.formatSchema(schema)}`;
    }

    const systemMessage = `You are a strict JSON data generator.
    Respond only in JSON and use the specified language. : ${this.language!.toUpperCase()}.`;

    if(this.logMode === "debug") {
      console.log(fullPrompt)
    }

    const url = "https://api.groq.com/openai/v1/chat/completions";

    const body = {
      messages: [
        {
          role: "system",
          content: systemMessage,
        },
        {
          role: "user",
          content: fullPrompt,
        },
      ],
      model: this.model,
      temperature: 1,
      max_completion_tokens: this.maxCompletionTokens,
      top_p: 1,
      stream: false,
      stop: null,
      response_format: { type: "json_object" },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    try {
      if(this.logMode === "debug") {
        console.log("API Return --", data.choices[0].message.content)
      }
      return JSON.parse(data.choices[0].message.content);
    } catch(e) {
      throw new Error("IA response is invalid JSON");
    }
  }
}

export default FakerAiClient;
