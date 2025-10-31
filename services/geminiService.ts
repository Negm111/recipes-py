import { GoogleGenAI, Chat } from "@google/genai";
import { Recipe, Language } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const getSystemInstruction = (language: Language) => {
  if (language === 'ar') {
    return `
      أنت "Chef.py"، مساعد طهي ذكاء اصطناعي ودود وخبير لموقع Recipes.py.
      مهمتك هي الإجابة على جميع أنواع أسئلة الطهي.
      كن موجزًا ومباشرًا ومفيدًا. استخدم قوائم منقطة عند الحاجة.
      لا تجب أبدًا على أسئلة ليست متعلقة بالطعام أو الطهي أو المطبخ.
      إذا سُئلت عن شيء آخر، أجب بأدب أنك هنا فقط للمساعدة في الطهي.
      تواصل دائمًا باللغة العربية.
    `;
  }
  return `
    You are "Chef.py", a friendly and expert AI culinary assistant for the website Recipes.py.
    Your job is to answer all kinds of cooking-related questions.
    Be concise, direct, and helpful. Use bullet points when appropriate.
    Never answer questions that are not about food, cooking, or the kitchen.
    If asked about anything else, politely state that you are only here to help with cooking.
    Always communicate in English.
  `;
};

export const startChatSession = (language: Language): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: getSystemInstruction(language),
    },
  });
};


export const tweakRecipe = async (recipe: Recipe, tweakRequest: string, language: Language): Promise<string> => {
  try {
    const ingredients = recipe.ingredients[language].join(', ');
    const instructions = recipe.instructions[language]
      .map((step, index) => `${index + 1}. ${step}`)
      .join('\n');

    const prompt = `
      You are an expert chef. Your task is to modify a given recipe based on a user's request.
      Provide a helpful, concise, and clear response in ${language === 'en' ? 'English' : 'Arabic'}.

      Original Recipe: "${recipe.title[language]}"
      Ingredients: ${ingredients}
      Instructions:
      ${instructions}

      User's Tweak Request: "${tweakRequest}"

      Your suggested modification:
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error tweaking recipe with Gemini API:", error);
    if (language === 'ar') {
      return "عفوًا، حدث خطأ أثناء تعديل الوصفة. يرجى المحاولة مرة أخرى.";
    }
    return "Sorry, an error occurred while tweaking the recipe. Please try again.";
  }
};