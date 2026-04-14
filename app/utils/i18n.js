import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(Backend)
  .use(LanguageDetector) // detect & store language
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: import.meta.env.DEBUG_MODE,
    load: 'all',
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    detection: {
      // keys or params to lookup language from
      lookupLocalStorage: "i18nextLng",
      // cache user language on
      caches: ["localStorage"],
    }
  });

export default i18n;
