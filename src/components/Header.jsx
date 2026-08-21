import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-100 border-b border-gray-200 px-4 md:px-8 py-3.5 shrink-0 select-none shadow-xs">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <img 
                src="img/Logo.svg" 
                alt="Логотип МИДиС"
                className="h-8 md:h-10 w-auto object-contain"
            />
        </div>

        <div className="flex-1 text-center md:text-left md:pl-16">
          <span className="text-[#F45B21] sm:text-lg font-bold tracking-wide">
            Карта МИДиС
          </span>
        </div>

        <div className="text-right leading-tight text-gray-700 hidden sm:block">
          <p className="text-xs md:text-[13px] font-bold tracking-wide">
            Международный Институт
          </p>
          <p className="text-[10px] md:text-xs text-gray-500 font-semibold">
            Дизайна и Сервиса
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;