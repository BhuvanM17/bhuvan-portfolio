import React, { useState, useEffect } from 'react';
import { Wifi, Search } from 'lucide-react';
import { format } from 'date-fns';
import profile from '../../assets/profile.jpeg';

export default function TopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 bg-gray-900/50 backdrop-blur-xl text-white text-xs flex items-center justify-between px-4 fixed top-0 w-full z-[100] shadow-sm border-b border-white/5 select-none">
      <div className="flex items-center space-x-4">
        <img src={profile} alt="Apple Logo" className="w-4 h-4 rounded-full cursor-pointer hover:opacity-70" />
        <span className="font-bold cursor-default hidden sm:inline">Bhuvan</span>
        <span className="cursor-default hover:bg-white/10 px-2 py-0.5 rounded hidden sm:inline">File</span>
        <span className="cursor-default hover:bg-white/10 px-2 py-0.5 rounded hidden sm:inline">Edit</span>
        <span className="cursor-default hover:bg-white/10 px-2 py-0.5 rounded hidden sm:inline">View</span>
        <span className="cursor-default hover:bg-white/10 px-2 py-0.5 rounded hidden sm:inline">Go</span>
        <span className="cursor-default hover:bg-white/10 px-2 py-0.5 rounded hidden sm:inline">Window</span>
        <span className="cursor-default hover:bg-white/10 px-2 py-0.5 rounded hidden sm:inline">Help</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3 hidden sm:flex">
             <div className="hover:bg-white/10 p-1 rounded cursor-pointer"><Wifi size={14}/></div>
             <div className="hover:bg-white/10 p-1 rounded cursor-pointer"><Search size={14}/></div>
        </div>
        <span className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default min-w-[100px] text-center">{format(time, 'EEE MMM d h:mm aa')}</span>
      </div>
    </div>
  );
}
