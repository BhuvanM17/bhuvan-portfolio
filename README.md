# Bhuvan M — Python Backend & Applied AI

A monochrome, typography-led portfolio focused on AI applications, backend engineering, and Python tools.

**Website:** https://bhuvan-portfolio-five.vercel.app

## Selected work

- [InterviewGraph](https://github.com/BhuvanM17/interviewgraph): LangGraph interview practice with saved sessions, targeted follow-ups, reports, demo scoring, and optional Gemini feedback.
- [Weekend Payana](https://www.weekendpayana.com/): a client travel website with trip discovery, booking/payment flows, invoice exports, and admin tools. This card links to the public website; the client source is private.
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

## Visual direction

The editorial layout is inspired by [Olha Lazarieva's portfolio](https://www.awwwards.com/sites/olha-lazarieva): oversized condensed type, a monochrome portrait, bracket navigation, and generous whitespace. This is an original adaptation with Bhuvan's own public photo, project content, and original project artwork. No reference-site photos, awards, or copy are reused.

Includes a swipeable gallery with eight projects, category filters, a keyboard-accessible mobile menu, expandable expertise details, and reduced-motion support. The technology board uses labeled keycaps and [Skill Icons](https://skillicons.dev), inspired by the tech tiles on the user's supplied [GitHub reference](https://github.com/sharath-a-kumar). Fonts are self-hosted through Fontsource. See [design evidence and implementation choices](docs/DESIGN.md).

