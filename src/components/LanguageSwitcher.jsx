// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    // This will now automatically update localStorage
    // because of the 'caches' setting in i18n.js
    i18n.changeLanguage(lng);
  };

  // Function to handle the toggle logic
  const handleToggleLanguage = () => {
    const nextLanguage = i18n.resolvedLanguage === 'en' ? 'th' : 'en';
    changeLanguage(nextLanguage);
  };

  // Determine the text to display on the button
  const buttonText = i18n.resolvedLanguage === 'en' ? 'TH' : 'EN';

  return (
     <button
        onClick={handleToggleLanguage}
        className='cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors' // Example styling
        type="button"
        aria-label={`Switch language to ${buttonText === 'TH' ? 'Thai' : 'English'}`}
     >
        <span>{buttonText}</span>
     </button>
  );
};

export default LanguageSwitcher;
