'use client';

import { clsx } from 'clsx';
import { gapClsx, spacingClsx } from './commons';
import { MaterialGapProps, MaterialSpacingProps } from './types';

export type CanonicalLayoutProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    variant: 'list-detail' | 'supporting-pane' | 'feed';
    spacing?: MaterialSpacingProps;
    gap?: MaterialGapProps;
    isFluid?: boolean;
    as?: E;
    ref?: React.Ref<HTMLElement>;
  };

const CSS_PREFIX = 'm3-layout';

export function CanonicalLayout<E extends React.ElementType>({
  as,
  ref,
  variant,
  spacing,
  gap,
  isFluid,
  className,
  ...props
}: CanonicalLayoutProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof CanonicalLayoutProps<E>>) {
  const Surface = as || 'section';

  return (
    <Surface
      ref={ref}
      className={clsx(
        `${CSS_PREFIX}-${variant}`,
        { 'is-fluid': isFluid },
        spacing !== undefined ? spacingClsx(spacing) : undefined,
        gap !== undefined ? gapClsx(gap) : undefined,
        className,
      )}
      {...props}
    />
  );
}
