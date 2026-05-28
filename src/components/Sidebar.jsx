import React from 'react';
import { X, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const renderIcon = (iconInput, imgClass = "w-6 h-6 object-contain") => {
  if (!iconInput) return null;
  
  const str = String(iconInput).trim();
  
  if (str.startsWith("<svg") || str.startsWith("<img")) {
    return <span className="inline-flex" dangerouslySetInnerHTML={{ __html: str }} />;
  }
  
  if (
    str.startsWith('/') || 
    str.startsWith('./') || 
    str.endsWith('.svg') || 
    str.endsWith('.png') || 
    str.endsWith('.jpg') || 
    str.endsWith('.jpeg')
  ) {
    let src = str;
    if (src.startsWith('./')) {
      src = src.substring(2);
    }
    if (!src.startsWith('/') && !src.startsWith('http') && !src.startsWith('data:')) {
      src = '/' + src;
    }
    return <img src={src} className={imgClass} alt="icon" referrerPolicy="no-referrer" />;
  }
  
  return <span>{str}</span>;
};

const Sidebar = ({ title, legend, isOpen, onClose }) => {
  const content = (
    <div className="flex flex-col h-full bg-white">
      <div className="p-6 md:p-8 pb-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-bold text-orange-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
            <Map className="w-3.5 h-3.5" />
            <span>Интерактивная карта</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-none">
            {title}
          </h1>
        </div>
        
        {onClose && (
          <button 
            onClick={onClose}
            className="md:hidden p-2.5 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full transition-colors border border-gray-100"
            aria-label="Закрыть легенду"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Легенда этажа
        </h2>
        
        <div className="flex flex-col gap-3.5">
          {legend.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 animate-fade-in" 
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl shrink-0 shadow-xs border border-orange-100 overflow-hidden p-1.5">
                {renderIcon(item.icon, "w-full h-full object-contain")}
              </div>
              <span className="text-gray-600 font-semibold text-sm leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden md:flex w-80 bg-white border-r border-gray-200 h-full flex-col shrink-0 shadow-sm overflow-hidden select-none">
        {content}
      </aside>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/45 backdrop-blur-xs"
            />
            
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="relative w-full max-w-[320px] h-full shadow-2xl border-r border-gray-100 flex flex-col"
            >
              {content}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
