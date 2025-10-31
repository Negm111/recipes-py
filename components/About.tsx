import React from 'react';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const translations = {
    en: {
      title: 'About The Chef',
      bio: "Welcome to my kitchen! I'm Abdo Negm, a passionate home cook who believes that great food has the power to bring people together. My culinary journey started with a simple curiosity and has grown into a full-blown love affair with flavors, techniques, and the stories behind every dish. Here on Recipes.py, I share my favorite tried-and-true recipes, hoping to inspire you to create delicious memories in your own kitchen."
    },
    ar: {
      title: 'عن الشيف',
      bio: "أهلاً بكم في مطبخي! أنا عبدو نجم، طاهٍ منزلي شغوف يؤمن بأن الطعام الرائع لديه القدرة على جمع الناس معًا. رحلتي في عالم الطهي بدأت بفضول بسيط ونمت لتصبح قصة حب حقيقية مع النكهات والتقنيات والقصص وراء كل طبق. هنا على Recipes.py, أشارككم وصفاتي المفضلة والمجربة، على أمل أن ألهمكم لخلق ذكريات لذيذة في مطابخكم."
    }
  };

  return (
    <section id="about" className="py-20 bg-white rounded-lg shadow-md my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-orange-200">
              <img 
                src="https://storage.googleapis.com/aistudio-hosting/workspace-assets/7b949988-3444-41d9-813e-10de2789f2a2" 
                alt="Abdo Negm"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left rtl:md:text-right">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">{translations[language].title}</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              {translations[language].bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;