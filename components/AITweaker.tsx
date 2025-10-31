import React, { useState } from 'react';
import { Recipe, Language } from '../types';
import { tweakRecipe } from '../services/geminiService';

interface AITweakerProps {
  recipe: Recipe;
  language: Language;
}

const AITweaker: React.FC<AITweakerProps> = ({ recipe, language }) => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTweak = async () => {
    if (!prompt) return;
    setIsLoading(true);
    setResult('');
    const response = await tweakRecipe(recipe, prompt, language);
    setResult(response);
    setIsLoading(false);
  };
  
  const translations = {
    en: {
      title: 'AI Recipe Assistant',
      subtitle: 'Want to change something? Ask for help!',
      placeholder: 'e.g., "Make it vegetarian" or "What can I use instead of rosemary?"',
      button: 'Tweak Recipe',
      loadingButton: 'Thinking...',
      loadingText: 'The AI chef is checking the pantry...',
      suggestionTitle: 'AI Suggestion:'
    },
    ar: {
      title: 'مساعد الوصفات الذكي',
      subtitle: 'هل تريد تغيير شيء ما؟ اطلب المساعدة!',
      placeholder: 'مثال: "اجعلها نباتية" أو "ماذا يمكنني أن أستخدم بدلًا من إكليل الجبل؟"',
      button: 'تعديل الوصفة',
      loadingButton: 'يفكر...',
      loadingText: 'الشيف الذكي يتفقد المؤن...',
      suggestionTitle: 'اقتراح الذكاء الاصطناعي:'
    }
  };

  return (
    <section className="bg-orange-100 border-2 border-orange-200 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-stone-900 mb-2">{translations[language].title}</h2>
      <p className="text-lg text-stone-600 mb-6">{translations[language].subtitle}</p>

      <div className="flex flex-col sm:flex-row sm:space-x-2 rtl:space-x-reverse">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={translations[language].placeholder}
          className="flex-grow p-3 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2 sm:mb-0"
          onKeyDown={(e) => e.key === 'Enter' && handleTweak()}
        />
        <button
          onClick={handleTweak}
          className="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 disabled:bg-orange-400 transition-colors"
          disabled={isLoading || !prompt}
        >
          {isLoading ? translations[language].loadingButton : translations[language].button}
        </button>
      </div>

      {isLoading && (
        <div className="mt-6 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-2 text-stone-600">{translations[language].loadingText}</p>
        </div>
      )}

      {result && (
        <div className="mt-6 p-6 bg-white rounded-md border border-orange-100">
          <h3 className="text-xl font-bold text-stone-800 mb-2">{translations[language].suggestionTitle}</h3>
          <p className="text-stone-700 whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </section>
  );
};

export default AITweaker;