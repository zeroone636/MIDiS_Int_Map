import React from 'react';
import { renderIcon } from './Sidebar';
import FloorSelector from './FloorSelector';
import { List, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

const MapArea = ({ floors, currentFloor, onFloorSelect, onRoomSelect, onToggleSidebar }) => {
  const [zoom, setZoom] = React.useState(80);
  return (
    <main className="flex-1 bg-white flex flex-col min-h-0 min-w-0 overflow-hidden">
      <div className="p-4 md:p-8 pb-0 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between shrink-0">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            onClick={onToggleSidebar}
            className="md:hidden bg-white hover:bg-gray-50 text-gray-700 h-[52px] px-4 border border-gray-200 rounded-lg flex items-center justify-center gap-2 font-semibold shadow-xs active:scale-95 transition-all"
            title="Открыть легенду"
          >
            <List className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-bold">Легенда</span>
          </button>
          
          <div className="flex-1 sm:flex-initial">
            <FloorSelector 
              floors={floors} 
              selectedFloor={currentFloor} 
              onSelect={onFloorSelect}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between sm:justify-start gap-4 bg-gray-50 border border-gray-100 px-4 py-2.5 rounded-xl shadow-xs">
          <span className="hidden lg:inline text-xs font-bold text-gray-400 uppercase tracking-widest">Размер:</span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button 
              onClick={() => setZoom(Math.max(50, zoom - 10))}
              className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition-all"
              title="Уменьшить карту"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-extrabold text-gray-700 w-12 text-center select-none font-mono shrink-0">
              {zoom}%
            </span>
            <button 
              onClick={() => setZoom(Math.min(150, zoom + 10))}
              className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition-all"
              title="Увеличить карту"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setZoom(80)}
              className="text-[10px] text-orange-600 hover:text-orange-700 font-bold px-2 py-1.5 bg-orange-50 hover:bg-orange-100/50 rounded-lg transition-colors flex items-center gap-1"
              title="Сбросить масштаб"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden xs:inline">100%</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex items-center justify-center p-3 md:p-8 overflow-hidden bg-gray-50/50">
        <div className="relative w-full h-full bg-white rounded-2xl shadow-md border border-gray-100 p-4 md:p-8 flex items-center justify-center overflow-auto scrollbar-thin">
          <div 
            className="relative inline-block w-full transition-all duration-300 ease-out"
            style={{ 
              width: '100%',
              maxWidth: `${zoom * 9}px`,
              minWidth: '280px',
              transformOrigin: 'center center'
            }}
          >
            <img 
              src={(() => {
                let img = currentFloor.image;
                if (!img) return `https://placehold.co/1200x800/f3f4f6/4b5563?text=Map+${currentFloor.id}`;
                if (img.startsWith('http') || img.startsWith('data:')) return img;
                if (img.startsWith('./')) {
                  img = img.substring(2);
                }
                if (!img.startsWith('/')) {
                  img = '/' + img;
                }
                return img;
              })()}
              alt={currentFloor.name}
              className="w-full h-auto block rounded-lg shadow-inner pointer-events-none select-none border border-gray-100 mx-auto"
              onError={(e) => {
                e.target.src = `https://placehold.co/1200x800/f3f4f6/4b5563?text=Map+${currentFloor.id}`;
              }}
            />
            
            {currentFloor.rooms.map((room) => {
              const getRoomColorClasses = () => {
                if (room.isSpecial) {
                  return 'bg-amber-500 text-white ring-amber-500/20';
                }
                switch (currentFloor.id) {
                  case 'inst_f1':
                  case 'sch_f1':
                    return '#4cf6b2';
                  case 'inst_f2':
                  case 'sch_f2':
                    return '#4aa7ff';
                  case 'inst_f2_5':
                    return '#ffd45f';
                  case 'inst_f3':
                  case 'sch_f3':
                    return '#ff4371';
                  case 'inst_f4':
                    return '#bfaaff';
                  default:
                    return 'bg-blue-500 text-white ring-blue-500/20';
                }
              };

              const getRoomSizeClasses = () => {
                const size = room.size || 'md';
                switch (size) {
                  case 'xs':
                    return 'w-6 h-6 -ml-3 -mt-3 text-[10px]';
                  case 'sm':
                    return 'w-8 h-8 -ml-4 -mt-4 text-[11px]';
                  case 'lg':
                    return 'w-12 h-12 -ml-6 -mt-6 text-sm';
                  case 'md':
                  default:
                    return 'w-10 h-10 -ml-5 -mt-5 text-xs';
                }
              };

              return (
                <motion.button
                  key={room.id}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onRoomSelect(room)}
                  className={`absolute flex items-center justify-center font-bold transition-all cursor-pointer overflow-hidden ${getRoomSizeClasses()} ${getRoomColorClasses()}`}
                  style={{
                    left: `${room.x}%`,
                    top: `${room.y}%`,
                  }}
                >
                  {room.icon ? (
                    <div className="w-full h-full flex items-center justify-center p-1 font-normal text-lg">
                      {renderIcon(room.icon, "w-full h-full object-contain")}
                    </div>
                  ) : (
                    <span>{room.number}</span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MapArea;
