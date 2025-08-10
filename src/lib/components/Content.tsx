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

const CSS_PREFIX = 'rm-content';

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
          [`${CSS_PREFIX}__scrollable-x-${scrollable?.horizontal}`]:
            scrollable?.horizontal !== undefined,
          [`${CSS_PREFIX}__scrollable-y-${scrollable?.vertical}`]:
            scrollable?.vertical !== undefined,
        },
        spacing ? spacingClsx(CSS_PREFIX, spacing) : undefined,
        flexbox ? flexboxClsx(CSS_PREFIX, flexbox) : undefined,
        grid ? gridClsx(CSS_PREFIX, grid) : undefined,
        className,
      )}
      {...props}
    />
  );
}
