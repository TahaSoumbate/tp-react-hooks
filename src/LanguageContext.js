import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const value = {
    language, 
    setLanguage,
    toggleLanguage: () => setLanguage(current => current === 'fr' ? 'en' : 'fr')
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};