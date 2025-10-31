import React from 'react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const translations = {
    en: {
      title: 'Code Your Cravings',
      subtitle: 'Discover delicious, easy-to-follow recipes for every occasion. From quick weeknight meals to impressive desserts, find your next favorite dish right here.',
      button: 'Explore Recipes'
    },
    ar: {
      title: 'برمج شهيتك',
      subtitle: 'اكتشف وصفات لذيذة وسهلة التحضير لكل مناسبة. من الوجبات السريعة خلال الأسبوع إلى الحلويات الرائعة، جد طبقك المفضل التالي هنا.',
      button: 'استكشف الوصفات'
    }
  };

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white rounded-lg overflow-hidden mb-8">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {translations[language].title}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-orange-50 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {translations[language].subtitle}
        </p>
        <a
          href="#recipe-list"
          className="mt-10 inline-block bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-700 transition-transform transform hover:scale-105 shadow-lg animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {translations[language].button}
        </a>
      </div>
    </section>
  );
};

export default Hero;