import React, { useState, useEffect } from 'react';
import { Code, Brain, Database, Server, Mail, Phone, MapPin, Github, Linkedin, ChevronDown, Terminal, Cpu, Sparkles, Zap, Award, Briefcase, GraduationCap, Rocket, Menu, X, ExternalLink, Download } from 'lucide-react';
import profileImage from '../src/assets/profile.jpeg'
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      description: 'Building an advanced agentic AI chatbot leveraging Generative AI and LLM technology for intelligent, context-aware enterprise interactions. The system implements multi-agent orchestration with autonomous decision-making capabilities, real-time learning from user interactions, and seamless enterprise system integration.',
      tech: ['Generative AI', 'LLM', 'Agentic Workflows', 'Python', 'LangChain', 'React', 'Vector DB'],
      highlights: [
        'Multi-agent orchestration with autonomous reasoning',
        'Context-aware conversational memory',
        'Real-time learning and adaptation',
        'Enterprise system integration via REST APIs',
        'Scalable microservices architecture'
      ],
      status: 'In Development',
      impact: 'Expected to reduce query resolution time by 60%'
    },
    {
      title: 'PCMS - Provider Care Management Solutions',
      type: 'Enterprise Healthcare Platform',
      description: 'Developed a robust healthcare management system with advanced data processing capabilities using Java and Snowflake integration. Implemented efficient data pipelines for processing large-scale healthcare data, enabling real-time analytics and reporting.',
      tech: ['Java', 'Snowflake', 'Spring MVC', 'RESTful APIs', 'Data Pipeline'],
      highlights: [
        'Data pipeline optimization for healthcare records',
        'Cross-team collaboration and Agile methodology',
        'Performance enhancement through query optimization',
        'Secure data handling compliant with standards',
        'Real-time reporting and analytics dashboard'
      ],
      status: 'Completed',
      impact: 'Improved data processing speed by 40%'
    },
    {
      title: 'MediSales - Medicine E-Commerce Platform',
      type: 'Full Stack Web Application',
      description: 'Built a comprehensive e-commerce platform enabling manufacturers, distributors, and vendors to manage medicine sales operations efficiently. Implemented multi-role authentication, real-time inventory management, and order processing workflows.',
      tech: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'JavaScript', 'AJAX', 'HTML/CSS'],
      highlights: [
        'Multi-role authentication system (Manufacturer, Distributor, Vendor)',
        'Real-time inventory tracking and management',
        'RESTful API architecture for scalability',
        'Asynchronous order processing with AJAX',
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
    <div className="min-h-screen bg-black text-gray-100 relative">
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
              <Terminal className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                BHUVAN.M
              </span>
            </div>
            
            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-emerald-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-black to-emerald-950/20" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <img 
                src={profileImage}
                alt="Bhuvan M"
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-emerald-500/50 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
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
           Building scalable AI systems using <span className="text-emerald-400 font-semibold">Python, LangChain</span> and advanced <span className="text-emerald-400 font-semibold">LLM-driven architectures</span> to deliver intelligent, high-performance solutions.
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
            <a 
              href="mailto:bhuvanshetty317@gmail.com"
              className="border-2 border-emerald-500/30 hover:bg-emerald-900/20 px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Resume</span>
            </a>
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
      <section id="about" className="py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-3 mb-12">
            <Brain className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-emerald-300">AI-Driven Software Engineer</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm an <span className="text-emerald-400 font-semibold">AI-driven Software Engineer</span> specializing in the intersection of robust backend architecture and intelligent system design, with proven expertise in <span className="text-emerald-400">Java, Spring MVC, Hibernate</span>, and enterprise-grade full stack development.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Currently building cutting-edge <span className="text-emerald-400 font-semibold">Agentic AI Chatbots</span> at <span className="text-emerald-400">BizzHub Workspaces</span>, leveraging Generative AI and LLM technology to create context-aware, intelligent systems. My foundation in Prompt Engineering enhanced model accuracy by <span className="text-emerald-400 font-semibold">15%</span> through systematic optimization.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I architect scalable solutions that bridge traditional backend engineering with cutting-edge Generative AI capabilities—creating systems that don't just process data, they <span className="text-emerald-400 font-semibold">reason, adapt, and deliver intelligent outcomes</span>.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  icon: Cpu, 
                  label: 'Agentic AI Development', 
                  value: 'Building intelligent multi-agent systems with autonomous decision-making',
                  color: 'emerald'
                },
                { 
                  icon: Server, 
                  label: 'Backend Architecture', 
                  value: 'Enterprise Java, Spring ecosystem, microservices design',
                  color: 'green'
                },
                { 
                  icon: Brain, 
                  label: 'LLM Integration', 
                  value: 'Generative AI, prompt engineering, context management',
                  color: 'emerald'
                },
                { 
                  icon: Database, 
                  label: 'Data Management', 
                  value: 'Hibernate ORM, MySQL, Snowflake, vector databases',
                  color: 'green'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 hover:bg-emerald-900/20 transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-500/10 p-3 rounded-lg group-hover:bg-emerald-500/20 transition-all">
                      <item.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-emerald-300 mb-1">{item.label}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-3 mb-12">
            <Code className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">Featured Projects</h2>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-900/10 to-emerald-950/10 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all group hover:shadow-2xl hover:shadow-emerald-500/10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-start space-x-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-emerald-300 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      {idx === 0 && <Zap className="w-5 h-5 text-yellow-400 animate-pulse flex-shrink-0 mt-1" />}
                    </div>
                    <span className="text-emerald-400/70 text-sm font-semibold">{project.type}</span>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                    project.status === 'In Development' 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                {project.impact && (
                  <div className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded px-4 py-3 mb-6">
                    <p className="text-emerald-300 font-semibold text-sm flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Impact: {project.impact}
                    </p>
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center">
                    <ChevronDown className="w-4 h-4 mr-1 rotate-[-90deg]" />
                    Key Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-emerald-900/30 border border-emerald-500/30 px-3 py-1 rounded-lg text-xs text-emerald-300 hover:bg-emerald-900/50 transition-colors">
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
      <section id="skills" className="py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-3 mb-12">
            <Cpu className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">Technical Arsenal</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <div key={idx} className="bg-emerald-900/10 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/50 hover:bg-emerald-900/20 transition-all group">
                <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center group-hover:text-emerald-400 transition-colors">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:animate-pulse" />
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2 group/item">
                      <ChevronDown className="w-3 h-3 text-emerald-400 rotate-[-90deg] flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span className="text-gray-300 text-sm group-hover/item:text-emerald-300 transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-3 mb-12">
            <Briefcase className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">Professional Journey</h2>
          </div>
          
          <div className="space-y-8">
            {/* Current Role */}
            <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-950/20 border-2 border-emerald-500/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-emerald-500/60 transition-all">
              <div className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-400 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold animate-pulse">
                CURRENT
              </div>
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-emerald-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-300">AI Developer</h3>
                  <p className="text-emerald-400/70 font-semibold">BizzHub Workspaces, Bangalore</p>
                  <p className="text-gray-400 text-sm">October 2025 - Present</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Architecting and developing advanced <span className="text-emerald-400 font-semibold">Agentic AI Chatbot systems</span> leveraging Generative AI and LLM technology. Building intelligent, context-aware conversational agents with multi-agent orchestration capabilities, real-time learning, and enterprise integration for scalable AI-driven solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'LLM Integration', 'Agentic Workflows', 'Java', 'Spring Boot', 'Microservices'].map((tech, i) => (
                  <span key={i} className="bg-emerald-900/40 border border-emerald-500/40 px-3 py-1 rounded text-xs text-emerald-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Previous Role */}
            <div className="bg-emerald-900/10 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all group">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-emerald-500/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-300">Prompt Engineer</h3>
                  <p className="text-emerald-400/70 font-semibold">Analogica Pvt. Ltd.</p>
                  <p className="text-gray-400 text-sm">August 2023 - September 2023</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Optimized AI-driven prompts for production LLM systems, achieving a <span className="text-emerald-400 font-semibold">15% measurable increase in model performance and response accuracy</span> through systematic A/B testing and iterative refinement. Collaborated with cross-functional teams to streamline prompt engineering workflows, reducing average query processing time by 20% and establishing best practices for context injection and few-shot learning strategies.
              </p>
            </div>

            {/* Education */}
            <div className="bg-emerald-900/10 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-emerald-500/10 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-300">Education & Certification</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-emerald-500/50 pl-6 hover:border-emerald-500 transition-colors">
                  <h4 className="text-lg font-bold text-emerald-300 mb-1">Bachelor of Engineering - Computer Science</h4>
                  <p className="text-emerald-400/70 font-semibold mb-2">Sambhram Institute of Technology, Bangalore</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                    <span>2020 - 2024</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-semibold">CGPA: 7.4/10</span>
                  </div>
                </div>
                
                <div className="border-l-2 border-emerald-500/50 pl-6 hover:border-emerald-500 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <h4 className="text-lg font-bold text-emerald-300">Java Full Stack Development Certification</h4>
                  </div>
                  <p className="text-emerald-400/70 font-semibold mb-2">Xworkz</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Comprehensive training in enterprise-grade full stack development encompassing Spring Framework ecosystem (Spring MVC, Spring Boot, Spring Data JPA), Hibernate ORM, RESTful API design, React.js integration, and microservices architecture patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Mail className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">Get In Touch</h2>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <p className="text-center text-gray-300 mb-8 text-lg leading-relaxed">
              Interested in building intelligent systems together? Let's connect and create something extraordinary.
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
              
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/60 transition-all text-center sm:col-span-2 lg:col-span-1">
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
              © 2025 Bhuvan M. Building Intelligent Futures with AI & Full Stack Engineering.
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

      {/* Scroll to Top Button */}
      {scrollProgress > 20 && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-500 p-4 rounded-full shadow-lg hover:shadow-emerald-500/50 transition-all z-40 group animate-fade-in"
        >
          <ChevronDown className="w-6 h-6 text-white rotate-180 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
}