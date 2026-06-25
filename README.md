# Week 2 Devscale: AI Agent Workflows

This repository contains homework assignments and practice exercises for **Week 2 of the Devscale course**, focusing on building AI-powered agentic workflows and structured data extraction. The project utilizes the **Anvia AI SDK** to implement classification, structured extraction, and search-augmented generation (RAG) using LLMs.

---

## 📂 Project Structure & Scripts

All source files are located in the `src/` directory:

```
src/
├── utils.ts                    # Common client instantiations (Anvia, OpenAI, Tavily)
├── 01-double-charge-case.ts    # AI Handoff & Intent Classification
├── 02-meeting-transcript.ts    # Structured Info Extraction from meeting notes
└── 03-company-profile.ts       # Search-Augmented (Tavily) Company Profile Generator
```

### 1. Intent Classification & Support Handoff
* **File**: `src/01-double-charge-case.ts`
* **Purpose**: Classifies a user query and decides whether the AI agent can answer it directly or if it needs to hand off the conversation to a human support agent (e.g., for sensitive cases like double charges).
* **How to run**:
  ```bash
  npx tsx src/01-double-charge-case.ts
  ```

### 2. Meeting Transcript Structured Extraction
* **File**: `src/02-meeting-transcript.ts`
* **Purpose**: Parses a complex strategic board meeting memo and uses schema validation to pull structured details: decisions, risks, and action items.
* **How to run**:
  ```bash
  npx tsx src/02-meeting-transcript.ts
  ```

### 3. Web-Search Augmented Company Profile Generator
* **File**: `src/03-company-profile.ts`
* **Purpose**: Queries the internet using Tavily Search API for a company name, and then uses the AI model to synthesize a structured profile containing the legal company name, website URL, industry, and a 1-paragraph summary description.
* **How to run**:
  ```bash
  npx tsx src/03-company-profile.ts
  ```

---

## ⚙️ How It Works (Under the Hood)

1. **Initialization (`src/utils.ts`)**:
   Sets up the `OpenAIClient`, `AnthropicClient`, and `tavily` client with custom gateways and API configurations.
2. **Structured Outputs with Zod**:
   The scripts define custom `zod` schemas (e.g., `decisionSchema`, `extractionSchema`, `CompanyInformationSchema`) and pass them to Anvia's `createParsedCompletion(...)` method to ensure type-safe and reliable responses.
