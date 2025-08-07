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

const CSS_PREFIX = 'rm-canonical-layout';

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
        CSS_PREFIX,
        `${CSS_PREFIX}__${variant}`,
        { [`${CSS_PREFIX}__fluid`]: isFluid },
        spacing !== undefined ? spacingClsx(CSS_PREFIX, spacing) : undefined,
        gap !== undefined ? gapClsx(`${CSS_PREFIX}__`, gap) : undefined,
        className,
      )}
      {...props}
    />
  );
}
