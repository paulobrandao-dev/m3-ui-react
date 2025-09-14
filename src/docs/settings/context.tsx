import { createContext } from 'react';
import settings from './model';

export type SettingsContextValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isFluidContent: boolean;
  toggleFluidContent: () => void;
  subtitle?: string;
  setSubtitle: (value: string | undefined) => void;
};

export const SettingsContext = createContext<SettingsContextValue>({
  isDarkMode: settings.theme === 'dark',
  isFluidContent: settings.fluidContent,
  toggleDarkMode: () =>
    (settings.theme = settings.theme === 'dark' ? 'light' : 'dark'),
  toggleFluidContent: () => (settings.fluidContent = !settings.fluidContent),
  setSubtitle: () => {},
});
