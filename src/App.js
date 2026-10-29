import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Braces,
  Workflow,
  Database,
  Terminal,
  MapPin,
} from "lucide-react";
import profile from "./assets/profile.jpeg";
import "./App.css";
const github = "https://github.com/BhuvanM17";
const projects = [
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
const filters = [
  "All projects",
  "AI applications",
  "Backend & APIs",
  "Python & algorithms",
];
function ProjectVisual({ project }) {
  if (project.visual === "maze")
    return (
      <div className="project-visual maze-visual" aria-hidden="true">
        <div className="maze-grid">
          {Array.from(
            {
              length: 77,
            },
            (_, i) => (
              <span
                key={i}
                className={
                  [
                    0, 1, 12, 23, 24, 25, 36, 47, 58, 59, 60, 61, 72, 73, 74,
                    75, 76,
                  ].includes(i)
                    ? "maze-path"
                    : (i * 7 + (i % 3)) % 4 === 0
                      ? "maze-wall"
                      : ""
                }
              />
            ),
          )}
        </div>
        <span className="visual-note">seed → maze → shortest path</span>
      </div>
    );
  return (
    <div
      className={`project-visual ${project.visual}-visual`}
      aria-hidden="true"
    >
      <div className="visual-grid" />
      <div className="visual-flow">
        {project.code.map((item, index) => (
          <React.Fragment key={item}>
            {index > 0 && <span className="flow-line" />}
            <span className="flow-node">{item}</span>
          </React.Fragment>
        ))}
      </div>
      <span className="visual-note">
        {project.visual === "retrieval"
          ? "measure retrieval. compare approaches."
          : "from input to useful output."}
      </span>
    </div>
  );
}
function App() {
  const [filter, setFilter] = useState("All projects");
  const visible = projects.filter(
    (project) => filter === "All projects" || project.category === filter,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#home" aria-label="Bhuvan M home">
            <span className="brand-mark">b.</span>Bhuvan M
            <span className="wordmark-dot">/</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">
              Contact <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section
          className="hero container"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> AI & PYTHON BACKEND ENGINEERING
            </p>
            <h1 id="hero-title">
              Building AI systems.
              <br />
              <span>
                Engineering the
                <br className="desktop-break" /> foundation.
              </span>
            </h1>
            <p className="hero-description">
              I'm Bhuvan, a software engineer turning ideas into practical AI
              applications, thoughtful APIs, and reliable Python tools.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDown size={17} />
              </a>
              <a
                className="text-link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight size={17} />
              </a>
            </div>
            <p className="hero-location">
              <MapPin size={14} /> Bangalore, India <span>•</span> Python · AI ·
              Backend
            </p>
          </div>
          <div
            className="hero-system"
            aria-label="Engineering focus: Python backends, AI workflows, and retrieval evaluation"
          >
            <div className="system-top">
              <span>
                <span className="status-dot" /> ENGINEERING FOCUS
              </span>
              <Braces size={18} />
            </div>
            <div className="system-orbit orbit-one" />
            <div className="system-orbit orbit-two" />
            <div className="system-center">
              <Braces size={42} />
              <span>Ideas → systems</span>
            </div>
            <div className="system-label label-backend">
              <Terminal size={20} />
              <span>
                Python backends<small>APIs & application logic</small>
              </span>
            </div>
            <div className="system-label label-ai">
              <Workflow size={20} />
              <span>
                AI workflows<small>Agents & tool orchestration</small>
              </span>
            </div>
            <div className="system-label label-rag">
              <Database size={20} />
              <span>
                Retrieval systems<small>Context & evaluation</small>
              </span>
            </div>
            <div className="system-bottom">
              <span>clear inputs. thoughtful logic. useful outputs.</span>
              <span>⌘</span>
            </div>
          </div>
        </section>
        <div className="stack-strip">
          <div className="container">
            <span className="strip-label">WORKING WITH</span>
            {["Python", "FastAPI", "LangGraph", "Flask", "React", "SQL"].map(
              (tech) => (
                <span key={tech}>{tech}</span>
              ),
            )}
          </div>
        </div>
        <section
          id="projects"
          className="projects-section container"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK / 01</p>
              <h2 id="projects-title">Ideas, built into projects.</h2>
            </div>
            <p>
              AI applications, backend services, and the algorithms underneath.
              Explore the code behind each one.
            </p>
          </div>
          <div className="project-toolbar">
            <div className="filters" role="group" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  key={item}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <span className="project-count" aria-live="polite">
              {visible.length.toString().padStart(2, "0")} projects
            </span>
          </div>
          <div className="project-grid">
            {visible.map((project) => (
              <article className="project-card" key={project.repo}>
                <ProjectVisual project={project} />
                <div className="project-content">
                  <p className="project-caption">{project.caption}</p>
                  <div className="project-title">
                    <h3>{project.name}</h3>
                    <span>{project.kind}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul
                    className="tags"
                    aria-label={`${project.name} technologies`}
                  >
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <a
                    className="project-source"
                    href={`${github}/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> View source <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <a
            className="all-repositories"
            href={`${github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub <ArrowUpRight size={17} />
          </a>
        </section>
        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div className="about-profile">
              <div className="portrait-wrap">
                <img
                  src={profile}
                  alt="Bhuvan M"
                  loading="lazy"
                  width="360"
                  height="400"
                />
                <span className="portrait-label">
                  BHUVAN M / SOFTWARE ENGINEER
                </span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">THE PERSON BEHIND THE CODE / 02</p>
              <h2 id="about-title">
                Curious by nature.
                <br />
                <span>Practical by design.</span>
              </h2>
              <p>
                My work sits at the intersection of AI and software engineering.
                I enjoy connecting language models to useful tools, building the
                backend logic around them, and understanding how the pieces work
                together.
              </p>
              <p>
                Alongside Python and AI applications, my background includes
                Java, Spring, Hibernate, and full-stack development. I bring
                that foundation to projects with clear interfaces and purposeful
                workflows.
              </p>
              <div className="capability-grid">
                <div>
                  <Workflow size={19} />
                  <h3>Applied AI</h3>
                  <p>RAG, LangGraph, LLM integration, prompt engineering</p>
                </div>
                <div>
                  <Braces size={19} />
                  <h3>Backend development</h3>
                  <p>Python, FastAPI, Flask, Java, Spring, SQL</p>
                </div>
              </div>
              <div className="education">
                <span>EDUCATION</span>
                <p>
                  B.E. in Computer Science
                  <br />
                  <small>Sambhram Institute of Technology · 2020–2024</small>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="contact-section container"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">LET'S CONNECT / 03</p>
            <h2 id="contact-title">
              Have a role or
              <br />
              <span>an idea in mind?</span>
            </h2>
            <p>
              Let's talk about AI applications, Python backends,
              <br className="desktop-break" /> and building something useful
              together.
            </p>
          </div>
          <div className="contact-links">
            <a
              className="email-link"
              href="mailto:bhuvanshetty317@gmail.com"
              aria-label="Email Bhuvan"
            >
              <Mail size={21} />
              <span>
                <small>EMAIL ME</small>bhuvanshetty317@gmail.com
              </span>
              <ArrowUpRight size={24} />
            </a>
            <div className="social-links">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/bhuvan-m-600828217/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <a className="wordmark" href="#home">
          <span className="brand-mark">b.</span>Bhuvan M
        </a>
        <p>Thoughtfully built. Always learning.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
export default App;
