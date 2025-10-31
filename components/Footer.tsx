import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const translations = {
    en: { rights: 'All rights reserved.' },
    ar: { rights: 'جميع الحقوق محفوظة.' }
  };

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm text-stone-500 mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Recipes.py. {translations[language].rights}
        </p>
        <div className="flex justify-center space-x-6 rtl:space-x-reverse">
          <a href="#" className="text-stone-400 hover:text-orange-500 transition-transform transform hover:scale-110 duration-300">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.177a4.823 4.823 0 100 9.646 4.823 4.823 0 000-9.646zm0 7.94a3.117 3.117 0 110-6.234 3.117 3.117 0 010 6.234zM16.883 7.184a1.144 1.144 0 100-2.288 1.144 1.144 0 000 2.288z" clipRule="evenodd" /></svg>
          </a>
          <a href="#" className="text-stone-400 hover:text-orange-500 transition-transform transform hover:scale-110 duration-300">
             <span className="sr-only">YouTube</span>
             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.418 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.418-7.814.418-7.814.418s-6.22 0-7.814-.418a2.506 2.506 0 0 1-1.768-1.768C2.002 15.22 2 12 2 12s0-3.22.418-4.814a2.506 2.506 0 0 1 1.768-1.768C5.78 5.002 12 5.002 12 5.002s6.22 0 7.814.416zM9.746 15.126l6.397-3.126-6.397-3.126v6.252z" clipRule="evenodd" /></svg>
          </a>
          <a href="#" className="text-stone-400 hover:text-orange-500 transition-transform transform hover:scale-110 duration-300">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;