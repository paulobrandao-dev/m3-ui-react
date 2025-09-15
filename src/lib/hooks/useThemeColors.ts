'use client';

type ThemePalette = {
  color: string;
  onColor: string;
  container: string;
  onContainer: string;
};

type ThemeColors = {
  primary: ThemePalette;
  secondary: ThemePalette;
  tertiary: ThemePalette;
  error: ThemePalette;
  background: Pick<ThemePalette, 'color' | 'onColor'>;
  surface: Pick<ThemePalette, 'color' | 'onColor'>;
  surfaceVariant: Pick<ThemePalette, 'color' | 'onColor'>;
  inverseSurface: Pick<ThemePalette, 'color' | 'onColor'>;
  surfaceContainer: {
    lowest: string;
    low: string;
    medium: string;
    high: string;
    highest: string;
  };
  inversePrimary: string;
  outline: string;
  outlineVariant: string;
  scrim: string;
};

export function useThemeColors(): ThemeColors {
  return {
    primary: {
      color: 'var(--color-primary)',
      onColor: 'var(--color-on-primary)',
      container: 'var(--color-primary-container)',
      onContainer: 'var(--color-on-primary-container)',
    },
    secondary: {
      color: 'var(--color-secondary)',
      onColor: 'var(--color-on-secondary)',
      container: 'var(--color-secondary-container)',
      onContainer: 'var(--color-on-secondary-container)',
    },
    tertiary: {
      color: 'var(--color-tertiary)',
      onColor: 'var(--color-on-tertiary)',
      container: 'var(--color-tertiary-container)',
      onContainer: 'var(--color-on-tertiary-container)',
    },
    error: {
      color: 'var(--color-error)',
      onColor: 'var(--color-on-error)',
      container: 'var(--color-error-container)',
      onContainer: 'var(--color-on-error-container)',
    },
    background: {
      color: 'var(--color-background)',
      onColor: 'var(--color-on-background)',
    },
    surface: {
      color: 'var(--color-surface)',
      onColor: 'var(--color-on-surface)',
    },
    surfaceVariant: {
      color: 'var(--color-surface-variant)',
      onColor: 'var(--color-on-surface-variant)',
    },
    inverseSurface: {
      color: 'var(--color-inverse-surface)',
      onColor: 'var(--color-on-inverse-surface)',
    },
    surfaceContainer: {
      lowest: 'var(--color-surface-container-lowest)',
      low: 'var(--color-surface-container-low)',
      medium: 'var(--color-surface-container)',
      high: 'var(--color-surface-container-high)',
      highest: 'var(--color-surface-container-highest)',
    },
    inversePrimary: 'var(--color-inverse-primary)',
    outline: 'var(--color-outline)',
    outlineVariant: 'var(--color-outline-variant)',
    scrim: 'var(--color-scrim)',
  };
}
