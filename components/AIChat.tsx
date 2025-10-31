import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { Language, ChatMessage } from '../types';
import { startChatSession } from '../services/geminiService';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose, language }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      title: 'AI Assistant',
      welcome: "Hi! I'm Chef.py, your culinary assistant. Ask me anything about cooking!",
      placeholder: 'Ask a cooking question...',
      send: 'Send',
    },
    ar: {
      title: 'المساعد الذكي',
      welcome: "أهلاً بك! أنا Chef.py، مساعدك في الطهي. اسألني أي شيء عن الطبخ!",
      placeholder: 'اسأل سؤالاً عن الطبخ...',
      send: 'إرسال',
    },
  };
  
  useEffect(() => {
    if (isOpen) {
      const newChat = startChatSession(language);
      setChat(newChat);
      setMessages([
        { id: Date.now(), text: translations[language].welcome, sender: 'ai' }
      ]);
    } else {
      setMessages([]);
      setInput('');
    }
  }, [isOpen, language]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chat || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiMessageId = Date.now() + 1;
    let currentAiMessage: ChatMessage = { id: aiMessageId, text: '', sender: 'ai', streaming: true };
    setMessages(prev => [...prev, currentAiMessage]);
    
    try {
      const stream = await chat.sendMessageStream({ message: input });
      let fullText = '';
      for await (const chunk of stream) {
        fullText += chunk.text;
        setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, text: fullText } : msg
        ));
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorText = language === 'ar' ? "عفوًا، حدث خطأ ما." : "Sorry, something went wrong.";
       setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, text: errorText, streaming: false } : msg
        ));
    } finally {
       setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, streaming: false } : msg
        ));
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end" onClick={onClose}>
      <div 
        className="w-full max-w-md h-full sm:h-[90%] sm:max-h-[700px] bg-orange-50 flex flex-col m-0 sm:m-6 rounded-t-lg sm:rounded-lg shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-orange-200">
          <h2 className="text-xl font-bold text-stone-800">{translations[language].title}</h2>
          <button onClick={onClose} className="text-stone-500 hover:text-orange-600">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
        </header>

        <div ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                message.sender === 'user' 
                ? 'bg-white text-stone-800 border border-orange-200' 
                : 'bg-orange-100 text-stone-800'
              }`}>
                <p className="text-sm break-words">{message.text}
                 {message.streaming && <span className="inline-block w-2 h-2 ml-1 bg-stone-500 rounded-full animate-pulse"></span>}
                </p>
              </div>
            </div>
          ))}
        </div>

        <footer className="p-4 border-t border-orange-200">
          <div className="flex space-x-2 rtl:space-x-reverse">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={translations[language].placeholder}
              className="flex-1 p-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="bg-orange-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-700 disabled:bg-orange-400"
              disabled={isLoading || !input.trim()}
            >
              {translations[language].send}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AIChat;