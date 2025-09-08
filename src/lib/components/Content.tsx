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
    scrollable?: {
      horizontal?: 'auto' | 'hidden' | 'visible' | 'scroll';
      vertical?: 'auto' | 'hidden' | 'visible' | 'scroll';
    };
  };

const CSS_PREFIX = 'm3-content';

export function Content<E extends React.ElementType>({
  as,
  ref,
  spacing,
  flexbox,
  grid,
  scrollable,
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
        {
          [`is-scrollable-x-${scrollable?.horizontal}`]:
            scrollable?.horizontal !== undefined,
          [`is-scrollable-y-${scrollable?.vertical}`]:
            scrollable?.vertical !== undefined,
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
