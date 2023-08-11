import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";
import en from './en'
import vn from "./vn";

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next 
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: en

      },
      vn: {
        translation: vn
      },
    },
  });

export default function (app) {
  app.use(I18NextVue, { i18next });
  return app;
}
