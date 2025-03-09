import 'server-only';

import type { Locale } from '@/app/lib/definitions';

const dictionaries = {
  en: () => import('./en.json').then(module => module.default),
  it: () => import('./it.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
