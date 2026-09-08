import { describe, expect, it, vi } from 'vitest'
import {
  applyTheme,
  createThemVars,
  toggleThemeColorScheme,
  applyThemeColorScheme,
} from './'

vi.mock('@material/material-color-utilities', () => {
  const mockTheme = {
    primary: 'primary',
    onPrimary: 'on-primary',
    primaryContainer: 'primary-container',
    onPrimaryContainer: 'on-primary-container',
    secondary: 'secondary',
    onSecondary: 'on-secondary',
    secondaryContainer: 'secondary-container',
    onSecondaryContainer: 'on-secondary-container',
    tertiary: 'tertiary',
    onTertiary: 'on-tertiary',
    tertiaryContainer: 'tertiary-container',
    onTertiaryContainer: 'on-tertiary-container',
    error: 'error',
    onError: 'on-error',
    errorContainer: 'error-container',
    onErrorContainer: 'on-error-container',
    background: 'background',
    onBackground: 'on-background',
    surface: 'surface',
    onSurface: 'on-surface',
    surfaceVariant: 'surface-variant',
    onSurfaceVariant: 'on-surface-variant',
    inverseSurface: 'inverse-surface',
    inverseOnSurface: 'inverse-on-surface',
    inversePrimary: 'inverse-primary',
    outline: 'outline',
    outlineVariant: 'outline-variant',
  }

  return {
    argbFromHex: () => 12345678,
    hexFromArgb: (value: string) => value,
    redFromArgb: () => 255,
    greenFromArgb: () => 255,
    blueFromArgb: () => 255,
    themeFromSourceColor: () => ({
      schemes: {
        dark: mockTheme,
        light: mockTheme,
      },
      palettes: {
        neutral: {
          tone: vi.fn((n: number) => `neutral-${n}`),
        },
        neutralVariant: {
          tone: vi.fn((n: number) => `neutralVariant-${n}`),
        },
      },
    }),
  }
})

