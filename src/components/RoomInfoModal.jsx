import React from 'react';
import { X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const RoomInfoModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          <div className="p-6 pb-4 border-b border-gray-100 flex justify-between items-start bg-orange-50/50">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-orange-500 text-white font-bold text-sm px-2 py-0.5 rounded-md">
                  {room.number}
                </span>
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest"></span>
              </div>
              <h4 className="text-xl font-bold text-gray-900">{room.name}</h4>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-200/60 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh] bg-gray-50">
            {room.description && (
              <div className="text-sm text-gray-600 mb-2 leading-relaxed bg-white p-3.5 rounded-xl border border-gray-100 font-medium">
                {room.description}
              </div>
            )}

            {room.workingHours && (
              <div className="space-y-3">
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
                  {room.workingHours.title || 'Режим работы:'}
                </h5>
                <div className="bg-orange-50/30 rounded-xl border border-orange-100 overflow-hidden divide-y divide-orange-100 shadow-xs">
                  {room.workingHours.items.map((item, idx) => (
                    <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm bg-white/60">
                      <span className="font-semibold text-gray-800 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${item.isClosed ? 'bg-red-400 animate-pulse' : 'bg-emerald-500'}`} />
                        {item.days}
                      </span>
                      <div className="text-left sm:text-right flex flex-col items-start sm:items-end">
                        <span className={`font-mono font-bold ${item.isClosed ? 'text-red-500' : 'text-gray-900'}`}>
                          {item.hours}
                        </span>
                        {item.subtitle && (
                          <span className="text-xs text-orange-600 font-medium mt-0.5">
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {room.staff && room.staff.map((person, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-gray-200 border border-gray-300 shadow-xs">
                <div className="w-24 h-28 sm:w-20 sm:h-24 bg-gray-300 rounded-lg overflow-hidden shrink-0 border border-gray-400">
                  <img 
                    src={person.photo} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = `https://placehold.co/150x180/cbd5e1/475569?text=Фото`; }}
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xs text-gray-700 font-medium mb-1.5 leading-snug">
                    {person.role}
                  </p>
                  <h6 className="text-[15px] font-bold text-gray-900 mb-2">
                    {person.name}
                  </h6>
                  {person.phone && (
                    <a href={`tel:${person.phone}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{person.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RoomInfoModal;