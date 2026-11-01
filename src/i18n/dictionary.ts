import common from './dict/common.ts';
import auth from './dict/auth.ts';
import dashboard from './dict/dashboard.ts';
import items from './dict/items.ts';
import movements from './dict/movements.ts';
import custodies from './dict/custodies.ts';
import inventory from './dict/inventory.ts';
import ledger from './dict/ledger.ts';
import accounts from './dict/accounts.ts';
import system from './dict/system.ts';
import stored from './dict/stored.ts';

/**
 * Arabic -> English dictionary.
 *
 * The Arabic source string is the key. Anything that is not present here is
 * rendered verbatim (Arabic) even when the UI is in English, which keeps the
 * application usable while translations are being extended.
 */
export const englishDictionary: Record<string, string> = {
  ...stored,
  ...common,
  ...auth,
  ...dashboard,
  ...items,
  ...movements,
  ...custodies,
  ...inventory,
  ...ledger,
  ...accounts,
  ...system,
};
