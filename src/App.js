import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Plus,
  Minus,
  X,
} from "lucide-react";
import "@fontsource-variable/sofia-sans-condensed";
import "@fontsource/spline-sans-mono/400.css";
import portrait from "./assets/profile.jpeg";
import game from "./assets/gridquest.png";
import { github, projects, filters } from "./projects";
import "./App.css";

const navigation = [
  ["About", "#about", "about me"],
  ["Projects", "#projects", "works"],
  ["Expertise", "#expertise", "expertise"],
  ["Contact", "#contact", "connect"],
];
const specialties = [
  {
    title: "Python backends",
    description: "Clear interfaces. Reliable application logic.",
    details:
      "Request validation, authentication, and background processing. Building APIs with FastAPI, SQLAlchemy, relational databases, and Redis workers.",
    tags: ["FastAPI", "REST APIs", "SQL", "Redis"],
  },
  {
    title: "Applied AI",
    description: "Language models connected to useful workflows.",
    details:
      "LLM integration, prompt engineering, structured outputs, and tool orchestration. I build around model limitations with validation and practical error handling.",
    tags: ["LangChain", "LangGraph", "LLMs", "Tool calling"],
  },
  {
    title: "Retrieval & evaluation",
    description: "Find the right context. Measure the result.",
    details:
      "RAG pipelines, embeddings, and retrieval evaluation. Comparing ranked results with Recall, MRR, and nDCG to understand what the retriever actually finds.",
    tags: ["RAG", "Chroma", "Pinecone", "BM25"],
  },
];

function useReveals() {
  useEffect(() => {
    if (
      !window.IntersectionObserver ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.documentElement.classList.add("reveal-enabled");
    document
      .querySelectorAll("[data-reveal]")
      .forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-enabled");
    };
  }, []);
}

