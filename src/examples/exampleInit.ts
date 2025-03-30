import FakerAiClient from "../client";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const exampleClient = new FakerAiClient({
  apiKey: process.env.API_KEY_GROQ || "",
  model: "llama-3.3-70b-versatile",
  language: "en",
  logMode: "debug",
  exportPath: "output/1"
})