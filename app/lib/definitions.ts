export type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};
export const locales = ['en', 'it'] as const;

export type Locale = (typeof locales)[number];
