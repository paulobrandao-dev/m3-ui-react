'use client';

import { clsx } from 'clsx';
import { flexboxClsx, gridClsx, spacingClsx } from './commons';
import {
  MaterialFlexboxProps,
  MaterialGridProps,
  MaterialSpacingProps,
} from './types';

export type ContentProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    as?: E;
    ref?: React.Ref<HTMLDivElement>;
    spacing?: MaterialSpacingProps;
    flexbox?: MaterialFlexboxProps;
    grid?: MaterialGridProps;
  };

const CSS_PREFIX = 'rm-content';

export function Content<E extends React.ElementType>({
  as,
  ref,
  spacing,
  flexbox,
  grid,
  className,
  ...props
}: ContentProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof ContentProps<E>>) {
  const Surface = as || 'div';
  return (
    <Surface
      ref={ref}
      className={clsx(
        CSS_PREFIX,
        spacing ? spacingClsx(CSS_PREFIX, spacing) : undefined,
        flexbox ? flexboxClsx(CSS_PREFIX, flexbox) : undefined,
        grid ? gridClsx(CSS_PREFIX, grid) : undefined,
        className,
      )}
      {...props}
    />
  );
}
