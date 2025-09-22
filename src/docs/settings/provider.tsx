import { applyThemeColorScheme } from '@/lib/theme';
import { useCallback, useState } from 'react';
import { SettingsContext } from './context';
import settings from './model';

export function SettingsProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isDarkMode, setDarkModeFlag] = useState<boolean>(
    settings.theme === 'dark',
  );
  const [isFluidContent, setFluidContentFlag] = useState<boolean>(
    settings.fluidContent,
  );
  const [subtitle, setSubtitle] = useState<string>();
  const [settingsIsOpen, toggleSettingsMenu] = useState<boolean>(
    settings.settingsMenuOpen,
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

  const toggleSettings = useCallback(() => {
    const value = !settingsIsOpen;
    settings.settingsMenuOpen = value;
    toggleSettingsMenu(value);
  }, [settingsIsOpen]);

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        isFluidContent,
        subtitle,
        settingsIsOpen,
        toggleDarkMode,
        toggleFluidContent,
        setSubtitle,
        toggleSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
