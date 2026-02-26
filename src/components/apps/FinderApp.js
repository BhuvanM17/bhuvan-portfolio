import React, { useState } from 'react';
import { 
  Folder, 
  Home, 
  Monitor, 
  Download, 
  ChevronRight, 
  ChevronLeft,
  Search,
  LayoutGrid,
  List,
  FileText
} from 'lucide-react';
import profile from '../../assets/profile.jpeg';

export default function FinderApp() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  
  const sidebarItems = [
    { icon: Folder, label: 'Recents', active: false },
    { icon: Monitor, label: 'Desktop', active: false },
    { icon: Home, label: 'Home', active: true },
    { icon: Download, label: 'Downloads', active: false },
    { icon: FileText, label: 'Documents', active: false },
  ];

  const files = [
    { id: 1, name: 'Profile.jpg', type: 'image', size: '2.4 MB', src: profile },
    { id: 2, name: 'Resume.pdf', type: 'pdf', size: '156 KB', url: 'https://drive.google.com/file/d/1cjXWjjr6dStGqq1pVyDeV-vWjxTkUcn5/view?usp=sharing' },
    { id: 3, name: 'Project_Specs.docx', type: 'doc', size: '45 KB' },
    { id: 4, name: 'Portfolio_v2', type: 'folder', size: '--' },
    { id: 5, name: 'design-system', type: 'folder', size: '--' },
  ];

  return (
    <div className="h-full bg-white flex flex-col font-sans select-none text-gray-700">
      {/* Finder Toolbar */}
      <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-4 justify-between shrink-0">
        <div className="flex space-x-4 items-center">
            <div className="flex space-x-1">
                <button className="p-1 rounded hover:bg-gray-200 text-gray-500"><ChevronLeft size={18} /></button>
                <button className="p-1 rounded hover:bg-gray-200 text-gray-500"><ChevronRight size={18} /></button>
            </div>
            <div className="font-semibold text-sm text-gray-600">Home</div>
        </div>
        
        <div className="flex lg:space-x-4">
             <div className="hidden lg:flex bg-gray-200 rounded p-0.5 space-x-0.5">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <LayoutGrid size={14} />
                </button>
                 <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List size={14} />
                </button>
             </div>
             
             <div className="relative">
                <Search size={14} className="absolute left-2.5 top-1.5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="bg-gray-200 border-none rounded pl-8 pr-2 py-1 text-sm outline-none focus:ring-1 focus:ring-gray-300 w-32 placeholder-gray-500"
                />
             </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-gray-100/80 backdrop-blur-xl border-r border-gray-200 p-2 flex flex-col">
          <div className="text-xs font-bold text-gray-400 px-3 mb-2 mt-2">Favorites</div>
          {sidebarItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-md cursor-pointer ${
                item.active ? 'bg-gray-300/50 text-gray-800' : 'hover:bg-gray-200/50 text-gray-600'
              }`}
            >
              <item.icon size={16} className={item.active ? 'text-blue-500' : 'text-gray-500'} />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
          
          <div className="text-xs font-bold text-gray-400 px-3 mb-2 mt-6">Locations</div>
           <div className="flex items-center space-x-2 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-200/50 text-gray-600">
              <Monitor size={16} className="text-gray-500" />
              <span className="text-sm">Bhuvan's MacBook</span>
           </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white p-4 overflow-y-auto" onClick={() => setSelectedItem(null)}>
          <div className={viewMode === 'grid' ? 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4' : 'flex flex-col'}>
            
            {files.map(file => (
              viewMode === 'grid' ? (
                <div 
                  key={file.id} 
                  className={`group flex flex-col items-center p-2 rounded-lg cursor-pointer ${
                    selectedItem === file.id ? 'bg-blue-100 border border-blue-200 shadow-sm' : 'hover:bg-gray-50'
                  }`}
                  onClick={(e) => { e.stopPropagation(); setSelectedItem(file.id); }}
                  onDoubleClick={(e) => { e.stopPropagation(); if (file.url) window.open(file.url, '_blank'); }}
                >
                  <div className="w-16 h-16 mb-2 flex items-center justify-center relative">
                    {file.type === 'image' && file.src ? (
                      <img src={file.src} alt={file.name} className="w-full h-full object-cover rounded shadow-sm border border-gray-200" />
                    ) : file.type === 'folder' ? (
                      <Folder size={64} className="text-blue-400 fill-blue-400" />
                    ) : (
                      <div className="w-14 h-16 bg-white border border-gray-200 shadow-sm rounded flex items-center justify-center relative">
                         <div className="absolute top-0 right-0 border-t-[10px] border-r-[10px] border-t-white border-r-gray-200"></div>
                         <FileText size={32} className="text-gray-400" />
                         <span className="absolute bottom-1 right-1 text-[8px] font-bold uppercase text-gray-500">{file.type}</span>
                      </div>
                    )}
                  </div>
                  <span className={`text-xs text-center w-full truncate px-1 rounded ${
                     selectedItem === file.id ? 'bg-blue-500 text-white font-medium' : 'text-gray-600'
                  }`}>
                    {file.name}
                  </span>
                </div>
              ) : (
                 <div 
                  key={file.id} 
                  className={`flex items-center px-4 py-1.5 text-sm cursor-pointer even:bg-gray-50 ${
                    selectedItem === file.id ? 'bg-blue-600 text-white even:bg-blue-600' : 'hover:bg-blue-50'
                  }`}
                  onClick={(e) => { e.stopPropagation(); setSelectedItem(file.id); }}
                  onDoubleClick={(e) => { e.stopPropagation(); if (file.url) window.open(file.url, '_blank'); }}
                >
                    <div className="w-5 mr-3">
                         {file.type === 'folder' ? <Folder size={16} className={selectedItem === file.id ? 'text-white fill-white' : 'text-blue-400'} /> : <FileText size={16} />}
                    </div>
                    <div className="flex-1 truncate">{file.name}</div>
                    <div className="w-24 text-right text-xs opacity-70">{file.size}</div>
                    <div className="w-32 text-right text-xs opacity-70 hidden sm:block">Today at 10:42 AM</div>
                </div>
              )
            ))}

          </div>
        </div>
      </div>
      
      {/* Finder Footer */}
      <div className="h-6 bg-gray-50 border-t border-gray-200 flex items-center px-4 text-xs text-gray-500 justify-between">
         <span>{files.length} items, 420 GB available</span>
         {selectedItem && <span>Selected item {selectedItem}</span>}
      </div>
    </div>
  );
}
