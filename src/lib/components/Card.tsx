'use client';

import { clsx } from 'clsx';
import { flexboxClsx, gridClsx, spacingClsx } from './commons';
import {
  MaterialFlexboxProps,
  MaterialGridProps,
  MaterialSpacingProps,
} from './types';

export type CardProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    as?: E;
    ref?: React.Ref<HTMLDivElement>;
    variant?: 'elevated' | 'filled' | 'outlined';
    stateLayer?: boolean;
    spacing?: MaterialSpacingProps;
    flexbox?: MaterialFlexboxProps;
    grid?: MaterialGridProps;
  };

const CSS_PREFIX = 'm3-card';

export function Card<E extends React.ElementType>({
  as,
  ref,
  variant = 'elevated',
  stateLayer,
  spacing,
  flexbox,
  grid,
  className,
  ...props
}: CardProps<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof CardProps<E>>) {
  const Surface = as || 'div';
  return (
    <Surface
      ref={ref}
      className={clsx(
        `${CSS_PREFIX}-${variant}`,
        {
          'has-state-layer': stateLayer,
        },
        spacing ? spacingClsx(spacing) : undefined,
        flexbox ? flexboxClsx(flexbox) : undefined,
        grid ? gridClsx(grid) : undefined,
        className,
      )}
      {...props}
    />
  );
}
