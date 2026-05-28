import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MapArea from './components/MapArea';
import RoomInfoModal from './components/RoomInfoModal';
import { FLOORS_DATA } from './data';

export default function App() {
  const [currentFloor, setCurrentFloor] = useState(FLOORS_DATA[0]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleFloorSelect = (floor) => {
    setCurrentFloor(floor);
    setSelectedRoom(null);
    setIsMobileSidebarOpen(false);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  if (!isLoaded) return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-500 font-bold text-sm select-none animate-pulse">Загрузка карты МИДиС...</span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col bg-gray-50 h-screen font-sans selection:bg-orange-100 selection:text-orange-900 overflow-hidden">
      <Header />

      <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden relative">
        <Sidebar 
          title={currentFloor.title} 
          legend={currentFloor.legend} 
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />
        
        <MapArea 
          floors={FLOORS_DATA}
          currentFloor={currentFloor}
          onFloorSelect={handleFloorSelect}
          onRoomSelect={handleRoomSelect}
          onToggleSidebar={() => setIsMobileSidebarOpen(true)}
        />
      </div>

      <Footer />

      <RoomInfoModal 
        room={selectedRoom} 
        onClose={() => setSelectedRoom(null)} 
      />
    </div>
  );
}
