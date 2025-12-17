import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { X, Minus, Maximize2 } from 'lucide-react';
import { useStore } from '../../store/useStore';

export default function Window({ id, title, children, zIndex, isMinimized }) {
  const { closeApp, minimizeApp, focusApp } = useStore();
  const nodeRef = useRef(null);

  if (isMinimized) return null;

  return (
    <Draggable
      handle=".window-header"
      nodeRef={nodeRef}
      onStart={() => focusApp(id)}
      bounds="parent"
    >
      <div 
        ref={nodeRef}
        className="absolute top-10 left-4 md:top-20 md:left-1/4 w-[95%] md:w-[800px] h-[80vh] md:h-[600px] rounded-xl shadow-2xl bg-gray-900 border border-gray-700 overflow-hidden flex flex-col"
        style={{ zIndex }}
        onClick={() => focusApp(id)}
      >
        <div className="window-header h-10 bg-gray-800 flex items-center px-4 space-x-2 rounded-t-xl cursor-move select-none border-b border-gray-700 shrink-0">
          <div className="flex space-x-2 group">
            <button 
                onClick={(e) => { e.stopPropagation(); closeApp(id); }}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
            >
             <X size={8} className="text-black opacity-0 group-hover:opacity-100" />
            </button>
            <button 
                 onClick={(e) => { e.stopPropagation(); minimizeApp(id); }}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center transition-colors"
            >
                <Minus size={8} className="text-black opacity-0 group-hover:opacity-100" />
            </button>
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors">
                <Maximize2 size={8} className="text-black opacity-0 group-hover:opacity-100" />
            </button>
          </div>
          <div className="flex-1 text-center text-sm font-medium text-gray-300">{title}</div>
        </div>
        <div className="flex-1 overflow-hidden bg-black text-white relative">
          {children}
        </div>
      </div>
    </Draggable>
  );
}
