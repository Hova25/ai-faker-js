export type SchemaType =
  | "string"
  | "number"
  | "boolean"
  | "date"
  | { array: SchemaType; length?: number; description?: string }
  | { object: Record<string, SchemaType>; description?: string }
  | { type: "string" | "number" | "boolean" | "date"; description?: string };