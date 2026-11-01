import { AsyncLocalStorage } from 'node:async_hooks';
import type { Request, Response, NextFunction } from 'express';
import { englishDictionary } from '../i18n/dictionary.ts';
import { translate, type InterpolationValues, type Language } from '../i18n/translate.ts';
import { unitSymbolsEnglish } from '../i18n/dict/stored.ts';

/**
 * Per-request language for the API. The client sends `X-Lang: ar | en` with
 * every /api call (see installFetchLanguageHeader); AsyncLocalStorage lets any
 * helper deep in a route call `tr()` without threading `req` through.
 *
 * Only user-facing response text is translated here. Data written to the
 * database (movement notes, audit details...) stays in its canonical Arabic
 * and is translated at display time by the client.
 */
const storage = new AsyncLocalStorage<{ language: Language }>();

/**
 * Response fields that carry SYSTEM-generated Arabic text (seeded units and
 * their symbols, the "uncategorised" fallback, auto-generated warehouse names,
 * system notes and notifications). For English requests these are translated
 * on the way out; user-entered names that are not in the dictionary pass
 * through untouched, so customer data is never altered.
 */
const SYSTEM_TEXT_KEYS = new Set([
  'unit_name', 'unitName',
  'category_name', 'categoryName',
  'warehouse_name', 'source_warehouse_name', 'target_warehouse_name', 'warehouseName',
  'notes', 'title', 'message', 'adjustment_note',
]);

const SYMBOL_KEYS = new Set(['unit_symbol', 'unitSymbol', 'symbol']);

const localizeSystemText = (value: unknown, depth = 0): unknown => {
  if (depth > 12 || value === null || typeof value !== 'object') return value;
  if (Array.isArray(value)) return value.map((v) => localizeSystemText(v, depth + 1));
  const out: Record<string, unknown> = {};
  for (const [key, v] of Object.entries(value as Record<string, unknown>)) {
    if (typeof v === 'string' && SYMBOL_KEYS.has(key)) out[key] = unitSymbolsEnglish[v] ?? v;
    else out[key] = typeof v === 'string' && SYSTEM_TEXT_KEYS.has(key) ? translate('en', v) : localizeSystemText(v, depth + 1);
  }
  return out;
};

export const languageMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = String(req.headers['x-lang'] || req.headers['accept-language'] || '').toLowerCase();
  const language: Language = header.startsWith('en') ? 'en' : 'ar';

  if (language === 'en') {
    const originalJson = res.json.bind(res);
    res.json = ((body?: unknown) => originalJson(localizeSystemText(body))) as typeof res.json;
  }
  storage.run({ language }, next);
};

export const getRequestLanguage = (): Language => storage.getStore()?.language ?? 'ar';

export const tr = (arabicText: string, values?: InterpolationValues): string =>
  translate(getRequestLanguage(), arabicText, values);

export const getLocale = (): string => (getRequestLanguage() === 'ar' ? 'ar-EG' : 'en-US');

/**
 * Maps an English label typed by the user (e.g. in an Excel import) back to
 * the canonical Arabic dictionary key, so "Piece" resolves to the stored
 * unit "قطعة" instead of creating a duplicate. Restricted to the given
 * candidates so unrelated phrases can never be matched by accident.
 */
export const canonicalizeLabel = (value: string, candidates: string[]): string => {
  const wanted = value.trim().toLowerCase();
  if (!wanted) return value;
  for (const arabic of candidates) {
    if (arabic === value) return value;
    const english = englishDictionary[arabic];
    if (english && english.trim().toLowerCase() === wanted) return arabic;
  }
  return value;
};
