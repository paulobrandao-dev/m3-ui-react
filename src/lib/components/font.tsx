'use client'

import './font.scss'

/**
 * Typography scales provided by Material Design 3.
 * Defines the complete set of supported text styles.
 */
type MaterialTextScales =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small'
  | 'code'

/**
 * Props for the Font component.
 *
 * @template T - The HTML element type to render.
 */
export type FontProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | 'color'
> & {
  /** The typography scale variant to apply. */
  variant: MaterialTextScales
  /** Optional text transformation. */
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase'
  /** Optional text alignment. */
  textAlign?: 'center' | 'justify' | 'left' | 'right'
  /** Optional semantic text color from the theme. */
  textColor?: 'primary' | 'secondary' | 'tertiary' | 'reverse' | 'error'
  /** The HTML element to render the text as. Defaults to `span`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
}

/**
 * The `Font` component is a versatile utility for applying typography styles from the Material Design type scale.
 * It uses data attributes for styling, allowing seamless integration with the component's SCSS module.
 *
 * @example
 * ```tsx
 * import { Font } from 'm3-ui-react';
 *
 * export default function MyTypography() {
 *   return (
 *     <div>
 *       <Font as="h1" variant="display-large">Display Large</Font>
 *       <Font variant="headline-medium" textColor="primary">
 *         Headline Medium
 *       </Font>
 *       <Font as="p" variant="body-small" textAlign="justify">
 *         This is a small body text, justified.
 *       </Font>
 *     </div>
 *   );
 * }
 * ```
 *
 * @template T - The HTML element type to render.
 * @param {FontProps<T>} props - The props for the `Font` component.
 * @returns {React.ReactElement} The rendered `Font` component.
 */
export const Font = <T extends React.ElementType>({
  as,
  variant,
  textTransform,
  textAlign,
  textColor,
  ...props
}: FontProps<T>) => {
  const Component = as ?? 'span'

  return (
    <Component
      data-font
      data-variant={variant}
      data-transform={textTransform}
      data-align={textAlign}
      data-color={textColor}
      {...props}
    />
  )
}
