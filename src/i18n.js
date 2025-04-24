// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'; // Import the detector

// Import your translation files
import translationEN from './locales/en/translation.json';
import translationTH from './locales/th/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  th: {
    translation: translationTH
  }
};

i18n
  // Add the LanguageDetector plugin
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  .init({
    resources,
    fallbackLng: "en", // Use 'en' if detected language is not available or no preference found
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false // React already safes from xss
    },

    // Configuration for the language detector
    detection: {
      // Order and from where user language should be detected
      // We prioritize localStorage here
      order: ['localStorage'],

      // Keys or names to lookup language from
      lookupLocalStorage: 'i18nextLng', // Standard key for i18next language in localStorage
      lookupCookie: 'i18next',          // Standard key for i18next language in cookies (optional)

      // Cache user language on
      caches: ['localStorage'], // Cache the selected language in localStorage
      // excludeCacheFor: ['cimode'], // Languages to not persist (e.g., 'cimode' used for development)
    }
  });

export default i18n;
