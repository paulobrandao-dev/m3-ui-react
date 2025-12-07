import { createContext } from 'react';
import settings from './model';

export type SettingsContextValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isFluidContent: boolean;
  toggleFluidContent: () => void;
  settingsIsOpen: boolean;
  toggleSettings: () => void;
  subtitle?: string;
  setSubtitle: (value: string | undefined) => void;
  navAction: string | null;
  setNavAction: (value: string | null) => void;
};

export const SettingsContext = createContext<SettingsContextValue>({
  isDarkMode: settings.theme === 'dark',
  isFluidContent: settings.fluidContent,
  settingsIsOpen: false,
  navAction: null,
  toggleSettings: () =>
    (settings.settingsMenuOpen = !settings.settingsMenuOpen),
  toggleDarkMode: () =>
    (settings.theme = settings.theme === 'dark' ? 'light' : 'dark'),
  toggleFluidContent: () => (settings.fluidContent = !settings.fluidContent),
  setSubtitle: () => {},
  setNavAction: () => {},
});
