import {SchemaType} from "./schema";

export interface FakerAiOptions {
  apiKey: string;
  model: 'gemma2-9b-it' | 'llama-3.3-70b-versatile' | 'llama-3.1-8b-instant' | 'llama-guard-3-8b' | 'llama3-70b-8192' | 'llama3-8b-8192';
  language?: "fr" | "en" | "es" | "de";
  logMode?: "debug"
  maxCompletionTokens?: number
}

export interface GenerateOptions {
  prompt: string;
  schema?: SchemaType;
}