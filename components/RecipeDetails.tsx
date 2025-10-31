import React from 'react';
import { Recipe, Language, Review } from '../types';
import VideoPlayer from './VideoPlayer';
import AITweaker from './AITweaker';
import StarRating from './StarRating';
import RecipeReviews from './RecipeReviews';

interface RecipeDetailsProps {
  recipe: Recipe;
  onBack: () => void;
  language: Language;
  onAddReview: (recipeId: string, review: Review) => void;
}

const InfoPill: React.FC<{ icon: React.ReactNode, label: string, value: string | number }> = ({ icon, label, value }) => (
  <div className="flex flex-col items-center text-center bg-orange-100 p-4 rounded-lg">
    <div className="text-orange-600 mb-2">{icon}</div>
    <span className="text-sm font-bold text-stone-600">{label}</span>
    <span className="text-lg font-semibold text-stone-800">{value}</span>
  </div>
);

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe, onBack, language, onAddReview }) => {
  
  const translations = {
    en: {
      back: 'Back to Recipes',
      ingredients: 'Ingredients',
      instructions: 'Instructions',
      prepTime: 'Prep Time',
      cookTime: 'Cook Time',
      servings: 'Servings'
    },
    ar: {
      back: 'العودة إلى الوصفات',
      ingredients: 'المكونات',
      instructions: 'التعليمات',
      prepTime: 'وقت التحضير',
      cookTime: 'وقت الطهي',
      servings: 'حصص'
    }
  };

  const averageRating = recipe.reviews.length > 0
    ? (recipe.reviews.reduce((sum, review) => sum + review.rating, 0) / recipe.reviews.length)
    : 0;

  return (
    <article className="animate-fade-in">
      <button onClick={onBack} className="mb-6 text-orange-600 font-semibold hover:underline flex items-center space-x-2 rtl:space-x-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>{translations[language].back}</span>
      </button>

      <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">{recipe.title[language]}</h1>
      <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
        <StarRating rating={averageRating} />
        <span className="text-stone-500 text-sm">
          ({recipe.reviews.length} {language === 'en' ? 'reviews' : 'مراجعات'})
        </span>
      </div>
      <p className="text-lg text-stone-600 mb-8">{recipe.description[language]}</p>
      
      {recipe.videoUrl && <VideoPlayer videoUrl={recipe.videoUrl} title={recipe.title[language]} />}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-center">
        <InfoPill 
          label={translations[language].prepTime}
          value={recipe.prepTime}
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <InfoPill 
          label={translations[language].cookTime}
          value={recipe.cookTime}
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.343 17.657a8 8 0 011.414-1.414" /></svg>}
        />
        <InfoPill 
          label={translations[language].servings}
          value={recipe.servings}
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{translations[language].ingredients}</h2>
          <ul className="space-y-3">
            {recipe.ingredients[language].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-orange-500 mr-3 rtl:ml-3 rtl:mr-0 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{translations[language].instructions}</h2>
          <ol className="space-y-4">
            {recipe.instructions[language].map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 rtl:ml-4 rtl:mr-0 flex-shrink-0">{index + 1}</span>
                <span className="text-stone-700 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      
      <div className="mb-8">
         <AITweaker recipe={recipe} language={language} />
      </div>

      <div>
        <RecipeReviews 
          reviews={recipe.reviews} 
          language={language} 
          onAddReview={(review) => onAddReview(recipe.id, review)} 
        />
      </div>
    </article>
  );
};

export default RecipeDetails;