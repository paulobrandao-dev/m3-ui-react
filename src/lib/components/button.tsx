'use client'

import './button.scss'

/**
 * Props for the `Button` component.
 *
 * @template T - The HTML element type to render. Defaults to `button`.
 */
export type ButtonProps<T extends React.ElementType = 'button'> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The visual style variant of the button. Defaults to `text`. */
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'
  /** The size of the button. Defaults to `sm`. */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** The HTML element to render the button as. Defaults to `button`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
}

/**
 * The `Button` component implements the Material Design 3 button specification.
 * It supports five visual variants and five sizes, and can be rendered as any
 * HTML element via the `as` prop — useful for rendering links styled as buttons.
 *
 * @example
 * ```tsx
 * import { Button } from 'm3-ui-react/button';
 *
 * export default function MyActions() {
 *   return (
 *     <div>
 *       <Button variant="filled" size="md" onClick={() => console.log('clicked')}>
 *         Save
 *       </Button>
 *       <Button as="a" href="/cancel" variant="text">
 *         Cancel
 *       </Button>
 *     </div>
 *   );
 * }
 * ```
 *
 * @template T - The HTML element type to render. Defaults to `button`.
 * @param {ButtonProps<T>} props - The props for the `Button` component.
 * @returns {React.ReactElement} The rendered `Button` component.
 */
export const Button = <T extends React.ElementType = 'button'>({
  as,
  variant = 'text',
  size = 'sm',
  ...props
}: ButtonProps<T>) => {
  const Component = as ?? 'button'

  return (
    <Component
      data-button
      data-variant={variant}
      data-size={size}
      data-disabled={props.disabled}
      {...props}
    />
  )
}
