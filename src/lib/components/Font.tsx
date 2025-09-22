'use client';

import { clsx } from 'clsx';
import { flexboxClsx, spacingClsx } from './commons';
import type {
  MaterialFlexboxProps,
  MaterialSpacingProps,
  MaterialTextScales,
} from './types';

/**
 * Props for the Font component.
 *
 * @template E - The HTML element type to render.
 * @property {MaterialTextScales} variant - The typography scale to apply.
 * @property {'center' | 'justify' | 'left' | 'right'} [textAlign] - The text alignment.
 * @property {'capitalize' | 'lowercase' | 'uppercase'} [textTransform] - The text transformation.
 * @property {'primary' | 'secondary' | 'tertiary' | 'reverse' | 'error'} [textColor] - The text color.
 * @property {MaterialSpacingProps} [spacing] - The spacing properties for the component.
 * @property {MaterialFlexboxProps} [flexbox] - The flexbox properties for the component.
 * @property {E} [as] - The HTML element to render the text as. Defaults to `span`.
 * @property {React.Ref<HTMLElement>} [ref] - A ref to the underlying HTML element.
 */
export type FontProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    variant: MaterialTextScales;
    textAlign?: 'center' | 'justify' | 'left' | 'right';
    textTransform?: 'capitalize' | 'lowercase' | 'uppercase';
    textColor?: 'primary' | 'secondary' | 'tertiary' | 'reverse' | 'error';
    spacing?: MaterialSpacingProps;
    flexbox?: MaterialFlexboxProps;
    as?: E;
    ref?: React.Ref<HTMLElement>;
  };

const CSS_PREFIX = 'm3-font';

/**
 * The `Font` component is a versatile utility for applying typography styles from the Material Design type scale.
 * It allows you to easily set font size, weight, and line height, as well as control text alignment, transformation, and color.
 *
 * @example
 * ```tsx
 * import { Font } from 'm3-ui-react';
 *
 * export default function MyTypography() {
 *   return (
 *     <div>
 *       <Font variant="display-large">Display Large</Font>
 *       <Font variant="headline-medium" textColor="primary">
 *         Headline Medium
 *       </Font>
 *       <Font as="p" variant="body-small" textAlign="justify">
 *         This is a small body text, justified. It can be rendered as a paragraph element.
 *       </Font>
 *     </div>
 *   );
 * }
 * ```
 *
 * @template E - The HTML element type to render.
 * @param {FontProps<E>} props - The props for the `Font` component.
 * @returns {React.ReactElement} The rendered `Font` component.
 */
export function Font<E extends React.ElementType>({
  variant,
  as,
  textAlign,
  textTransform,
  textColor,
  spacing,
  flexbox,
  ref,
  className,
  ...props
}: FontProps<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof FontProps<E>>) {
  const Surface = as ?? 'span';

  return (
    <Surface
      ref={ref}
      className={clsx(
        `${CSS_PREFIX}-${variant}`,
        {
          [`is-align-${textAlign}`]: textAlign !== undefined,
          [`is-transform-${textTransform}`]: textTransform !== undefined,
          [`is-color-${textColor}`]: textColor !== undefined,
        },
        spacing !== undefined ? spacingClsx(spacing) : undefined,
        flexbox !== undefined ? flexboxClsx(flexbox) : undefined,
        className,
      )}
      {...props}
    />
  );
}