describe('Theme utils', () => {
  describe('createThemVars', () => {
    it('should return a CSS string containing the theme variables', () => {
      const result = createThemVars({
        colorScheme: 'dark',
        seedColor: 'red',
      })
      expect(typeof result).toBe('string')
      expect(result).toContain('--color-seed: red')
      expect(result).toContain('--color-scheme: dark')
      expect(result).toContain('--color-primary: primary')
      expect(result).toContain('--elevation-1:')
      expect(result).toContain('--font-title: sans-serif')
      expect(result).toContain('--font-content: sans-serif')
      expect(result).toContain('--font-code: monospace')
      expect(result).toContain(':root')
    })

    it('should disable font variables settings', () => {
      const result = createThemVars({
        colorScheme: 'light',
        seedColor: 'green',
        font: false,
      })
      expect(result).toContain('--color-seed: green')
      expect(result).toContain('--color-scheme: light')
      expect(result).toContain('--color-primary: primary')
      expect(result).toContain('--elevation-1:')
      expect(result).toContain('--font-settings: false')
      expect(result).not.toContain('--font-title')
      expect(result).not.toContain('--font-content')
      expect(result).not.toContain('--font-code')
    })

    it('should apply the fonts settings', () => {
      const result = createThemVars({
        colorScheme: 'dark',
        seedColor: 'blue',
        font: {
          title: 'Times New Roman',
          content: 'Arial',
          code: 'Verdana',
        },
      })
      expect(result).toContain('--color-seed: blue')
      expect(result).toContain('--color-scheme: dark')
      expect(result).toContain('--font-settings: true')
      expect(result).toContain('--font-title: Times New Roman')
      expect(result).toContain('--font-content: Arial')
      expect(result).toContain('--font-code: Verdana')
    })
  })

  it('applyTheme should inject a style element into the document head', () => {
    applyTheme({ colorScheme: 'light', seedColor: 'white', font: false })

    const styleEl = document.querySelector('[data-theme]') as HTMLStyleElement
    expect(styleEl).not.toBeNull()
    expect(styleEl.textContent).toContain('--color-scheme: light')
    expect(styleEl.textContent).toContain('--color-seed: white')
  })

  it('applyTheme should replace an existing theme style element', () => {
    applyTheme({ colorScheme: 'light', seedColor: 'white', font: false })
    applyTheme({ colorScheme: 'dark', seedColor: 'black', font: false })

    const styleElements = document.querySelectorAll('[data-theme]')
    expect(styleElements.length).toBe(1)
    const styleEl = styleElements[0] as HTMLStyleElement
    expect(styleEl.textContent).toContain('--color-scheme: dark')
    expect(styleEl.textContent).toContain('--color-seed: black')
  })

  it('toggleThemeColorScheme', () => {
    applyTheme({ colorScheme: 'light', seedColor: 'blue', font: false })

    let styleEl = document.querySelector('[data-theme]') as HTMLStyleElement
    expect(styleEl.textContent).toContain('--color-scheme: light')

    let current = 'light'
    toggleThemeColorScheme(newScheme => (current = newScheme))

    styleEl = document.querySelector('[data-theme]') as HTMLStyleElement
    expect(styleEl.textContent).toContain('--color-scheme: dark')
    expect(styleEl.textContent).toContain('--font-settings: false')
    expect(styleEl.textContent).not.toContain('--font-title')
    expect(current).toEqual('dark')

    toggleThemeColorScheme(newScheme => (current = newScheme))

    styleEl = document.querySelector('[data-theme]') as HTMLStyleElement
    expect(styleEl.textContent).toContain('--color-scheme: light')
    expect(current).toEqual('light')
  })

  it('applyThemeColorScheme', () => {
    applyTheme({
      seedColor: 'purple',
      colorScheme: 'light',
      font: {
        title: 'Comic Sans MS',
        content: 'Papyrus',
        code: 'Courier New',
      },
    })

    const onChange = vi.fn()
    applyThemeColorScheme('dark', onChange)

    const styleEl = document.querySelector('[data-theme]') as HTMLStyleElement
    expect(styleEl.textContent).toContain('--color-scheme: dark')
    expect(styleEl.textContent).toContain('--color-seed: purple')
    expect(styleEl.textContent).toContain('--font-title: Comic Sans MS')
    expect(onChange).toHaveBeenCalled()
  })

  it('applyThemeColorScheme without onChange callback', () => {
    applyTheme({
      seedColor: 'orange',
      colorScheme: 'light',
      font: false,
    })

    applyThemeColorScheme('dark')

    const styleEl = document.querySelector('[data-theme]') as HTMLStyleElement
    expect(styleEl.textContent).toContain('--color-scheme: dark')
    expect(styleEl.textContent).toContain('--color-seed: orange')
  })

  it('toggleThemeColorScheme without onToggle callback', () => {
    applyTheme({ colorScheme: 'light', seedColor: 'cyan', font: false })

    toggleThemeColorScheme()

    const styleEl = document.querySelector('[data-theme]') as HTMLStyleElement
    expect(styleEl.textContent).toContain('--color-scheme: dark')
  })

  it('toggleThemeColorScheme preserves font settings when enabled', () => {
    applyTheme({
      seedColor: 'magenta',
      colorScheme: 'light',
      font: {
        title: 'Georgia',
        content: 'Helvetica',
        code: 'Monaco',
      },
    })

    toggleThemeColorScheme()

    const styleEl = document.querySelector('[data-theme]') as HTMLStyleElement
    expect(styleEl.textContent).toContain('--color-scheme: dark')
    expect(styleEl.textContent).toContain('--font-settings: true')
    expect(styleEl.textContent).toContain('--font-title: Georgia')
    expect(styleEl.textContent).toContain('--font-content: Helvetica')
    expect(styleEl.textContent).toContain('--font-code: Monaco')
  })
})
