import { englishDictionary } from './dictionary.ts';

export type Language = 'ar' | 'en';
export type InterpolationValues = Record<string, string | number | boolean | null | undefined>;

/**
 * Framework-free translation core (no React imports) so it can be shared by
 * React components, plain helper modules, and the Express server.
 *
 * The Arabic source string is the dictionary key. A missing English entry
 * falls back to the Arabic text so nothing ever renders blank.
 */
export const interpolate = (template: string, values?: InterpolationValues): string => {
  if (!values) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    values[key] === undefined || values[key] === null ? match : String(values[key])
  );
};

const ARABIC_LETTERS = /[\u0600-\u06FF]/;

interface StoredTemplate {
  regex: RegExp;
  names: string[];
  english: string;
}
let storedTemplates: StoredTemplate[] | null = null;

/**
 * System-generated text is stored in the database already filled in
 * (e.g. "تم رفض طلبك (TRX-000012)"). The dictionary holds the template
 * "تم رفض طلبك ({trx})", so we compile every templated key into a regex and use
 * it as a fallback when there is no exact entry.
 */
const getStoredTemplates = (): StoredTemplate[] => {
  if (storedTemplates) return storedTemplates;
  storedTemplates = [];
  for (const [key, english] of Object.entries(englishDictionary)) {
    if (!/\{\w+\}/.test(key)) continue;
    const names: string[] = [];
    let literalLetters = 0;
    const source = key
      .split(/(\{\w+\})/)
      .map((part) => {
        const m = part.match(/^\{(\w+)\}$/);
        if (m) {
          names.push(m[1]);
          return '([\\s\\S]*?)';
        }
        if (ARABIC_LETTERS.test(part)) literalLetters += part.length;
        return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      })
      .join('');
    if (literalLetters < 4) continue; // too generic to match safely
    storedTemplates.push({ regex: new RegExp(`^${source}$`), names, english });
  }
  return storedTemplates;
};

const translateStoredTemplate = (arabicText: string): string | null => {
  if (!ARABIC_LETTERS.test(arabicText)) return null;
  for (const tpl of getStoredTemplates()) {
    const match = tpl.regex.exec(arabicText);
    if (!match) continue;
    const values: InterpolationValues = {};
    tpl.names.forEach((name, i) => {
      const raw = match[i + 1];
      values[name] = englishDictionary[raw] ?? raw; // nested labels such as "نشط" are translated too
    });
    return interpolate(tpl.english, values);
  }
  return null;
};

export const translate = (
  language: Language,
  arabicText: string,
  values?: InterpolationValues
): string => {
  if (language === 'ar') return interpolate(arabicText, values);
  const exact = englishDictionary[arabicText];
  if (exact !== undefined) return interpolate(exact, values);
  if (!values) {
    const fromTemplate = translateStoredTemplate(arabicText);
    if (fromTemplate !== null) return fromTemplate;
  }
  return interpolate(arabicText, values);
};

/* ---------------------------------------------------------------------------
 * Current-language holder for NON-React code (utils, validators, exports).
 * The LanguageProvider keeps it in sync, so `tr()` is always correct at the
 * moment it is called. Components should still prefer `useI18n().t` so they
 * re-render when the language changes.
 * ------------------------------------------------------------------------- */
let currentLanguage: Language = 'ar';

export const getCurrentLanguage = (): Language => currentLanguage;

export const setCurrentLanguage = (language: Language): void => {
  currentLanguage = language;
};

export const tr = (arabicText: string, values?: InterpolationValues): string =>
  translate(currentLanguage, arabicText, values);

export const getLocale = (language: Language = currentLanguage): string =>
  language === 'ar' ? 'ar-EG' : 'en-US';

/**
 * Adds an `X-Lang` header to every /api request so the server can answer
 * (errors, validation messages, generated reports) in the selected language.
 */
let fetchPatched = false;
export const installFetchLanguageHeader = (): void => {
  if (fetchPatched || typeof window === 'undefined' || typeof window.fetch !== 'function') return;
  fetchPatched = true;
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
    try {
      const url =
        typeof input === 'string' ? input : input instanceof URL ? input.href : (input as Request).url;
      const isApi = url.startsWith('/api') || url.includes(`${window.location.origin}/api`);
      if (isApi) {
        const headers = new Headers(init?.headers ?? (input instanceof Request ? input.headers : undefined));
        headers.set('X-Lang', currentLanguage);
        return originalFetch(input, { ...init, headers });
      }
    } catch {
      /* fall through to the untouched request */
    }
    return originalFetch(input, init);
  };
};
