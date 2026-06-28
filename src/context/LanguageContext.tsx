// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { translations, type Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.es) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const getInitialLanguage = (): Language => {
    const browserLang = navigator.language.slice(0, 2); 
    if (browserLang === 'es') return 'es';
    if (browserLang === 'fr') return 'fr';
    if (browserLang === 'de') return 'de';
    
    return 'en'; 
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = (key: keyof typeof translations.es): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};