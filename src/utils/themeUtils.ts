import type { Theme } from '@/types/theme';

export type ThemeColors = 'light' | 'dark';

export const applyTheme = (theme: ThemeColors) => {
  document.documentElement.setAttribute('data-theme', theme);
};

export const getSystemTheme = (): ThemeColors => {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const resolveTheme = (theme: Theme): ThemeColors => {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
};
