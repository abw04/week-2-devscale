import { OpenAIClient } from "@anvia/openai";
import { AnthropicClient } from "@anvia/anthropic";
import {tavily} from "@tavily/core";
import "dotenv/config";


export const openaiClient = new OpenAIClient({
    apiKey: process.env.OPENAI_API_KEY,
    baseUrl: "https://opencode.ai/zen/go/v1"
})

export const anthropicClient = new AnthropicClient({
    apiKey: process.env.OPENAI_API_KEY,
    baseUrl: "https://opencode.ai/zen/go"
})

export function getModel(model: string = "glm-5.1") {
    return openaiClient.completionModel(model);
}

export const tavilyClient = tavily({
    apiKey: process.env.TAVILY_API_KEY
})