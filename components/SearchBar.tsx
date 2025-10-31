import React from 'react';
import { Language } from '../types';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  language: Language;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, language }) => {
  const translations = {
    en: { placeholder: 'Search for a recipe...', button: 'Search' },
    ar: { placeholder: 'ابحث عن وصفة...', button: 'بحث' }
  };

  return (
    <section className="my-8">
      <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
          <svg className="w-5 h-5 text-stone-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={translations[language].placeholder}
          className="block w-full p-4 ps-12 text-sm text-stone-900 border border-stone-300 rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500 transition-colors"
        />
        <button type="submit" className="absolute end-2.5 bottom-2.5 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300 transform hover:scale-105">
            {translations[language].button}
        </button>
      </form>
    </section>
  );
};

export default SearchBar;