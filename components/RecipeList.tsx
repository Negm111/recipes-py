import React from 'react';
import { Recipe, Language } from '../types';

interface RecipeListProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  language: Language;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onSelectRecipe, language }) => {
  const translations = {
    en: { view: 'View Recipe', noResults: 'No recipes found.', trySearching: 'Try searching for something else!' },
    ar: { view: 'عرض الوصفة', noResults: 'لم يتم العثور على وصفات.', trySearching: 'جرّب البحث عن شيء آخر!' }
  };

  if (recipes.length === 0) {
    return (
      <div className="text-center py-16">
        <svg className="mx-auto h-12 w-12 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <h3 className="mt-2 text-xl font-medium text-stone-900">{translations[language].noResults}</h3>
        <p className="mt-1 text-sm text-stone-500">{translations[language].trySearching}</p>
      </div>
    )
  }

  return (
    <section id="recipe-list" className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => onSelectRecipe(recipe)}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-full h-48 bg-stone-200 overflow-hidden">
               <img src={recipe.imageUrl} alt={recipe.title[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-stone-800 mb-2 group-hover:text-orange-600 transition-colors h-16">{recipe.title[language]}</h2>
              <p className="text-stone-600 text-sm line-clamp-3 mb-4 h-16">{recipe.description[language]}</p>
              <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-full">
                {translations[language].view}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeList;