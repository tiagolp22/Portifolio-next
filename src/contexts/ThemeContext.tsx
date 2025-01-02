'use client'
import React, { createContext, useCallback, useEffect, useState } from 'react';
import type { Theme, ThemeContextType } from '@/types/theme';
import { applyTheme, getSystemTheme, resolveTheme, type ThemeColors } from '@/utils/themeUtils';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<ThemeColors>('dark');

  const handleSystemThemeChange = useCallback((e: MediaQueryListEvent) => {
    if (theme === 'system') {
      const newTheme = e.matches ? 'dark' : 'light';
      setEffectiveTheme(newTheme);
      applyTheme(newTheme);
    }
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    const resolvedTheme = resolveTheme(newTheme);
    setEffectiveTheme(resolvedTheme);
    applyTheme(resolvedTheme);
    localStorage.setItem('theme', newTheme);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemTheme = getSystemTheme();
      setEffectiveTheme(systemTheme);
      applyTheme(systemTheme);
    }

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [handleSystemThemeChange, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
