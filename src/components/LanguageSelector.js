import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="btn-group" role="group">
      <button 
        type="button" 
        className={`btn ${language === 'fr' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setLanguage('fr')}
      >
        FR
      </button>
      <button 
        type="button" 
        className={`btn ${language === 'en' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;