# Bhuvan M — Python Backend & Applied AI

A responsive portfolio focused on AI applications, backend engineering, and Python tools.

**Website:** https://bhuvan-portfolio-five.vercel.app

## Selected work

- [AI TaskHub](https://github.com/BhuvanM17/ai-taskhub): authenticated FastAPI background jobs with PostgreSQL and Redis/RQ.
- [RetrievalBench](https://github.com/BhuvanM17/retrievalbench): offline RAG retrieval evaluation with a BM25 baseline. Run locally as a Python CLI.
- [GridQuest](https://github.com/BhuvanM17/gridquest-python): a local Pygame maze game with procedural generation and BFS pursuit.
- [Document RAG](https://github.com/BhuvanM17/DOC-RAG): document Q&A with FastAPI, Gemini, Pinecone, and React.
- [DailyOps Agent](https://github.com/BhuvanM17/personal_assistant_using_langgraph): tool workflows, persistent memory, and approval steps using LangGraph.
- [AI Invoice Assistant](https://github.com/BhuvanM17/AI-Invoice-Assistant-Pro): conversational invoice workflows and PDF generation.

The portfolio includes category filters, accessible navigation, project source links, and contact links. Source links point to repositories; they do not imply hosted demos of the backend, CLI, or desktop game.

## Development

Node.js and npm are required. This repository retains its existing React / Create React App build setup.

```bash
npm ci
npm start
```

## Checks and build

```bash
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

On Windows PowerShell, set `$env:CI = 'true'` before running the test command without the `CI=true` prefix. The production build is written to `build/`.

The tests cover project links and type labels, category filtering, and navigation/contact links. Site changes were created with AI assistance and reviewed against the public project descriptions.
