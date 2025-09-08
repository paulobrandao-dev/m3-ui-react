import { useCallback, useState } from 'react';
import { SettingsContext } from './context';
import settings from './model';
import { applyThemeColorScheme } from '@/lib/theme';

export function SettingsProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isDarkMode, setDarkModeFlag] = useState<boolean>(
    settings.theme === 'dark',
  );
  const [isFluidContent, setFluidContentFlag] = useState<boolean>(
    settings.fluidContent,
  );

  const toggleDarkMode = useCallback(() => {
    const theme = isDarkMode ? 'light' : 'dark';
    settings.theme = theme;
    applyThemeColorScheme(theme, () => setDarkModeFlag(!isDarkMode));
  }, [isDarkMode]);

  const toggleFluidContent = useCallback(() => {
    settings.fluidContent = !isFluidContent;
    setFluidContentFlag(!isFluidContent);
  }, [isFluidContent]);

  return (
    <SettingsContext.Provider
      value={{ isDarkMode, isFluidContent, toggleDarkMode, toggleFluidContent }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
