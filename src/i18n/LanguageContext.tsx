import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  type Language,
  type InterpolationValues,
  interpolate,
  translate,
  setCurrentLanguage,
} from './translate.ts';

export type { Language };
export { translate };

export interface LanguageContextValue {
  /** Currently selected UI language. */
  language: Language;
  /** Sets the UI language explicitly. */
  setLanguage: (language: Language) => void;
  /** Flips between Arabic and English. */
  toggleLanguage: () => void;
  /** Text direction that matches the selected language. */
  dir: 'rtl' | 'ltr';
  isRTL: boolean;
  /** Locale string suitable for Intl / toLocaleDateString / toLocaleString. */
  locale: string;
  /**
   * Translates a static UI string.
   *
   * The Arabic text is the dictionary key, so the Arabic UI keeps working
   * exactly as before while English is served from `englishDictionary`.
   * Values interpolated through `{placeholders}` are never translated, which
   * guarantees that user-entered data (names, notes, item descriptions...)
   * keeps its original language.
   */
  t: (arabicText: string, values?: InterpolationValues) => string;
}

const STORAGE_KEY = 'warehouse_language';

const LanguageContext = createContext<LanguageContextValue>({
  language: 'ar',
  setLanguage: () => {},
  toggleLanguage: () => {},
  dir: 'rtl',
  isRTL: true,
  locale: 'ar-EG',
  t: (arabicText, values) => interpolate(arabicText, values),
});

const readStoredLanguage = (): Language => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') return stored;
  } catch {
    /* localStorage may be unavailable (private mode) */
  }
  return 'ar';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);
  // Keep the non-React translator (`tr`) and the fetch header in sync *before*
  // children render, so helper modules never see a stale language.
  setCurrentLanguage(language);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    root.dataset.lang = language;
    document.title = translate(language, 'نظام إدارة العهد والمخازن');
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore write failures */
    }
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  const t = useCallback(
    (arabicText: string, values?: InterpolationValues) => translate(language, arabicText, values),
    [language]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      dir: language === 'ar' ? 'rtl' : 'ltr',
      isRTL: language === 'ar',
      locale: language === 'ar' ? 'ar-EG' : 'en-US',
      t,
    }),
    [language, setLanguage, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useI18n = () => useContext(LanguageContext);
