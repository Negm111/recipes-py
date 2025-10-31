import React, { useState } from 'react';
import { Language } from '../types';

interface ContactProps {
  language: Language;
  email: string;
  phone: string;
}

const Contact: React.FC<ContactProps> = ({ language, email, phone }) => {
  const [submitted, setSubmitted] = useState(false);

  const translations = {
    en: {
      title: 'Get In Touch',
      subtitle: "Have a question, suggestion, or just want to say hello? I'd love to hear from you!",
      formName: 'Full Name',
      formEmail: 'Email Address',
      formMessage: 'Your Message',
      formButton: 'Send Message',
      office: 'Our Office',
      address: '123 Culinary Lane, Suite 100<br />Foodie Town, FL 54321',
      successTitle: 'Message Sent!',
      successMessage: 'Thanks for reaching out. I\'ll get back to you soon.'
    },
    ar: {
      title: 'تواصل معنا',
      subtitle: 'هل لديك سؤال، اقتراح، أو تود فقط أن تقول مرحباً؟ يسعدني أن أسمع منك!',
      formName: 'الاسم الكامل',
      formEmail: 'البريد الإلكتروني',
      formMessage: 'رسالتك',
      formButton: 'إرسال الرسالة',
      office: 'مكتبنا',
      address: '123 شارع الطهي، جناح 100<br />مدينة الذواقة، فلوريدا 54321',
      successTitle: 'تم إرسال الرسالة!',
      successMessage: 'شكراً لتواصلك. سأرد عليك قريباً.'
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">{translations[language].title}</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {translations[language].subtitle}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {submitted ? (
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800">{translations[language].successTitle}</h3>
              <p className="text-stone-600 mt-2">{translations[language].successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="sr-only">{translations[language].formName}</label>
                <input type="text" id="name" placeholder={translations[language].formName} className="block w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required/>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{translations[language].formEmail}</label>
                <input type="email" id="email" placeholder={translations[language].formEmail} className="block w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required/>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">{translations[language].formMessage}</label>
                <textarea id="message" rows={5} placeholder={translations[language].formMessage} className="block w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors">
                  {translations[language].formButton}
                </button>
              </div>
            </form>
          )}

          <div className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-stone-800">{translations[language].office}</h3>
            <p className="text-stone-600" dangerouslySetInnerHTML={{ __html: translations[language].address }}></p>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg className="h-6 w-6 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${email}`} className="text-stone-700 hover:text-orange-600">{email}</a>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg className="h-6 w-6 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
               <a href={`tel:${phone}`} className="text-stone-700 hover:text-orange-600">{phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;