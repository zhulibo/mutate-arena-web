import { createI18n } from "vue-i18n";

import en from "./locales/en.js";
import zh from "./locales/zh.js";


let locale = "en";

const LOCALE_KEY = 'user-locale';
const cachedLocale = localStorage.getItem(LOCALE_KEY);

if (cachedLocale){
  locale = cachedLocale;
}
else if (navigator.language.startsWith("zh")){
  locale = "zh";
}

const i18n = createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
  }
})

export default i18n

export { LOCALE_KEY };
