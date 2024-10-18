import { ThemeObjectType } from '@/shared/types/themes.type.ts';

export const THEMES: ThemeObjectType[] = [
  {
    label: { ru: 'Темная', en: 'Dark', kk: 'Қараңғы' },
    value: 'dark',
  },
  {
    label: {
      ru: 'Светлая',
      en: 'Light',
      kk: 'Жарық',
    },
    value: 'light',
  },
  { label: { ru: 'Системная', en: 'System', kk: 'Жүйелік' }, value: 'system' },
] as const;
