import { applyThemeColorScheme } from '@/lib/theme/client'
import { useCallback, useState } from 'react'
import { NavAction, SettingsContext } from './context'
import settings from './model'

export function SettingsProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isDarkMode, setDarkModeFlag] = useState<boolean>(
    settings.theme === 'dark',
  )
  const [isFluidContent, setFluidContentFlag] = useState<boolean>(
    settings.fluidContent,
  )
  const [title, setTitle] = useState<React.ReactNode>()
  const [subtitle, setSubtitle] = useState<React.ReactNode>()
  const [settingsIsOpen, toggleSettingsMenu] = useState<boolean>(
    settings.settingsMenuOpen,
  )
  const [navAction, setNavAction] = useState<NavAction>()

  const toggleDarkMode = useCallback(() => {
    const theme = isDarkMode ? 'light' : 'dark'
    settings.theme = theme
    applyThemeColorScheme(theme, () => setDarkModeFlag(!isDarkMode))
  }, [isDarkMode])

  const toggleFluidContent = useCallback(() => {
    settings.fluidContent = !isFluidContent
    setFluidContentFlag(!isFluidContent)
  }, [isFluidContent])

  const toggleSettings = useCallback(() => {
    const value = !settingsIsOpen
    settings.settingsMenuOpen = value
    toggleSettingsMenu(value)
  }, [settingsIsOpen])

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        isFluidContent,
        title,
        subtitle,
        settingsIsOpen,
        navAction,
        toggleDarkMode,
        toggleFluidContent,
        setTitle,
        setSubtitle,
        toggleSettings,
        setNavAction,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
