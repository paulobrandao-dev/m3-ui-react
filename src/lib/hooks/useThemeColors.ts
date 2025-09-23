'use client';

/**
 * Represents a palette of related colors in the theme.
 *
 * @property {string} color - The main color of the palette.
 * @property {string} onColor - A color that provides good contrast against the main color.
 * @property {string} container - A color for container elements that need to stand out.
 * @property {string} onContainer - A color for content within a container that provides good contrast.
 */
type ThemePalette = {
  color: string;
  onColor: string;
  container: string;
  onContainer: string;
};

/**
 * A comprehensive set of theme colors based on Material Design 3.
 * Each property is a CSS variable string that can be used in style objects.
 */
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

/**
 * A hook that provides access to the Material Design 3 theme colors as CSS variables.
 * These colors are defined in the theme and can be used to style components consistently.
 *
 * @returns {ThemeColors} An object containing the theme colors as CSS variable strings.
 *
 * @example
 * ```tsx
 * import { useThemeColors } from 'm3-ui-react/hooks';
 *
 * export default function MyComponent() {
 *   const colors = useThemeColors();
 *
 *   return (
 *     <div style={{
 *       backgroundColor: colors.primary.container,
 *       color: colors.primary.onContainer,
 *       padding: '1rem',
 *     }}>
 *       This component uses the primary container color from the theme.
 *     </div>
 *   );
 * }
 * ```
 */
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
