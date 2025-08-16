import { describe, expect, it, test, vi } from 'vitest';
import {
  applyTheme,
  applyThemeOnHtmlStyleTag,
  toggleThemeColorScheme,
} from './';

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
  };

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
  };
});

describe('Theme utils', () => {
  describe('applyThemeOnHtmlStyleTag', () => {
    it('should return the minimal variables', () => {
      const result = applyThemeOnHtmlStyleTag({
        colorScheme: 'dark',
        seedColor: 'red',
      });
      expect(result).toHaveProperty('--color-seed', 'red');
      expect(result).toHaveProperty('--color-scheme', 'dark');
      expect(result).toHaveProperty('--color-primary', 'primary');
      expect(result).toHaveProperty(
        '--elevation-1',
        '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
      );
      expect(result).toHaveProperty('--font-title', 'sans-serif');
      expect(result).toHaveProperty('--font-content', 'sans-serif');
      expect(result).toHaveProperty('--font-code', 'monospace');
    });

    test('should disable font variables settings', () => {
      const result = applyThemeOnHtmlStyleTag({
        colorScheme: 'light',
        seedColor: 'green',
        font: false,
      });
      expect(result).toHaveProperty('--color-seed', 'green');
      expect(result).toHaveProperty('--color-scheme', 'light');
      expect(result).toHaveProperty('--color-primary', 'primary');
      expect(result).toHaveProperty(
        '--elevation-1',
        '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
      );
      expect(result).not.toHaveProperty('--font-title');
      expect(result).not.toHaveProperty('--font-content');
      expect(result).not.toHaveProperty('--font-code');
    });

    test('should apply the fonts settings', () => {
      const result = applyThemeOnHtmlStyleTag({
        colorScheme: 'dark',
        seedColor: 'blue',
        font: {
          title: 'Times New Roman',
          content: 'Arial',
          code: 'Verdana',
        },
      });
      expect(result).toHaveProperty('--color-seed', 'blue');
      expect(result).toHaveProperty('--color-scheme', 'dark');
      expect(result).toHaveProperty('--font-title', '"Times New Roman"');
      expect(result).toHaveProperty('--font-content', '"Arial"');
      expect(result).toHaveProperty('--font-code', '"Verdana"');
    });
  });

  test('applyTheme', () => {
    applyTheme({ colorScheme: 'light', seedColor: 'white', font: false });
    expect(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--color-scheme',
      ),
    ).toEqual('light');
    expect(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--color-seed',
      ),
    ).toEqual('white');
  });

  test('toggleThemeColorScheme', () => {
    applyTheme({ colorScheme: 'light', seedColor: 'blue', font: false });
    expect(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--color-scheme',
      ),
    ).toEqual('light');
    let current = 'light';
    toggleThemeColorScheme(newScheme => (current = newScheme));
    expect(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--color-scheme',
      ),
    ).toEqual('dark');
    expect(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--font-settings',
      ),
    ).toEqual('false');
    expect(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--font-title',
      ),
    ).toEqual('');
    expect(current).toEqual('dark');
    toggleThemeColorScheme(newScheme => (current = newScheme));
    expect(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--color-scheme',
      ),
    ).toEqual('light');
    expect(current).toEqual('light');
  });
});
