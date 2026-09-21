'use client'

import { ThemeProps, createThemeVars } from './common'

export function applyTheme(props: ThemeProps) {
  const styleElement = document.createElement('style')
  styleElement.dataset.theme = ''
  styleElement.textContent = `
    :root {
      ${createThemeVars(props)}
    }
  `
  const currentThemeElement = document.querySelector('[data-theme]')
  if (currentThemeElement) currentThemeElement.remove()
  document.head.appendChild(styleElement)
}

export function applyThemeColorScheme(
  colorScheme: 'light' | 'dark',
  onChange?: () => void,
) {
  const seedColor = getComputedStyle(document.documentElement).getPropertyValue(
    '--color-seed',
  )
  const fontSettings = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--font-settings')
  const fontTitle = getComputedStyle(document.documentElement).getPropertyValue(
    '--font-title',
  )
  const fontContent = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--font-content')
  const fontCode = getComputedStyle(document.documentElement).getPropertyValue(
    '--font-code',
  )
  applyTheme({
    seedColor,
    colorScheme,
    font:
      fontSettings === 'true'
        ? {
            title: fontTitle,
            content: fontContent,
            code: fontCode,
          }
        : false,
  })
  if (onChange !== undefined) onChange()
}

export function toggleThemeColorScheme(
  onToggle?: (colorScheme: string) => void,
) {
  const scheme = getComputedStyle(document.documentElement).getPropertyValue(
    '--color-scheme',
  )
  const seedColor = getComputedStyle(document.documentElement).getPropertyValue(
    '--color-seed',
  )
  const fontSettings = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--font-settings')
  const fontTitle = getComputedStyle(document.documentElement).getPropertyValue(
    '--font-title',
  )
  const fontContent = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--font-content')
  const fontCode = getComputedStyle(document.documentElement).getPropertyValue(
    '--font-code',
  )
  const colorScheme = scheme === 'light' ? 'dark' : 'light'
  applyTheme({
    seedColor,
    colorScheme,
    font:
      fontSettings === 'true'
        ? {
            title: fontTitle,
            content: fontContent,
            code: fontCode,
          }
        : false,
  })
  if (onToggle !== undefined) onToggle(colorScheme)
}
