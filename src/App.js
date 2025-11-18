import React, { useState, useEffect, useRef } from 'react';
import { Code, Brain, Database, Server, Mail, Phone, MapPin, Github, Linkedin, ChevronDown, Terminal, Cpu, Sparkles, Zap, Award, Briefcase, GraduationCap, Rocket, Menu, X, Download, Monitor } from 'lucide-react';
import profile from './assets/profile.jpeg';
export default function AIPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const lastSectionRef = useRef('home');


  const sectionTexts = {
     home: "Welcome to my AI portfolio;-) Explore my journey in building intelligent systems.", 
    about: "AI-driven Software Engineer specializing in intelligent systems.", 
    projects: "Featured projects: Cognito-Agent AI Chatbot and E-commerce platforms.", 
    skills: "Tech stack: AI, Java, Spring, React, Python, LLM Integration, and more.", 
    experience: "AI Developer @ BizzHub | BE Computer Science", 
    contact: "Let's build something amazing together. Get in touch for collaborations!" 
  };


  useEffect(() => {
    document.title = "Bhuvan's Portfolio - AI Developer";
    
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = profile;
    document.getElementsByTagName('head')[0].appendChild(link);

    setIsVisible(true);
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (lastSectionRef.current !== section) {
              setIsTransitioning(true);
              setTimeout(() => setIsTransitioning(false), 500);
              lastSectionRef.current = section;
            }
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    setIsTyping(true);
    setTypedText('');
    
    const text = sectionTexts[activeSection] || '';
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
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
      impact: 'Improved data processing speed by 40%'
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
      impact: 'Streamlined operations for 50+ vendors'
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-emerald-900/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-green-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-emerald-900/30 z-40">
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

<div className="fixed right-6 bottom-6 z-30 hidden xl:block" style={{ width: '300px', height: '320px' }}>
  <div className="relative w-full h-full">
    <div className="absolute inset-0">
      <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute inset-2 rounded-2xl bg-cyan-500/5 blur-lg animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
      
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-15">
        <div className="absolute inset-0 animate-float-data">
          <div className="text-emerald-400 text-xs font-mono whitespace-nowrap">
             INITIATING_AI_SYSTEM...
          </div>
          <div className="text-cyan-400 text-xs font-mono whitespace-nowrap mt-3">
             CONNECTION_ESTABLISHED
          </div>
          <div className="text-purple-400 text-xs font-mono whitespace-nowrap mt-3">
             READY_FOR_INTERACTION
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-8 h-8 bg-emerald-400/20 rounded-full blur-md animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-cyan-400/20 rounded-full blur-md animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-0 right-0 w-6 h-6 bg-purple-400/20 rounded-full blur-md animate-pulse" style={{animationDelay: '0.7s'}}></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 bg-pink-400/20 rounded-full blur-md animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>

    <div className="robot-float w-full h-full relative">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-6 border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-105 group">
          
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-circuit-flow"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent animate-circuit-flow" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="mb-4 relative z-10" style={{ height: '130px' }}>
            <div className={`bg-black border-2 border-emerald-400 rounded-lg p-3 h-full w-full relative overflow-hidden ${isTransitioning ? 'glitch-active' : ''}`}>
              
              <div className="absolute inset-0 opacity-10">
                <div className="animate-matrix-stream">
                  <div className="text-emerald-400 text-xs font-mono tracking-widest">0101 0110 1001</div>
                  <div className="text-green-400 text-xs font-mono tracking-widest mt-2">1010 1001 0110</div>
                  <div className="text-cyan-400 text-xs font-mono tracking-widest mt-2">1100 0011 1100</div>
                </div>
              </div>
              
              {/* Enhanced Scanline effect */}
              <div className="absolute inset-0 opacity-20 scanline pointer-events-none"></div>
              
              {/* Monitor Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-emerald-400 text-sm font-mono mb-1 flex-shrink-0 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                    {activeSection.toUpperCase()}.AI
                  </div>
                  <div className="text-cyan-400 text-[10px] animate-digital-pulse">LIVE</div>
                </div>
                <div className="text-emerald-300 text-xs font-mono leading-tight flex-1 overflow-hidden break-words">
                  <div className="h-full" style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {typedText}
                    <span className={`inline-block w-1 h-3 bg-emerald-400 ml-0.5 ${isTyping ? 'animate-pulse' : ''}`}></span>
                  </div>
                </div>
                <div className="text-emerald-500 text-[10px] font-mono mt-1 flex-shrink-0 flex justify-between">
                  <span className="flex items-center">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full mr-1 animate-pulse"></div>
                    SYSTEM_ACTIVE
                  </span>
                  <span className="text-cyan-400 flex items-center">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mr-1 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    AI_MODE
                  </span>
                </div>
              </div>

              {/* Corner Terminal Brackets */}
              <div className="absolute top-1 left-1 text-emerald-400 text-[8px] font-mono">{'>'}</div>
              <div className="absolute top-1 right-1 text-emerald-400 text-[8px] font-mono">{'<'}</div>
              <div className="absolute bottom-1 left-1 text-emerald-400 text-[8px] font-mono">{'>'}</div>
              <div className="absolute bottom-1 right-1 text-emerald-400 text-[8px] font-mono">{'<'}</div>
            </div>
            
            {/* Enhanced Monitor Stand with Pulsing Light */}
            <div className="flex justify-center -mt-1">
              <div className="w-20 h-2 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-lg border border-emerald-500/30 relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              </div>
            </div>
          </div>

          {/* Enhanced Robot Head with Dynamic Expressions */}
          <div className="flex justify-center mb-3 relative z-10" style={{ height: '55px' }}>
            <div className="w-16 h-14 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full border-2 border-emerald-500/50 relative group/head hover:border-cyan-400/50 transition-colors duration-300">
              
              {/* Enhanced Animated Eyes with Hover Effects */}
              <div className="flex justify-center space-x-4 mt-3">
                <div className="relative group/eye">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full blink shadow-lg shadow-emerald-400/50 group-hover/head:scale-110 transition-transform duration-300"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                  {/* Eye shine */}
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80"></div>
                </div>
                <div className="relative group/eye">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full blink shadow-lg shadow-emerald-400/50 group-hover/head:scale-110 transition-transform duration-300" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75" style={{animationDelay: '0.2s'}}></div>
                  {/* Eye shine */}
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80"></div>
                </div>
              </div>
              
              {/* Enhanced Antenna with Signal Waves */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="w-1 h-5 bg-gradient-to-t from-emerald-500 to-cyan-500"></div>
                <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blink mx-auto -mt-1 shadow-lg shadow-emerald-400/50 relative">
                  {/* Signal Waves */}
                  <div className="absolute -inset-2 border border-emerald-400 rounded-full animate-ping"></div>
                  <div className="absolute -inset-3 border border-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                </div>
              </div>

              {/* Animated Mouth/Expression */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <div className="w-6 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full group-hover/head:w-8 transition-all duration-300 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Animated Body Details */}
          <div className="flex justify-center space-x-3 mb-3 relative z-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative group/detail">
                <div className="w-6 h-1 bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 rounded-full"></div>
                <div className="absolute inset-0 w-6 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse opacity-60" style={{animationDelay: `${i * 0.3}s`}}></div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover/detail:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Robot Base with Interactive Status Lights */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg p-3 border border-emerald-500/30 relative z-10 group/base" style={{ height: '45px' }}>
            <div className="flex justify-center space-x-3 h-full items-center">
              {[
                { color: 'emerald', label: 'POWER', delay: '1s' },
                { color: 'cyan', label: 'AI_CORE', delay: '1.3s' },
                { color: 'purple', label: 'DATA', delay: '1.6s' },
                { color: 'pink', label: 'NETWORK', delay: '1.9s' }
              ].map((light, i) => (
                <div key={i} className="relative group/light">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br from-${light.color}-500 to-${light.color}-300 blink`} style={{animationDelay: light.delay}}></div>
                  <div className={`absolute inset-0 w-3 h-3 rounded-full bg-${light.color}-400 animate-ping opacity-40`} style={{animationDelay: light.delay}}></div>
                  
                  {/* Enhanced Tooltip */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[7px] px-1.5 py-0.5 rounded border border-emerald-500/30 opacity-0 group-hover/light:opacity-100 transition-all duration-300 whitespace-nowrap transform -translate-y-2 group-hover/light:translate-y-0">
                    {light.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Base Glow Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover/base:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Enhanced Robot Arms with Interactive Joints */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 group-hover:-left-4 transition-all duration-500">
            <div className="w-4 h-14 bg-gradient-to-r from-gray-700 to-gray-600 rounded-l-full border-l border-emerald-500/30 relative group/arm">
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full blink group-hover/arm:bg-cyan-400 transition-colors duration-300"></div>
              {/* Arm joint glow */}
              <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400/20 rounded-full group-hover/arm:bg-cyan-400/30 transition-colors duration-300"></div>
            </div>
          </div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 group-hover:-right-4 transition-all duration-500">
            <div className="w-4 h-14 bg-gradient-to-l from-gray-700 to-gray-600 rounded-r-full border-r border-emerald-500/30 relative group/arm">
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full blink group-hover/arm:bg-emerald-400 transition-colors duration-300" style={{animationDelay: '0.7s'}}></div>
              {/* Arm joint glow */}
              <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400/20 rounded-full group-hover/arm:bg-emerald-400/30 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Particles with Glow */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-emerald-400 rounded-full blink animate-float" style={{animationDelay: '0.3s'}}>
          <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-cyan-400 rounded-full blink animate-float" style={{animationDelay: '0.7s'}}>
          <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '0.3s'}}></div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
      <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
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
      <section id="projects" className="min-h-screen py-20 bg-black flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex items-center space-x-3 mb-12">
            <Code className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">Featured Projects</h2>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-900/10 to-emerald-950/10 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-emerald-300 mb-2">{project.title}</h3>
                    <span className="text-emerald-400/70 text-sm font-semibold">{project.type}</span>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                    project.status === 'In Development' 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {project.status}
                  </span>
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
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-emerald-900/30 border border-emerald-500/30 px-3 py-1 rounded-lg text-xs text-emerald-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black flex items-center">
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
      <section id="experience" className="min-h-screen py-20 bg-black flex items-center">
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
      <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black flex items-center">
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
                  href="https://linkedin.com/in/bhuvan-m" 
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
            <div className="flex space-x-4">
              <a 
                href="https://github.com/bhuvanshetty" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/bhuvan-m" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {scrollProgress > 20 && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-500 p-4 rounded-full shadow-lg z-40"
        >
          <ChevronDown className="w-6 h-6 text-white rotate-180" />
        </button>
      )}
    </div>
  );
}