import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import type { Theme } from '@/types/theme';
import { a11yLabels } from '@/utils/a11y';

const themeIcons = {
  light: <Sun className="w-5 h-5" aria-hidden="true" />,
  dark: <Moon className="w-5 h-5" aria-hidden="true" />,
  system: <Monitor className="w-5 h-5" aria-hidden="true" />
} as const;

const nextTheme: Record<Theme, Theme> = {
  light: 'dark',
  dark: 'system',
  system: 'light'
} as const;

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(nextTheme[theme])}
      className="p-2 rounded-lg hover:bg-[rgb(var(--button-hover))] active:scale-95 transition-all
                 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--highlight))] focus:ring-offset-2"
      aria-label={a11yLabels.theme[theme]}
    >
      <div className="transition-transform duration-200">
        {themeIcons[theme]}
      </div>
    </button>
  );
};
