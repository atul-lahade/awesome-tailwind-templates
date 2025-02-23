import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./translations/english/translation.json";
import translationSpanish from "./translations/spanish/translation.json";
import translationFrench from "./translations/german/translation.json";

//---Using different namespaces
const resources = {
    us: {
        home: translationEnglish
    },
    es: {
        home: translationSpanish,
    },
    fr: {
        home: translationFrench,
    },
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"us", //default language
});

export default i18next;