import {
  createCompletion,
  createParsedCompletion,
  createCompletionStream,
  Message,
} from "@anvia/core";
import { getModel } from "./utils.js";
import  "dotenv/config"
import z from "zod";
import { tavilyClient } from "./utils.js";

const userInput = "bank syariah indonesia"

const searchResult = await tavilyClient.search(userInput, {
    searchDepth: "basic",
})

const CompanyInformationSchema = z.object({
  name: z.string().describe("Legal Company Name"),
  website: z.string().describe("Company Website URL"),
  industry: z.string().describe("Company industry"),
  Description: z.string().describe("Describe the company in 1 paragraph")

})

const response = await createParsedCompletion(getModel(), {
    instructions: "extract from the input key informations, if you cant find the information, put 'none' without quote",
    input: `Search results: ${JSON.stringify(searchResult.results)}`,
    schema: CompanyInformationSchema,
})

console.log(response.data)

