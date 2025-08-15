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
    supportedLngs: ['ko', 'ja'], // 지원 언어 한정
    load: 'languageOnly', // 'ja-JP' -> 'ja'로 정규화
    detection: {
      // URL/로컬 저장 우선, 없으면 브라우저 언어, 마지막에 htmlTag
      order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      htmlTag: document.documentElement,
      lookupQuerystring: 'lng', // ?lng=ja
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
