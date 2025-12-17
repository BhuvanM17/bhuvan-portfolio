import React from 'react';
import TopBar from '../layout/TopBar';
import Dock from '../layout/Dock';
import Window from './Window';
import { useStore } from '../../store/useStore';
import PortfolioApp from '../apps/PortfolioApp'; 
import AboutApp from '../apps/AboutApp';
import TerminalApp from '../apps/TerminalApp';
import ProjectsApp from '../apps/ProjectsApp';
import ContactApp from '../apps/ContactApp';
import FinderApp from '../apps/FinderApp';

const appsRegistry = {
  portfolio: PortfolioApp,
  about: AboutApp,
  terminal: TerminalApp,
  projects: ProjectsApp,
  contact: ContactApp,
  finder: FinderApp,
};

const PlaceholderApp = ({ title }) => (
  <div className="p-10 text-center text-white flex flex-col items-center justify-center h-full">
    <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
    <p className="text-gray-400">The {title} application is currently under development.</p>
  </div>
);

export default function Desktop() {
  const { openApps } = useStore();

  return (
    <div 
      className="w-screen h-screen overflow-hidden bg-cover bg-center relative font-sans selection:bg-blue-500/30"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2564&auto=format&fit=crop')" }} 
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <TopBar />
      
      <div className="absolute inset-0 pt-8 pb-20 z-0">
          {Object.entries(openApps).map(([key, app]) => {
              const Component = appsRegistry[app.id] || PlaceholderApp;
              return (
                  <Window 
                    key={app.id} 
                    id={app.id} 
                    title={app.title} 
                    zIndex={app.zIndex}
                    isMinimized={app.isMinimized}
                  >
                      <Component title={app.title} />
                  </Window>
              );
          })}
      </div>

      <Dock />
    </div>
  );
}
