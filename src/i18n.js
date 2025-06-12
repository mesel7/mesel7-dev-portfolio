import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ko from './locales/ko.json';
import ja from './locales/ja.json';

i18n
  .use(LanguageDetector) // 언어 자동 감지
  .use(initReactI18next) // 리액트 연동
  .init({
    resources: {
      ko: { translation: ko },
      ja: { translation: ja },
    },
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false, // React에서는 XSS 걱정 없으므로 false
    },
  });

export default i18n;