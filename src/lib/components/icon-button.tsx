'use client'

import './icon-button.scss'

/**
 * Props for the `IconButton` component.
 *
 * @template T - The HTML element type to render. Defaults to `button`.
 */
export type IconButtonProps<T extends React.ElementType = 'button'> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the icon button as. Defaults to `button`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
  /** The visual style variant of the icon button. Defaults to `standard`. */
  variant?: 'standard' | 'outlined' | 'filled' | 'tonal'
  /** The size of the icon button. Defaults to `sm`. */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** The width modifier of the icon button. */
  width?: 'narrow' | 'wide'
  /** Whether the icon button behaves as a toggle button. */
  isTogglable?: boolean
  /** Whether the toggle button is currently selected. Only meaningful when `isTogglable` is `true`. Defaults to `false`. */
  isSelected?: boolean
}

/**
 * The `IconButton` component implements the Material Design 3 icon button specification.
 * It supports four visual variants, five sizes, and an optional toggle behaviour, and can
 * be rendered as any HTML element via the `as` prop — useful for rendering links styled
 * as icon buttons.
 *
 * @example
 * ```tsx
 * import { IconButton } from 'm3-ui-react/icon-button';
 *
 * export default function MyActions() {
 *   return (
 *     <div>
 *       <IconButton variant="filled" size="md" onClick={() => console.log('clicked')}>
 *         <FavoriteIcon />
 *       </IconButton>
 *       <IconButton variant="outlined" isTogglable isSelected>
 *         <BookmarkIcon />
 *       </IconButton>
 *     </div>
 *   );
 * }
 * ```
 *
 * @template T - The HTML element type to render. Defaults to `button`.
 * @param {IconButtonProps<T>} props - The props for the `IconButton` component.
 * @returns {React.ReactElement} The rendered `IconButton` component.
 */
export const IconButton = <T extends React.ElementType = 'button'>({
  as,
  variant = 'standard',
  size = 'sm',
  width,
  isTogglable,
  isSelected = false,
  ...props
}: IconButtonProps<T>) => {
  const Component = as ?? 'button'

  return (
    <Component
      data-iconbutton
      data-variant={variant}
      data-size={size}
      data-width={width}
      aria-pressed={isTogglable ? isSelected : undefined}
      {...props}
    />
  )
}