function ProjectArt({ project }) {
  if (project.visual === "maze")
    return (
      <div className="project-art game-art">
        <img
          src={game}
          alt="GridQuest gameplay with a generated maze and pursuing hunter"
          loading="lazy"
          width="1100"
          height="820"
        />
      </div>
    );
  if (project.visual === "retrieval")
    return (
      <div className="project-art benchmark-art" aria-hidden="true">
        <div className="report-sheet">
          <div className="report-top">
            retrievalbench<span>PYTHON / CLI</span>
          </div>
          <h4>
            Better context.
            <br />
            Measured.
          </h4>
          <div className="metric-labels">
            <span>Recall@K</span>
            <span>MRR@K</span>
            <span>nDCG@K</span>
          </div>
          <div className="report-rule" />
          <p>$ python -m retrievalbench evaluate</p>
          <small>ranked results → relevance judgments → report</small>
        </div>
      </div>
    );
  if (project.visual === "taskhub")
    return (
      <div className="project-art task-art" aria-hidden="true">
        <div className="api-sheet">
          <div className="app-window-top">
            <i />
            <i />
            <i />
            <span>taskhub / backend</span>
          </div>
          <div className="api-content">
            <small>ASYNCHRONOUS TEXT PROCESSING</small>
            <h4>
              Accept now.
              <br />
              Process later.
            </h4>
            <div className="api-call">
              <b>POST</b>
              <span>/v1/jobs</span>
              <em>202 Accepted</em>
            </div>
            <div className="job-path">
              <span>queued</span>
              <span>running</span>
              <span>succeeded</span>
            </div>
            <p>FastAPI / PostgreSQL / Redis</p>
          </div>
        </div>
      </div>
    );
  return (
    <div
      className={`project-art diagram-art art-${project.visual}`}
      aria-hidden="true"
    >
      <span className="diagram-label">{project.kind} / SYSTEM STUDY</span>
      <div className="diagram-nodes">
        {project.code.map((label, index) => (
          <React.Fragment key={label}>
            {index > 0 && <span className="diagram-line" />}
            <span>{label}</span>
          </React.Fragment>
        ))}
      </div>
      <span className="diagram-title">
        {project.visual === "document" ? (
          <>
            Context
            <br />
            changes everything.
          </>
        ) : project.visual === "agent" ? (
          <>
            Tools.
            <br />
            With direction.
          </>
        ) : (
          <>
            Conversation
            <br />
            to structure.
          </>
        )}
      </span>
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("All projects");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSpecialty, setOpenSpecialty] = useState(null);
  const menuButton = useRef(null),
    menuPanel = useRef(null),
    gallery = useRef(null);
  useReveals();
  const visible = projects.filter(
    (project) => filter === "All projects" || project.category === filter,
  );
  useEffect(() => {
    if (!menuOpen) return;
    const before = document.body.style.overflow;
    const returnFocus = menuButton.current;
    document.body.style.overflow = "hidden";
    const focusable = () =>
      Array.from(menuPanel.current?.querySelectorAll("a,button") || []);
    focusable()[0]?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key === "Tab") {
        const items = focusable(),
          first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = before;
      document.removeEventListener("keydown", onKey);
      returnFocus?.focus();
    };
  }, [menuOpen]);
  function selectFilter(value) {
    setFilter(value);
    if (gallery.current) gallery.current.scrollLeft = 0;
  }
  function shiftGallery(direction) {
    const node = gallery.current;
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    node?.scrollBy({
      left: direction * node.clientWidth * 0.78,
      behavior: reduced ? "auto" : "smooth",
    });
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className="site-header page-width"
        aria-hidden={menuOpen || undefined}
        inert={menuOpen || undefined}
      >
        <a className="wordmark" href="#home" aria-label="Bhuvan M home">
          BHUVAN
          <br />M<span>©</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href, text]) => (
            <a key={href} aria-label={label} href={href}>
              [ {text} ]
            </a>
          ))}
        </nav>
        <a className="contact-shortcut" href="#contact">
          CONTACT ME <ArrowUpRight size={19} />
        </a>
        <button
          className="menu-toggle"
          ref={menuButton}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          menu <span>+</span>
        </button>
      </header>
      {menuOpen && (
        <div
          id="site-menu"
          className="menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          ref={menuPanel}
        >
          <div className="menu-overlay-top">
            <span>BHUVAN M / PORTFOLIO</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={30} />
            </button>
          </div>
          <nav aria-label="Expanded navigation">
            {navigation.map(([label, href], i) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                <small>0{i + 1}</small>
                {label}
                <ArrowUpRight />
              </a>
            ))}
          </nav>
          <a className="menu-mail" href="mailto:bhuvanshetty317@gmail.com">
            bhuvanshetty317@gmail.com ↗
          </a>
        </div>
      )}
      <main
        id="main"
        aria-hidden={menuOpen || undefined}
        inert={menuOpen || undefined}
      >
        <section
          id="home"
          className="hero page-width"
          aria-labelledby="hero-title"
        >
          <div className="hero-kicker">
            <span>PYTHON / BACKEND / APPLIED AI</span>
            <span>PORTFOLIO — 2026</span>
          </div>
          <h1 id="hero-title" aria-label="AI & Python developer">
            AI DEVELOPER
          </h1>
          <div className="hero-composition">
            <div className="hero-disciplines">
              <p>/ PYTHON BACKENDS</p>
              <p>/ AI APPLICATIONS</p>
              <p>/ RETRIEVAL SYSTEMS</p>
            </div>
            <figure className="hero-portrait">
              <img
                src={portrait}
                alt="Bhuvan M"
                width="360"
                height="440"
                fetchPriority="high"
              />
              <figcaption>BHUVAN M — SOFTWARE ENGINEER</figcaption>
            </figure>
            <p className="hero-location">
              BASED IN
              <br />
              BANGALORE, INDIA
            </p>
            <p className="hero-description">
              I BUILD PRACTICAL AI APPLICATIONS AND THE PYTHON BACKENDS BEHIND
              THEM. CLEAR LOGIC. USEFUL TOOLS. THOUGHTFUL ENGINEERING.
            </p>
          </div>
          <div className="hero-bottom">
            <a className="hero-contact" href="mailto:bhuvanshetty317@gmail.com">
              <span>
                LET'S BUILD SOMETHING <ArrowDownRight size={15} />
              </span>
              <strong>bhuvanshetty317@gmail.com</strong>
            </a>
            <a className="recent-work" href="#projects">
              <span>
                RECENT WORK <ArrowDownRight size={16} />
              </span>
              <strong>AI TASKHUB</strong>
            </a>
            <a
              href="#projects"
              className="scroll-cue"
              aria-label="Scroll to projects"
            >
              SCROLL TO EXPLORE ↓
            </a>
          </div>
        </section>
        <section
          className="work-section"
          id="projects"
          aria-labelledby="work-title"
        >
          <div className="page-width work-heading" data-reveal>
            <span className="section-marker">DEV / 01</span>
            <h2 id="work-title">
              selected
              <br />
              <span>works</span>
              <sup>(06)</sup>
            </h2>
            <p>
              AI applications. Backend systems.
              <br />A little curiosity, built in Python.
            </p>
          </div>
          <div className="page-width work-toolbar">
            <div
              className="project-filters"
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((value) => (
                <button
                  key={value}
                  aria-pressed={filter === value}
                  onClick={() => selectFilter(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <span className="project-count" aria-live="polite">
              {String(visible.length).padStart(2, "0")} projects
            </span>
          </div>
          <div
            className="work-track"
            ref={gallery}
            role="region"
            aria-label="Project gallery"
            tabIndex="0"
          >
            {visible.map((project, i) => (
              <article className="work-card" key={project.repo}>
                <ProjectArt project={project} />
                <div className="work-card-meta">
                  <span>
                    {String(i + 1).padStart(2, "0")} /{" "}
                    <span>{project.kind}</span>
                  </span>
                  <span>{project.tech.join(" / ")}</span>
                </div>
                <div className="work-card-title">
                  <h3>{project.name}</h3>
                  <a
                    href={`${github}/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source`}
                  >
                    <ArrowUpRight size={31} />
                  </a>
                </div>
                <p className="work-description">{project.description}</p>
              </article>
            ))}
          </div>
          <div className="page-width gallery-footer">
            <span>
              SCROLL OR SWIPE TO DISCOVER <ArrowRight size={17} />
            </span>
            <div>
              <button
                aria-label="Previous projects"
                onClick={() => shiftGallery(-1)}
              >
                <ArrowLeft />
              </button>
              <button
                aria-label="Next projects"
                onClick={() => shiftGallery(1)}
              >
                <ArrowRight />
              </button>
            </div>
            <a
              href={`${github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              ALL REPOSITORIES ↗
            </a>
          </div>
        </section>
        <section
          id="about"
          className="about-section page-width"
          aria-labelledby="about-title"
        >
          <div className="section-topline" data-reveal>
            <span className="section-marker">DEV / 02</span>
            <span>[ ABOUT ME ]</span>
          </div>
          <div className="about-intro" data-reveal>
            <h2 id="about-title">
              a human
              <br />
              behind the <em>logic.</em>
            </h2>
            <div>
              <span className="small-label">HELLO, I'M BHUVAN M.</span>
              <p>
                I work at the intersection of AI and software engineering.
                Connecting language models to useful tools. Building the
                application logic around them. Understanding how it all fits
                together.
              </p>
              <a
                className="underlined-link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                MORE ON GITHUB <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="about-principles" data-reveal>
            <span>MY APPROACH</span>
            <p>
              Make it useful.
              <br />
              Keep it understandable.
              <br />
              <span>Know the tradeoffs.</span>
            </p>
            <div>
              <p>
                From RAG pipelines and agent workflows to API design and graph
                search, I like turning complex ideas into software that makes
                sense.
              </p>
              <p>
                My foundation spans Python, Java, Spring, SQL, and full-stack
                development. These projects are where I put that learning into
                practice.
              </p>
            </div>
          </div>
        </section>
        <section
          id="expertise"
          className="expertise-section page-width"
          aria-labelledby="expertise-title"
        >
          <div className="section-topline" data-reveal>
            <span className="section-marker">DEV / 03</span>
            <span>[ WHAT I WORK WITH ]</span>
          </div>
          <h2 id="expertise-title" data-reveal>
            expertise<span> /</span>
          </h2>
          <div className="expertise-list">
            {specialties.map((item, i) => (
              <div
                className={`expertise-item ${openSpecialty === i ? "is-open" : ""}`}
                key={item.title}
              >
                <button
                  aria-expanded={openSpecialty === i}
                  aria-controls={`expertise-${i}`}
                  onClick={() =>
                    setOpenSpecialty(openSpecialty === i ? null : i)
                  }
                >
                  <span className="expertise-number">00-{i + 1}</span>
                  <span className="expertise-name">{item.title}</span>
                  <span className="expertise-caption">{item.description}</span>
                  {openSpecialty === i ? <Minus /> : <Plus />}
                </button>
                <div
                  className="expertise-detail"
                  id={`expertise-${i}`}
                  hidden={openSpecialty !== i}
                >
                  <p>{item.details}</p>
                  <div>
                    {item.tags.map((tag) => (
                      <span key={tag}>/ {tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <footer
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="page-width">
            <div className="section-topline">
              <span className="section-marker">DEV / 04</span>
              <span>[ LET'S CONNECT ]</span>
            </div>
            <p className="contact-preface">HAVE A ROLE OR AN IDEA IN MIND?</p>
            <a
              className="contact-title-link"
              href="mailto:bhuvanshetty317@gmail.com"
              aria-label="Email Bhuvan"
            >
              <h2 id="contact-title">let's talk.</h2>
              <ArrowUpRight />
            </a>
            <div className="contact-details">
              <a href="mailto:bhuvanshetty317@gmail.com">
                bhuvanshetty317@gmail.com
              </a>
              <div>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  [ GITHUB ↗ ]
                </a>
                <a
                  href="https://www.linkedin.com/in/bhuvan-m-600828217/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [ LINKEDIN ↗ ]
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <a className="footer-name" href="#home">
                bhuvan m.
              </a>
              <span>PYTHON / AI / BACKEND</span>
              <a href="#home">BACK TO TOP ↑</a>
              <span>© 2026 BHUVAN M</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
export default App;
