'use client';

import { clsx } from 'clsx';
import { flexboxClsx, spacingClsx } from './commons';
import type {
  MaterialFlexboxProps,
  MaterialSpacingProps,
  MaterialTextScales,
} from './types';

export type FontProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    scale: MaterialTextScales;
    textAlign?: 'center' | 'justify' | 'left' | 'right';
    textTransform?: 'capitalize' | 'lowercase' | 'uppercase';
    textColor?: 'primary' | 'secondary' | 'tertiary' | 'reverse' | 'error';
    spacing?: MaterialSpacingProps;
    flexbox?: MaterialFlexboxProps;
    as?: E;
    ref?: React.Ref<HTMLElement>;
  };

const CSS_PREFIX = 'm3-font';

export function Font<E extends React.ElementType>({
  scale,
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
        `${CSS_PREFIX}-${scale}`,
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
