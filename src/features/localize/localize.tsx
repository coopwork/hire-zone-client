import { IWrapperProps } from '@/shared/types/wrapper.interface.ts';
import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const Localize = ({ children }: IWrapperProps) => {
  i18n
    .use(detector)
    .use(backend)
    .use(initReactI18next)
    .init({
      supportedLngs: ['ru', 'en', 'kk'],
      fallbackLng: ['ru', 'en', 'kk'],
      debug: false,
      detection: {
        order: ['path', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag'],
        caches: ['cookie'],
      },
      react: { useSuspense: false },
      backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json',
      },
    });
  return children;
};

export default Localize;
