import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'fr', 'ar'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      // Assurez-vous que le chemin correspond à la structure du déploiement sur GitHub Pages
      loadPath: '/portfolio/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  }, (err, t) => {
    if (err) console.error('Error loading translations:', err);
    else console.log('Translations loaded successfully');
  });

export default i18n;
