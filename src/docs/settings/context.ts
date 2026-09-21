import { createContext } from 'react'
import settings from './model'

export type NavAction = 'menu' | 'back' | undefined

export type SettingsContextValue = {
  isDarkMode: boolean
  toggleDarkMode: () => void
  isFluidContent: boolean
  toggleFluidContent: () => void
  settingsIsOpen: boolean
  toggleSettings: () => void
  title?: React.ReactNode
  subtitle?: React.ReactNode
  setTitle: (value: React.ReactNode | undefined) => void
  setSubtitle: (value: React.ReactNode | undefined) => void
  navAction?: NavAction
  setNavAction: (value: NavAction | undefined) => void
}

export const SettingsContext = createContext<SettingsContextValue>({
  isDarkMode: settings.theme === 'dark',
  isFluidContent: settings.fluidContent,
  settingsIsOpen: false,
  toggleSettings: () =>
    (settings.settingsMenuOpen = !settings.settingsMenuOpen),
  toggleDarkMode: () =>
    (settings.theme = settings.theme === 'dark' ? 'light' : 'dark'),
  toggleFluidContent: () => (settings.fluidContent = !settings.fluidContent),
  setTitle: () => {},
  setSubtitle: () => {},
  setNavAction: () => {},
})
