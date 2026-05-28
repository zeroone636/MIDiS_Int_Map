import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FloorSelector = ({ floors, selectedFloor, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const instituteFloors = floors.filter(f => f.id.startsWith('inst'));
  const schoolFloors = floors.filter(f => f.id.startsWith('sch'));

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-3 font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all active:scale-95"
      >
        <span className="text-lg">{selectedFloor.name}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-2xl overflow-hidden z-40 border border-gray-100"
          >
            <div className="p-2 space-y-4">
              <div>
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Институт</div>
                <div className="space-y-1">
                  {instituteFloors.map(floor => (
                    <button
                      key={floor.id}
                      onClick={() => {
                        onSelect(floor);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                        selectedFloor.id === floor.id 
                          ? 'bg-orange-50 text-orange-600 font-bold' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {floor.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-t border-gray-100 pt-4">Школа</div>
                <div className="space-y-1">
                  {schoolFloors.map(floor => (
                    <button
                      key={floor.id}
                      onClick={() => {
                        onSelect(floor);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                        selectedFloor.id === floor.id 
                          ? 'bg-orange-50 text-orange-600 font-bold' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {floor.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloorSelector;
