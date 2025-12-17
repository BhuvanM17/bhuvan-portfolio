import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, Award, Brain } from 'lucide-react';

export default function AboutApp() {
  const [activeTab, setActiveTab] = useState('bio');

  const tabs = [
    { id: 'bio', label: 'Biography', icon: User },
    { id: 'exp', label: 'Experience', icon: Briefcase },
    { id: 'edu', label: 'Education', icon: GraduationCap },
  ];

  return (
    <div className="h-full flex flex-col md:flex-row font-sans text-gray-200 bg-[#0f1719]">
      {/* Sidebar */}
      <div className="md:w-48 flex flex-row md:flex-col shrink-0 bg-[#0a1012] border-r border-white/10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-3 px-4 py-3 w-full text-left transition-colors ${
              activeTab === tab.id ? 'bg-[#2d6a4f] text-white shadow-inner' : 'hover:bg-white/5 text-gray-400'
            }`}
          >
            <tab.icon size={18} />
            <span className="font-medium text-sm">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#131f22]">
        {activeTab === 'bio' && (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-bold text-emerald-400 mb-2">Bhuvan M</h1>
            <h2 className="text-xl text-slate-400">AI-Driven Software Engineer</h2>
            
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
              <p>
                I am a passionate software engineer specializing in intelligent systems, with deep expertise in 
                <span className="text-emerald-400 mx-1">Java, Spring MVC, Hibernate</span> and full-stack development.
              </p>
              <p className="mt-4">
                Currently, I am focused on building 
                <span className="text-emerald-400 mx-1 font-semibold">Agentic AI Chatbots</span> at 
                <span className="text-white mx-1 font-semibold">BizzHub Workspaces</span>. My work leverages Generative AI 
                and LLM technologies to create context-aware, autonomous systems that drive business value.
              </p>
              <p className="mt-4">
                 I believe in engineering systems that don't just process data but "think" and "adapt" to deliver superior outcomes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <Brain className="text-emerald-500 mb-2" />
                    <div className="font-bold text-slate-200">AI & LLMs</div>
                    <div className="text-sm text-slate-500">Generative AI, Agentic Workflows</div>
                </div>
                 <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <Briefcase className="text-blue-500 mb-2" />
                    <div className="font-bold text-slate-200">Full Stack</div>
                    <div className="text-sm text-slate-500">Java, Spring, React</div>
                </div>
            </div>
          </div>
        )}

        {activeTab === 'exp' && (
          <div className="space-y-8 animate-fade-in">
             <div className="relative border-l-2 border-emerald-500/30 pl-8 ml-2">
                
                {/* Job 1 */}
                <div className="mb-8 relative">
                    <div className="absolute -left-[39px] top-0 w-5 h-5 bg-emerald-500 rounded-full border-4 border-slate-900" />
                    <h3 className="text-xl font-bold text-emerald-300">AI Developer</h3>
                    <div className="text-slate-400 text-sm mb-2">BizzHub Workspaces | Oct 2025 - Present</div>
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                        <ul className="list-disc ml-4 space-y-2 text-slate-300 text-sm">
                            <li>Architecting advanced <span className="text-emerald-400">Agentic AI Chatbot systems</span>.</li>
                            <li>Leveraging Generative AI & LLMs for multi-agent orchestration.</li>
                            <li>Integrating enterprise systems via REST APIs for context-aware interactions.</li>
                        </ul>
                    </div>
                </div>

                {/* Job 2 */}
                <div className="mb-8 relative">
                    <div className="absolute -left-[39px] top-0 w-5 h-5 bg-slate-600 rounded-full border-4 border-slate-900" />
                    <h3 className="text-xl font-bold text-emerald-300">Prompt Engineer</h3>
                    <div className="text-slate-400 text-sm mb-2">Analogica Pvt. Ltd. | Aug 2023 - Sep 2023</div>
                     <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                        <p className="text-slate-300 text-sm">
                            Optimized AI prompts achieving a <span className="text-emerald-400">15% increase in model performance</span> through systematic A/B testing and refinement strategies.
                        </p>
                    </div>
                </div>

            </div>
          </div>
        )}

        {activeTab === 'edu' && (
           <div className="space-y-6 animate-fade-in">
             <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Bachelor of Engineering (CSE)</h3>
                    <div className="text-emerald-400">Sambhram Institute of Technology</div>
                    <div className="text-slate-500 text-sm mt-1">2020 - 2024 • CGPA: 7.4/10</div>
                </div>
             </div>

             <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-start space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Award className="w-8 h-8 text-blue-400" />
                </div>
                 <div>
                    <h3 className="text-lg font-bold text-white">Java Full Stack Development</h3>
                    <div className="text-blue-400">Xworkz Certification</div>
                    <div className="text-slate-500 text-sm mt-1">Comprehensive training in J2EE, Spring, and React ecosystem.</div>
                </div>
             </div>
           </div>
        )}
      </div>
    </div>
  );
}
