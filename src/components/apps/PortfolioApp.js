import React, { useState, useEffect, useRef } from 'react';
import { Code, Brain, Database, Server, Mail, Phone, MapPin, Github, Linkedin, ChevronDown, Terminal, Cpu, Sparkles, Award, Briefcase, GraduationCap, Rocket, Menu, X, Monitor } from 'lucide-react';
import profile from '../../assets/profile.jpeg';

export default function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const lastSectionRef = useRef('home');
  const containerRef = useRef(null);

  const sectionTexts = {
     home: "Welcome to my AI portfolio;-) Explore my journey in building intelligent systems.", 
    about: "AI-driven Software Engineer specializing in intelligent systems.", 
    projects: "Featured projects: Cognito-Agent AI Chatbot and E-commerce platforms.", 
    skills: "Tech stack: AI, Java, Spring, React, Python, LLM Integration, and more.", 
    experience: "AI Developer @ BizzHub | BE Computer Science", 
    contact: "Let's build something amazing together. Get in touch for collaborations!" 
  };

  useEffect(() => {
    setIsVisible(true);
    
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const containerRect = container.getBoundingClientRect();
          const rect = element.getBoundingClientRect();
          
          // Check intersection with container's view area
          // We add a simplified check: if the top of the section is near the top of the container
          const offsetTop = rect.top - containerRect.top;
          
          if (offsetTop <= 300 && offsetTop >= -300) {
            if (lastSectionRef.current !== section) {
              lastSectionRef.current = section;
            }
            setActiveSection(section);
            break;
          }
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    const text = sectionTexts[activeSection] || '';
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex > text.length) {
        clearInterval(typingInterval);
      }
      currentIndex++;
    }, 30);

    return () => clearInterval(typingInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  const skills = {
    'Backend Development': ['Java', 'Spring MVC', 'Spring Boot', 'Hibernate', 'JDBC', 'JPA', 'Servlets', 'Java 8'],
    'AI/ML Integration': ['Generative AI', 'LLM Integration', 'Agentic AI', 'Prompt Engineering', 'AI Chatbots', 'OpenAI API'],
    'Frontend Technologies': ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'AJAX', 'Responsive Design'],
    'Database & Storage': ['MySQL', 'Snowflake', 'ORM Tools', 'Database Design', 'Query Optimization'],
    'Tools & DevOps': ['Git/GitHub', 'Maven', 'Eclipse', 'IntelliJ IDEA', 'Tomcat', 'Postman']
  };

  const projects = [
    {
      title: 'Cognito-Agent: Enterprise Agentic AI Chatbot',
      type: 'Current Development @ BizzHub',
      description: 'Building an advanced agentic AI chatbot leveraging Generative AI and LLM technology for intelligent, context-aware enterprise interactions.',
      tech: ['Generative AI', 'LLM', 'Agentic Workflows', 'Python', 'LangChain', 'React'],
      highlights: [
        'Multi-agent orchestration with autonomous reasoning',
        'Context-aware conversational memory',
        'Real-time learning and adaptation',
        'Enterprise system integration via REST APIs'
      ],
      status: 'In Development',
      impact: 'Expected to reduce query resolution time by 60%'
    },
    {
      title: 'RAG Chatbot - AI Document Q&A',
      type: 'AI / NLP Personal Project',
      description: 'Built a Retrieval-Augmented Generation (RAG) chatbot that ingests documents, chunks and embeds them into a vector database (Pinecone), and answers user questions using LLM with context-aware retrieval.',
      tech: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'OpenAI', 'React', 'Vercel'],
      highlights: [
        'PDF ingestion with intelligent text chunking',
        'Pinecone vector DB for persistent semantic search',
        'Context-aware Q&A powered by LLM',
        'Session management with New Document support'
      ],
      status: 'Completed',
      impact: 'Deployed on Vercel — live and publicly accessible',
      url: 'https://ragtool.vercel.app/'
    },
    {
      title: 'PCMS - Provider Care Management Solutions',
      type: 'Enterprise Healthcare Platform',
      description: 'Developed a robust healthcare management system with advanced data processing capabilities using Java and Snowflake integration.',
      tech: ['Java', 'Snowflake', 'Spring MVC', 'RESTful APIs'],
      highlights: [
        'Data pipeline optimization for healthcare records',
        'Cross-team collaboration and Agile methodology',
        'Performance enhancement through query optimization',
        'Real-time reporting and analytics dashboard'
      ],
      status: 'Completed',
      impact: 'Improved data processing speed by 40%',
      url: 'https://full-stack-java-project.onrender.com'
    },
    {
      title: 'MediSales - Medicine E-Commerce Platform',
      type: 'Full Stack Web Application',
      description: 'Built a comprehensive e-commerce platform enabling manufacturers, distributors, and vendors to manage medicine sales operations efficiently.',
      tech: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'JavaScript'],
      highlights: [
        'Multi-role authentication system',
        'Real-time inventory tracking',
        'RESTful API architecture for scalability',
        'Responsive UI with dynamic content loading'
      ],
      status: 'Completed',
      impact: 'Streamlined operations for 50+ vendors',
      url: 'https://full-stack-java-project.onrender.com'
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="h-full overflow-y-auto bg-black text-gray-100 relative">
      {/* Scroll Progress Bar */}
      <div className="sticky top-0 left-0 w-full h-1 bg-emerald-900/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-green-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation - sticky ensures it stays at top of scrolling container */}
      <nav className="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-emerald-900/30 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-400">
                <img src={profile} alt="Bhuvan" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                BHUVAN.M
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-emerald-400 transition-all duration-300 relative group ${
                    activeSection === section ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            <button 
              className="md:hidden text-emerald-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-2 px-4 rounded-lg transition-all ${
                    activeSection === section 
                      ? 'bg-emerald-900/30 text-emerald-400' 
                      : 'text-gray-300 hover:bg-emerald-900/20'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      
      {/* Rest of the content remains structure-wise same, but IDs are used for scroll targets */}
      {/* Hero Section */}
      <section id="home" className="min-h-full flex items-center justify-center relative overflow-hidden pt-20 pb-20">
             {/* ... content simplified for brevity if needed, but I'll paste the full content again ... */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-black to-emerald-950/20" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-emerald-500/50 shadow-2xl">
                <img src={profile} alt="Bhuvan M" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="bg-emerald-900/30 border border-emerald-500/40 rounded-full px-6 py-2 flex items-center space-x-2 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">AI Developer & Full Stack Engineer</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500 bg-clip-text text-transparent leading-tight">
            Engineering Intelligent Systems<br />That Think & Deliver
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building scalable AI systems using <span className="text-emerald-400 font-semibold">Python, LangChain</span> and advanced <span className="text-emerald-400 font-semibold">LLM-driven architectures</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-emerald-600 hover:bg-emerald-500 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
            >
              <Rocket className="w-5 h-5" />
              <span>View Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-emerald-500/50 hover:bg-emerald-900/30 px-8 py-3 rounded-lg font-semibold transition-all hover:border-emerald-500"
            >
              Get In Touch
            </button>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-block"
          >
            <ChevronDown className="w-8 h-8 text-emerald-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-full py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            {/* Same content as before */}
           <div className="flex items-center space-x-3 mb-12">
            <Brain className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">AI-Driven Software Engineer</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm an <span className="text-emerald-400 font-semibold">AI-driven Software Engineer</span> specializing in intelligent systems with expertise in <span className="text-emerald-400">Java, Spring MVC, Hibernate</span>, and full stack development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently building <span className="text-emerald-400 font-semibold">Agentic AI Chatbots</span> at <span className="text-emerald-400">BizzHub</span>, leveraging Generative AI and LLM technology to create context-aware systems.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Cpu, label: 'Agentic AI Development', value: 'Multi-agent systems with autonomous decision-making' },
                { icon: Server, label: 'Backend Architecture', value: 'Enterprise Java, Spring ecosystem, microservices' },
                { icon: Brain, label: 'LLM Integration', value: 'Generative AI, prompt engineering' },
                { icon: Database, label: 'Data Management', value: 'Hibernate ORM, MySQL, Snowflake' }
              ].map((item, idx) => (
                <div key={idx} className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-500/10 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-300 mb-1">{item.label}</h4>
                      <p className="text-gray-400 text-sm">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-full py-20 bg-black flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            {/* Same content */}
           <div className="flex items-center space-x-3 mb-12">
            <Code className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">Featured Projects</h2>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`bg-gradient-to-br from-emerald-900/10 to-emerald-950/10 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all ${project.url ? 'cursor-pointer hover:bg-emerald-900/20' : ''}`}
                onClick={() => project.url && window.open(project.url, '_blank')}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-emerald-300 mb-2">{project.title}</h3>
                    <span className="text-emerald-400/70 text-sm font-semibold">{project.type}</span>
                  </div>
                  <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                      project.status === 'In Development' 
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                {project.impact && (
                  <div className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded px-4 py-3 mb-6">
                    <p className="text-emerald-300 font-semibold text-sm flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Impact: {project.impact}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-emerald-900/30 border border-emerald-500/30 px-3 py-1 rounded-lg text-xs text-emerald-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <div className="mt-4 pt-4 border-t border-emerald-900/30">
                    <button 
                      className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors group"
                    >
                      <span>View Live Project</span>
                      <Monitor className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-full py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black flex items-center">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex items-center space-x-3 mb-12">
            <Cpu className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">Technical Arsenal</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <div key={idx} className="bg-emerald-900/10 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/50 hover:bg-emerald-900/20 transition-all">
                <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse" />
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <ChevronDown className="w-3 h-3 text-emerald-400 rotate-[-90deg] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-full py-20 bg-black flex items-center">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex items-center space-x-3 mb-12">
            <Briefcase className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">Professional Journey</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-950/20 border-2 border-emerald-500/40 rounded-2xl p-6 sm:p-8 relative">
              <div className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-400 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold animate-pulse">
                CURRENT
              </div>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-emerald-500/20 p-3 rounded-xl">
                  <Brain className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-300">AI Developer</h3>
                  <p className="text-emerald-400/70 font-semibold">BizzHub Workspaces, Bangalore</p>
                  <p className="text-gray-400 text-sm">October 2025 - Present</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Architecting advanced <span className="text-emerald-400 font-semibold">Agentic AI Chatbot systems</span> leveraging Generative AI and LLM technology with multi-agent orchestration capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'LLM Integration', 'Agentic Workflows', 'Python', 'Spring Boot'].map((tech, i) => (
                  <span key={i} className="bg-emerald-900/40 border border-emerald-500/40 px-3 py-1 rounded text-xs text-emerald-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-emerald-900/10 border border-emerald-500/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-emerald-500/10 p-3 rounded-xl">
                  <Terminal className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-300">Prompt Engineer</h3>
                  <p className="text-emerald-400/70 font-semibold">Analogica Pvt. Ltd.</p>
                  <p className="text-gray-400 text-sm">August 2023 - September 2023</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Optimized AI-driven prompts achieving <span className="text-emerald-400 font-semibold">15% increase in model performance</span> through systematic A/B testing.
              </p>
            </div>

            <div className="bg-emerald-900/10 border border-emerald-500/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-emerald-500/10 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-300">Education & Certification</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-emerald-500/50 pl-6">
                  <h4 className="text-lg font-bold text-emerald-300 mb-1">Bachelor of Engineering - Computer Science</h4>
                  <p className="text-emerald-400/70 font-semibold mb-2">Sambhram Institute of Technology</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>2020 - 2024</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-semibold">CGPA: 7.4/10</span>
                  </div>
                </div>
                
                <div className="border-l-2 border-emerald-500/50 pl-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <h4 className="text-lg font-bold text-emerald-300">Java Full Stack Development</h4>
                  </div>
                  <p className="text-emerald-400/70 font-semibold">Xworkz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-full py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black flex items-center">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Mail className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">Get In Touch</h2>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <p className="text-center text-gray-300 mb-8 text-lg">
              Interested in building intelligent systems together? Let's connect!
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="mailto:bhuvanshetty317@gmail.com" 
                className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/60 hover:bg-emerald-900/30 transition-all text-center group"
              >
                <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-emerald-300 mb-2">Email</h3>
                <p className="text-gray-400 text-sm break-all">bhuvanshetty317@gmail.com</p>
              </a>
              
              <a 
                href="tel:+919353479947" 
                className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/60 hover:bg-emerald-900/30 transition-all text-center group"
              >
                <Phone className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-emerald-300 mb-2">Phone</h3>
                <p className="text-gray-400 text-sm">+91 9353479947</p>
              </a>
              
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 text-center sm:col-span-2 lg:col-span-1">
                <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h3 className="font-semibold text-emerald-300 mb-2">Location</h3>
                <p className="text-gray-400 text-sm">Bangalore, Karnataka</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-emerald-500/20">
              <h3 className="text-center text-emerald-300 font-semibold mb-4">Connect on Social</h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/bhuvanshetty" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-lg hover:border-emerald-500/60 hover:bg-emerald-900/30 transition-all group"
                >
                  <Github className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/bhuvan-m-600828217/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-lg hover:border-emerald-500/60 hover:bg-emerald-900/30 transition-all group"
                >
                  <Linkedin className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-emerald-900/30 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Bhuvan M</span>
            </div>
            <p className="text-gray-400 text-sm text-center">
              © 2025 Bhuvan M. Building Intelligent Futures with AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
