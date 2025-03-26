import FakerAiClient from "./client";
import { FakerAiOptions } from "./types";
import { SchemaType } from "./schema";

let client: FakerAiClient | null = null;

export function init(options: FakerAiOptions) {
  client = new FakerAiClient(options);
}

export function generate(prompt: string, schema?: SchemaType) {
  if (!client) {
    throw new Error("AiFakerJs is not initialized with init()");
  }
  return client.generate({ prompt, schema });
}
