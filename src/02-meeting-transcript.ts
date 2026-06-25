import {
  createCompletion,
  createParsedCompletion,
  createCompletionStream,
  Message,
} from "@anvia/core";
import { getModel } from "./utils.js";
import  "dotenv/config"
import z from "zod";

const userInput = "MEMORANDUM TO Executive Board, Editorial Leadership, and Stakeholders FROM Office of the Corporate Secretary DATE June 23, 2026 SUBJECT Extraordinary Strategic Alignment Meeting: The Future of The Chronicle The meeting convened at 10:00 AM and was extended until 2:30 PM due to a profound lack of consensus regarding the company's survival strategy. Chief Executive Officer Helena Vance opened the session by stating that the newspaper is facing a structural deficit that will compromise its journalistic integrity within eighteen months if immediate action is not taken. The primary objective of the meeting was to determine next steps regarding the proposed complete cessation of the print edition and the implementation of an AI-assisted local reporting initiative. The first major agenda item focused on the transition to a one hundred percent digital format by the fourth quarter of 2026, a move projected to save forty-two percent in operational overhead by eliminating printing presses, distribution networks, and physical paper costs. This proposal met with intense resistance from the editorial leadership and representatives from the Journalists Guild. They argued that abandoning print entirely would alienate the company's most loyal, high-revenue subscriber demographic, which is primarily aged fifty-five and older. Furthermore, they raised severe concerns about destroying the physical legacy of the brand and the immediate layoff of one hundred and twenty print-plant workers. The Chief Financial Officer countered that print advertising revenue has dropped by thirty-four percent year-over-year, making the physical paper a net-negative asset that threatens the entire organization. A compromise to reduce printing to a weekend-only legacy edition was proposed but ultimately tabled for further financial vetting, leaving the issue deadlocked. The second agenda item, involving the integration of AI-assisted hyper-local reporting, sparked an even more heated exchange between the Editor-in-Chief and the Head of Digital Strategy. The proposal involves deploying an automated aggregation tool to draft routine local updates, such as property transfers, minor city council notes, traffic, and weather, in order to free up human journalists for investigative pieces. The editorial team expressed deep ethical concerns regarding algorithmic bias, fact-checking liabilities, and the potential dilution of the newspaper's public voice. They maintained that a newsroom stripped of its print heritage and automated by algorithms would lose public trust. The digital team strongly countered that the company is rapidly losing the local market to independent bloggers and social media aggregators because it currently lacks the manpower to cover every neighborhood manually, arguing that trust does not pay salaries if the corporate bank account is empty. Because of the high level of division, no final vote on the overarching strategy was called. Instead, several temporary directives were issued to gather more data before the next session. The Chief Financial Officer was instructed to run a feasibility model on the weekend-only print compromise to calculate the exact severance costs and contract-breaking penalties associated with closing the printing plants. Simultaneously, a joint task force consisting of two senior editors and two digital product managers was formed immediately to draft a strict AI ethics and fact-checking protocol, ensuring that no automated tools go live without human sign-off. Additionally, the marketing department was directed to launch a targeted subscriber survey to assess what percentage of current print readers would migrate to a digital app versus canceling their subscriptions entirely. The executive board will reconvene on July 15, 2026, for a binding vote on the final fourth-quarter roadmap. Minutes compiled by Marcus Vance, Corporate Secretary."

const extractionSchema = z.object({
  decision: z.string().describe("decisions taken in the meeting"),
  risks: z.string().describe("risks told in the meeting"),
  actionItems:  z.string().describe("action items agreed in the meeting")
})

const response = await createParsedCompletion(getModel(), {
    instructions: "extract from the input key informations, if you cant find the information, put 'none' without quote",
    input: `Meeting notes: ${userInput}`,
    schema: extractionSchema,
})

console.log(response.data)

