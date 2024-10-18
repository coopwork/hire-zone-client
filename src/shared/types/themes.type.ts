export type ThemeType = 'light' | 'dark' | 'system';

export type ThemeObjectType = {
  label: { ru: string; en: string; kk: string } | any;
  value: ThemeType;
};
