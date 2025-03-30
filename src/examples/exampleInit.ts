import FakerAiClient from "../client";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const exampleClient = new FakerAiClient({
  apiKey: process.env.API_KEY_GROQ || "",
  model: "llama-3.3-70b-versatile",
  // model: "llama-3.1-8b-instant",
  language: "en",
  logMode: "debug",
  exportPath: "output/2"
})