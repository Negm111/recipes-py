import React, { useState } from 'react';
import { Review, Language } from '../types';
import StarRating from './StarRating';

interface RecipeReviewsProps {
  reviews: Review[];
  language: Language;
  onAddReview: (review: Review) => void;
}

const RecipeReviews: React.FC<RecipeReviewsProps> = ({ reviews, language, onAddReview }) => {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const translations = {
    en: {
      title: 'Reviews',
      addReview: 'Leave a Review',
      name: 'Your Name',
      comment: 'Your Comment',
      submit: 'Submit Review',
      rating: 'Your Rating',
      noReviews: 'No reviews yet. Be the first to add one!',
      namePlaceholder: 'e.g., Jane Doe',
      commentPlaceholder: 'What did you think of the recipe?',
      ratingError: 'Please select a rating'
    },
    ar: {
      title: 'المراجعات',
      addReview: 'اترك مراجعة',
      name: 'اسمك',
      comment: 'تعليقك',
      submit: 'إرسال المراجعة',
      rating: 'تقييمك',
      noReviews: 'لا توجد مراجعات بعد. كن أول من يضيف واحدة!',
      namePlaceholder: 'مثال: جين دو',
      commentPlaceholder: 'ما رأيك في الوصفة؟',
      ratingError: 'الرجاء تحديد تقييم'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && comment && rating > 0) {
      onAddReview({ id: Date.now(), author, rating, comment });
      setAuthor('');
      setRating(0);
      setComment('');
    }
  };
  
  const InteractiveStarRating: React.FC<{currentRating: number, onSetRating: (r: number) => void}> = ({currentRating, onSetRating}) => (
     <div className="flex items-center space-x-1 rtl:space-x-reverse">
      {[...Array(5)].map((_, i) => (
        <button key={i} type="button" onClick={() => onSetRating(i+1)}>
          <svg className={`w-8 h-8 cursor-pointer transition-colors ${i < currentRating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        </button>
      ))}
    </div>
  )

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold mb-6">{translations[language].title}</h2>
      
      <div className="space-y-6 mb-8">
        {reviews.length > 0 ? [...reviews].sort((a,b) => b.id - a.id).map(review => (
          <div key={review.id} className="border-b border-stone-200 pb-4">
            <div className="flex items-center mb-2">
                <StarRating rating={review.rating} />
                <p className="ms-3 font-bold text-stone-800 rtl:ms-0 rtl:me-3">{review.author}</p>
            </div>
            <p className="text-stone-600">{review.comment}</p>
          </div>
        )) : <p className="text-stone-500">{translations[language].noReviews}</p>}
      </div>

      <div className="mt-8 pt-6 border-t border-stone-200">
        <h3 className="text-2xl font-bold mb-4">{translations[language].addReview}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
           <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">{translations[language].rating}</label>
            <InteractiveStarRating currentRating={rating} onSetRating={setRating} />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-stone-700">{translations[language].name}</label>
            <input 
              type="text" 
              id="author"
              placeholder={translations[language].namePlaceholder}
              value={author} 
              onChange={e => setAuthor(e.target.value)}
              className="mt-1 block w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-stone-700">{translations[language].comment}</label>
            <textarea 
              id="comment"
              rows={4}
              placeholder={translations[language].commentPlaceholder} 
              value={comment} 
              onChange={e => setComment(e.target.value)}
              className="mt-1 block w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors disabled:bg-orange-300" disabled={!author || !comment || rating === 0}>
            {translations[language].submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeReviews;