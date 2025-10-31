import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SearchBar from './components/SearchBar';
import AIChatButton from './components/AIChatButton';
import AIChat from './components/AIChat';
import About from './components/About';
import { recipes as initialRecipes } from './data/recipes';
import { Recipe, Language, Review } from './types';

const App: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>(initialRecipes);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);
  
  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo(0, 0);
  };
  
  const handleGoHome = () => {
    setSelectedRecipe(null);
  };

  const handleAddReview = (recipeId: string, review: Review) => {
    setAllRecipes(prevRecipes => {
      return prevRecipes.map(recipe => {
        if (recipe.id === recipeId) {
          const updatedReviews = [review, ...recipe.reviews];
          const newTotalRating = updatedReviews.reduce((sum, r) => sum + r.rating, 0);
          const newAverageRating = newTotalRating / updatedReviews.length;
          
          const updatedRecipe = { 
            ...recipe, 
            reviews: updatedReviews,
            rating: newAverageRating
          };

          if (selectedRecipe && selectedRecipe.id === recipeId) {
            setSelectedRecipe(updatedRecipe);
          }

          return updatedRecipe;
        }
        return recipe;
      });
    });
  };

  const filteredRecipes = allRecipes.filter(recipe => 
    recipe.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.description[language].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-orange-50 text-stone-800 min-h-screen">
      <Header 
        onGoHome={handleGoHome}
        language={language}
        setLanguage={setLanguage}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedRecipe ? (
          <RecipeDetails 
            recipe={selectedRecipe} 
            onBack={handleGoHome} 
            language={language}
            onAddReview={handleAddReview}
          />
        ) : (
          <>
            <Hero language={language} />
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              language={language}
            />
            <RecipeList 
              recipes={filteredRecipes} 
              onSelectRecipe={handleSelectRecipe}
              language={language}
            />
            <About language={language} />
            <Contact 
              language={language} 
              email="contact@recipes.py" 
              phone="+1 (555) 123-4567" 
            />
          </>
        )}
      </main>
      <Footer language={language} />
      <AIChatButton onClick={() => setIsChatOpen(true)} />
      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        language={language}
      />
    </div>
  );
};

export default App;