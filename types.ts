export type Language = 'en' | 'ar';

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

export interface Recipe {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  imageUrl: string;
  videoUrl: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  rating: number;
  ingredients: Record<Language, string[]>;
  instructions: Record<Language, string[]>;
  reviews: Review[];
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  streaming?: boolean;
}