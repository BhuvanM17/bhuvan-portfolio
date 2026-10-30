export const github = "https://github.com/BhuvanM17";
export const projects = [
  {
    name: "AI TaskHub",
    category: "Backend & APIs",
    kind: "Backend service",
    repo: "ai-taskhub",
    description:
      "An authenticated job API for summarization and extraction, with owner-isolated results, idempotent requests, and Redis/RQ background workers. Includes a deterministic demo and an optional model adapter.",
    tech: ["FastAPI", "PostgreSQL", "Redis / RQ", "Docker"],
    visual: "taskhub",
    caption: "01 / BACKEND ENGINEERING",
    code: ["request", "validate", "process", "respond"],
  },
  {
    name: "RetrievalBench",
    category: "Python & algorithms",
    kind: "Offline CLI",
    repo: "retrievalbench",
    description:
      "An offline RAG retrieval evaluation toolkit. Compare a BM25 baseline with ranked results using Recall, MRR, and nDCG—all in standard-library Python.",
    tech: ["Python", "BM25", "RAG evaluation"],
    visual: "retrieval",
    caption: "02 / RETRIEVAL EVALUATION",
    code: ["Recall@k", "MRR@k", "nDCG@k"],
  },
  {
    name: "GridQuest",
    category: "Python & algorithms",
    kind: "Desktop game",
    repo: "gridquest-python",
    description:
      "A local Pygame maze game with seeded procedural generation and a pursuing enemy that finds its route using breadth-first search.",
    tech: ["Python", "Pygame", "BFS"],
    visual: "maze",
    caption: "03 / ALGORITHMS IN PLAY",
    code: [],
  },
  {
    name: "Document RAG",
    category: "AI applications",
    kind: "Document Q&A",
    repo: "DOC-RAG",
    description:
      "Ask questions about documents through a retrieval-augmented pipeline: a FastAPI backend, Gemini responses, Pinecone retrieval, and a React interface.",
    tech: ["FastAPI", "Gemini", "Pinecone", "React"],
    visual: "document",
    caption: "04 / CONTEXT-AWARE ANSWERS",
    code: ["documents", "retrieve", "generate"],
  },
  {
    name: "DailyOps Agent",
    category: "AI applications",
    kind: "Agent workflow",
    repo: "personal_assistant_using_langgraph",
    description:
      "A personal assistant built around LangGraph workflows, tool use, persistent Chroma memory, and human approval steps.",
    tech: ["Python", "LangGraph", "Chroma"],
    visual: "agent",
    caption: "05 / AGENT ORCHESTRATION",
    code: ["plan", "tools", "approval", "memory"],
  },
  {
    name: "AI Invoice Assistant",
    category: "AI applications",
    kind: "Full-stack application",
    repo: "AI-Invoice-Assistant-Pro",
    description:
      "Conversational invoice creation with structured validation and PDF generation, connecting a Gemini-powered Flask backend to a React frontend.",
    tech: ["Python", "Flask", "Gemini", "React"],
    visual: "invoice",
    caption: "06 / STRUCTURED AI WORKFLOWS",
    code: ["conversation", "validation", "invoice.pdf"],
  },
];
export const filters = [
  "All projects",
  "AI applications",
  "Backend & APIs",
  "Python & algorithms",
];
