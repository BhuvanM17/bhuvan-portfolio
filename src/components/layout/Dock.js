import React from 'react';
import { useStore } from '../../store/useStore';
import { Terminal, Folder, Github, Globe, Mail, User, FileCode } from 'lucide-react';
import { motion } from 'framer-motion';

const DockItem = ({ icon: Icon, label, onClick, isOpen }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2, translateY: -10 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="relative group p-2 mx-1 flex flex-col items-center"
    >
      <div className="w-12 h-12 bg-gray-800/80 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg backdrop-blur-sm transition-colors hover:bg-gray-700/80">
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      {/* Dot indicator for open apps */}
      {isOpen && (
        <div className="absolute -bottom-2 w-1 h-1 bg-white rounded-full" />
      )}

      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
        {label}
      </div>
    </motion.button>
  );
};

export default function Dock() {
  const { openApp, openApps, toggleApp, activeApp } = useStore();

  const dockItems = [
    { id: 'finder', label: 'Finder', icon: Folder, component: 'finder' }, 
    { id: 'about', label: 'About Me', icon: User, component: 'about' },
    { id: 'terminal', label: 'Terminal', icon: Terminal, component: 'terminal' },
    { id: 'projects', label: 'Projects', icon: FileCode, component: 'projects' }, 
    { id: 'contact', label: 'Contact', icon: Mail, component: 'contact' },
    { id: 'github', label: 'GitHub', icon: Github, action: () => window.open('https://github.com/BhuvanM17', '_blank') },
    { id: 'linkedin', label: 'LinkedIn', icon: Globe, action: () => window.open('https://www.linkedin.com/in/bhuvan-m-600828217?utm_source=share_via&utm_content=profile&utm_medium=member_android', '_blank') },
  ];

  const handleAppClick = (item) => {
    if (item.action) {
      item.action();
    } else {
      toggleApp(item.id, item.label, item.component);
    }
  };

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[100]">
      <div className="flex items-end bg-white/20 backdrop-blur-2xl border border-white/20 p-2 rounded-2xl shadow-2xl">
        {dockItems.map((item) => (
          <DockItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            onClick={() => handleAppClick(item)}
            isOpen={activeApp === item.id}
          />
        ))}
      </div>
    </div>
  );
}
