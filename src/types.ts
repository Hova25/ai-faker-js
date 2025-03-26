import {SchemaType} from "./schema";

export interface FakerAiOptions {
  apiKey: string;
  model: string;
  language?: "fr" | "en" | "es" | "de";
  logMode?: "debug"
}

export interface GenerateOptions {
  prompt: string;
  schema?: SchemaType;
}