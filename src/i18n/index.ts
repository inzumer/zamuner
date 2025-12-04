/** Resources */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, es, it } from './locales';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      it: { translation: it },
    },
    fallbackLng: 'es',
    lng: 'es',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
