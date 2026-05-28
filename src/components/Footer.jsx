import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 px-4 md:px-8 py-3.5 shrink-0 select-none text-xs md:text-sm text-gray-600 shadow-inner">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row flex-wrap md:items-center justify-between gap-y-2.5 gap-x-6">
        
        <div className="flex items-center gap-3.5">
            <img 
                src="img/Logo.png" 
                alt="Логотип МИДиС"
                className="h-7 md:h-8 w-auto object-contain shrink-0"
            />
          <div className="h-5 w-[1px] bg-gray-300 hidden sm:block" />
          <div className="leading-tight text-gray-700 hidden xs:block">
            <p className="font-bold text-[11px] md:text-xs">
              Международный Институт
            </p>
            <p className="text-[10px] text-gray-500 font-semibold">
              Дизайна и Сервиса
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[#F45B21] font-bold">
            Фронтенд:
          </span>
          <span className="text-gray-800 font-semibold text-[11px] md:text-xs">
            Новгородов А.Е. Рудаев Я.Д.
          </span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[#F45B21] font-bold">
            Руководитель проекта:
          </span>
          <span className="text-gray-800 font-semibold text-[11px] md:text-xs">
            Хаятова Л.Р.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;