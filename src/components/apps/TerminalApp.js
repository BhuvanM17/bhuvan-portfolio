import React, { useState, useEffect, useRef } from 'react';


export default function TerminalApp() {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to BhuvanOS v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    if (inputRef.current) inputRef.current.focus();
  }, [history]);

  const projects = [
    { name: 'Cognito-Agent', desc: 'Enterprise Agentic AI Chatbot | Python, LangChain' },
    { name: 'PCMS', desc: 'Healthcare Provider Management | Java, Snowflake' },
    { name: 'MediSales', desc: 'E-commerce Platform | Spring MVC, Hibernate' }
  ];

  const skills = {
    backend: ['Java', 'Spring Boot', 'Hibernate', 'Microservices'],
    ai: ['Generative AI', 'LLMs', 'Prompt Engineering', 'LangChain'],
    frontend: ['React', 'Tailwind', 'JavaScript'],
    tools: ['Git', 'Docker', 'AWS', 'Postman']
  };

  const commands = {
    help: () => (
      <div className="space-y-1">
        <div>Available commands:</div>
        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-emerald-400">about</span><span>Who am I?</span>
          <span className="text-emerald-400">skills</span><span>Technical arsenal</span>
          <span className="text-emerald-400">projects</span><span>Featured works</span>
          <span className="text-emerald-400">social</span><span>Connect with me</span>
          <span className="text-emerald-400">clear</span><span>Clear terminal</span>
        </div>
      </div>
    ),
    about: () => (
      <div className="space-y-2 max-w-2xl">
        <div className="text-xl font-bold text-emerald-300">Bhuvan M</div>
        <div className="text-emerald-400/80">AI-Driven Software Engineer</div>
        <p>
          Specializing in intelligent systems with expertise in Java, Spring MVC, and Agentic AI.
          Currently building next-gen AI Chatbots at BizzHub.
        </p>
      </div>
    ),
    skills: () => (
      <div className="space-y-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <span className="text-emerald-400 font-bold capitalize w-24 inline-block">{category}:</span>
            <span className="text-gray-300">{items.join(', ')}</span>
          </div>
        ))}
      </div>
    ),
    projects: () => (
      <div className="space-y-3">
        {projects.map(p => (
          <div key={p.name}>
            <div className="text-emerald-300 font-bold">{p.name}</div>
            <div className="text-gray-400 text-sm">{p.desc}</div>
          </div>
        ))}
        <div className="text-gray-500 text-xs italic mt-2">Type "open &lt;project_name&gt;" for more details (Coming Soon)</div>
      </div>
    ),
    social: () => (
       <div className="space-y-1">
        <div><span className="w-20 inline-block text-emerald-400">GitHub:</span> https://github.com/BhuvanM17</div>
        <div><span className="w-20 inline-block text-emerald-400">LinkedIn:</span> https://www.linkedin.com/in/bhuvan-m-600828217?utm_source=share_via&utm_content=profile&utm_medium=member_android</div>
        <div><span className="w-20 inline-block text-emerald-400">Email:</span> bhuvanshetty317@gmail.com</div>
      </div>
    ),
    clear: () => {
      setHistory([]);
      return null;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      
      let response = null;
      if (cmd) {
        if (commands[cmd]) {
          response = commands[cmd]();
        } else {
          response = <span className="text-red-400">Command not found: {cmd}</span>;
        }
      }

      if (cmd !== 'clear') {
         setHistory(prev => [...prev, 
          { type: 'input', content: input },
          ...(response ? [{ type: 'output', content: response }] : [])
        ]);
      }
      
      setInput('');
    }
  };

  return (
    <div className="h-full bg-black/90 text-gray-200 p-4 font-mono text-sm overflow-hidden flex flex-col" onClick={() => inputRef.current?.focus()}>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {history.map((line, i) => (
          <div key={i} className="mb-2">
            {line.type === 'input' ? (
              <div className="flex items-center">
                 <span className="text-emerald-500 mr-2">➜</span>
                 <span className="text-cyan-400 mr-2">~</span>
                 <span>{line.content}</span>
              </div>
            ) : (
              <div className="ml-4">{line.content}</div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      
      <div className="flex items-center mt-2 group">
        <span className="text-emerald-500 mr-2">➜</span>
        <span className="text-cyan-400 mr-2">~</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none flex-1 w-full text-gray-100 placeholder-emerald-900/50"
          autoComplete="off"
          placeholder="Type help..."
        />
      </div>
    </div>
  );
}
