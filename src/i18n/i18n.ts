import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resource_vi } from './language/vi';
import { resource_en } from './language/en';
import { resource_jp } from './language/jp';

const resources = {
  en: {
    translation: resource_en
  },
  vi: {
    translation: resource_vi
  },
  jp: {
    translation: resource_jp
  },
};

export const  language=[
  {value:'vi', label:'Tiếng Việt'},
  {value:'en', label:'English'},
  {value:'jp', label:'日本語'}, 
]

const currentLanguage = localStorage.getItem('language') ??'vi';
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: currentLanguage, 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;