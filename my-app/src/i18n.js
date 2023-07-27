// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React"
      // more keywords...
    }
  },
  es: {
    translation: {
      "Welcome to React": "Bienvenido a React"
      // more keywords...
    }
  }
  // more languages...
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en", // To handle missing translations
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
