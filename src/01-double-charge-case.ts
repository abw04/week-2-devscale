import {
  createCompletion,
  createParsedCompletion,
  createCompletionStream,
  Message,
} from "@anvia/core";
import { getModel } from "./utils.js";
import  "dotenv/config"
import z from "zod";

const userInput = "why was i charged twice? Please fix it now"

const decisionSchema = z.object({
    action: z.enum([
        "answer_directly",
        "handoff",
    ]),
    reason: z.string(),
})

const decision = await createParsedCompletion(getModel(), {
    instructions: `
    You are a trusty and wise assistant. Decide the next action first before answerint the user.
    use handoff when the request needs action or is high risk, such as payment and security related.
    use answer_directly otherwise
    `,
    input: `User request: ${userInput}`,
    schema: decisionSchema,
})

console.log(decision.data)

if (decision.data.action == "handoff") {
    console.log("I will connect you to the customer support team, please remain in the chat")
}
