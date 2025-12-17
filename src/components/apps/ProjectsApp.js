import React, { useState } from 'react';
import { Folder, FileCode, ChevronRight, LayoutGrid, List } from 'lucide-react';

const projectsData = [
    {
      id: 'cognito',
      title: 'Agentic AI',
      type: 'Autonomous Agent',
      tech: ['Python', 'LangChain', 'React'],
      desc: 'Enterprise Agentic AI Chatbot leveraging GenAI for intelligent interactions.',
      color: 'bg-purple-500'
    },
    {
      id: 'pcms',
      title: 'PCMS Health',
      type: 'Healthcare',
      tech: ['Java', 'Snowflake', 'Spring'],
      desc: 'Provider Care Management Solutions with high-performance data processing.',
      color: 'bg-blue-500'
    },
    {
      id: 'medisales',
      title: 'MediSales',
      type: 'E-Commerce',
      tech: ['Java', 'Hibernate', 'MySQL'],
      desc: 'Comprehensive medicine sales platform for manufacturers and vendors.',
      color: 'bg-green-500'
    }
];

export default function ProjectsApp() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid | list

  return (
    <div className="h-full bg-white text-gray-900 flex flex-col font-sans select-none">
      {/* Toolbar */}
      <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center px-4 justify-between shrink-0">
        <div className="flex space-x-4 text-gray-600">
             <div className="flex items-center space-x-1 cursor-pointer hover:bg-gray-200 px-2 py-1 rounded transition-colors" onClick={() => setSelectedProject(null)}>
                <Folder size={18} className="text-blue-500" />
                <span className="font-semibold text-sm">Projects</span>
             </div>
             {selectedProject && (
                 <>
                    <ChevronRight size={16} className="text-gray-400" />
                    <span className="text-sm font-medium">{selectedProject.title}</span>
                 </>
             )}
        </div>
        
        <div className="bg-gray-200 p-1 rounded-lg flex space-x-1">
            <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'}`}
            >
                <LayoutGrid size={16} />
            </button>
             <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'}`}
            >
                <List size={16} />
            </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50/50 backdrop-blur border-r border-gray-200 p-2 hidden md:block">
            <div className="text-xs font-bold text-gray-500 px-2 mb-2 mt-2">FAVORITES</div>
            <div className="flex items-center px-2 py-1.5 rounded bg-gray-200/50 text-gray-700 cursor-pointer">
                <Folder size={16} className="text-blue-500 mr-2" />
                <span className="text-sm">All Projects</span>
            </div>
             <div className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200/50 text-gray-700 cursor-pointer mt-1">
                <Folder size={16} className="text-purple-500 mr-2" />
                <span className="text-sm">AI / ML</span>
            </div>
             <div className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200/50 text-gray-700 cursor-pointer mt-1">
                <Folder size={16} className="text-green-500 mr-2" />
                <span className="text-sm">Web Dev</span>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white overflow-y-auto p-4 content-area" onClick={() => setSelectedProject(null)}>
            {selectedProject ? (
                <div className="h-full flex flex-col animate-fade-in" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 ${selectedProject.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <FileCode className="text-white w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200 uppercase tracking-wide">
                                {selectedProject.type}
                            </span>
                        </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-lg mb-6 max-w-2xl">
                        {selectedProject.desc}
                    </p>

                    <div className="mb-6">
                        <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map(t => (
                                <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium border border-blue-100">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto border-t border-gray-100 pt-6">
                        <button 
                            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
                            onClick={(e) => { e.stopPropagation(); /* In reality open specific link */ }}
                        >
                            View Source
                        </button>
                    </div>
                </div>
            ) : (
                <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-4 gap-6' : 'grid-cols-1 gap-2'}`}>
                    {projectsData.map(project => (
                        viewMode === 'grid' ? (
                            <div 
                                key={project.id}
                                className="group flex flex-col items-center p-4 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors"
                                onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                                onDoubleClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                            >
                                <div className={`w-20 h-20 ${project.color} rounded-2xl shadow-md flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                                    <FileCode className="text-white w-10 h-10" />
                                </div>
                                <span className="text-sm font-medium text-center text-gray-700 group-hover:text-blue-600">{project.title}</span>
                                <span className="text-xs text-center text-gray-400 mt-1">{project.type}</span>
                            </div>
                        ) : (
                            <div 
                                key={project.id}
                                className="flex items-center p-2 rounded hover:bg-blue-50 cursor-pointer border-b border-gray-50 last:border-0"
                                onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                            >
                                <div className={`w-8 h-8 ${project.color} rounded-lg flex items-center justify-center mr-3`}>
                                   <FileCode className="text-white w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-700">{project.title}</div>
                                    <div className="text-xs text-gray-400">{project.desc}</div>
                                </div>
                                <div className="text-xs text-gray-400">{project.type}</div>
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
      </div>
      
      {/* Footer Status Bar */}
      <div className="h-6 bg-gray-100 border-t border-gray-300 flex items-center px-4 text-xs text-gray-500">
        {selectedProject ? '1 item selected' : `${projectsData.length} items`}
      </div>
    </div>
  );
}
