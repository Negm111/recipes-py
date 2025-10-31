import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  onGoHome: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome, language, setLanguage }) => {
  const translations = {
    en: { recipes: 'Recipes', about: 'About', contact: 'Contact' },
    ar: { recipes: 'الوصفات', about: 'حول', contact: 'اتصل بنا' }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <button onClick={onGoHome} className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-14 h-14 text-orange-600">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" fill="currentColor">
                  {/* Top Bun */}
                  <path fill="#FDBA74" d="M50 0 C25 0 10 15 10 30 L90 30 C90 15 75 0 50 0 Z" />
                  {/* Patty */}
                  <path fill="#9A3412" d="M10 35 C10 30 90 30 90 35 L90 45 C90 50 10 50 10 45 Z" />
                  {/* Bottom Bun */}
                  <path fill="#FB923C" d="M15 55 C15 50 85 50 85 55 L85 65 C85 70 15 70 15 65 Z" />
                </svg>
            </div>
            <div className="relative">
              <span className="text-3xl font-extrabold text-orange-600 font-playfair tracking-wider">Recipes.py</span>
              <span className="absolute -bottom-4 right-0 rtl:left-0 rtl:right-auto text-xs text-stone-500 whitespace-nowrap">by Abdo negm</span>
            </div>
          </button>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <nav className="hidden md:flex items-baseline space-x-4 rtl:space-x-reverse">
              <button onClick={onGoHome} className="text-stone-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5">{translations[language].recipes}</button>
              <a href="#about" className="text-stone-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5">{translations[language].about}</a>
              <a href="#contact" className="text-stone-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5">{translations[language].contact}</a>
            </nav>
            <button onClick={toggleLanguage} className="bg-orange-100 text-orange-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-orange-200 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              {language === 'en' ? 'ع' : 'E'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;