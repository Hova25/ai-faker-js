export type SchemaType =
  | "string"
  | "number"
  | "boolean"
  | "Date"
  | { array: SchemaType; length?: number; description?: string }
  | { object: Record<string, SchemaType>; description?: string }
  | { type: "string" | "number" | "boolean" | "Date"; description?: string };

export const schemaToTypeScript = (schema: SchemaType): string => {
  if (typeof schema === "string") return schema;

  if ("type" in schema) {
    return schema.type;
  }

  if ("array" in schema) {
    return `${schemaToTypeScript(schema.array)}[]`;
  }

  if ("object" in schema) {
    const properties = Object.entries(schema.object)
      .map(([key, value]) => `${key}: ${schemaToTypeScript(value)}`)
      .join("; ");
    return `{ ${properties} }`;
  }

  return "any";
}