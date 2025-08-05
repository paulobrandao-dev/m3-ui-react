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

const CSS_PREFIX = 'rm-card';

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
        CSS_PREFIX,
        `${CSS_PREFIX}__${variant}`,
        {
          [`${CSS_PREFIX}__${variant}-state-layer`]: stateLayer,
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

export type CardMediaProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    as?: E;
    ref?: React.Ref<HTMLDivElement>;
    alignMedia?:
      | 'left-top'
      | 'left-center'
      | 'left-bottom'
      | 'right-top'
      | 'right-center'
      | 'right-bottom'
      | 'center';
    fitMedia?: 'contain' | 'cover' | 'fill' | 'none';
  };

export function CardMedia<E extends React.ElementType>({
  as,
  ref,
  alignMedia,
  fitMedia,
  className,
  ...props
}: CardMediaProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof CardMediaProps<E>>) {
  const Surface = as || 'div';

  return (
    <Surface
      ref={ref}
      className={clsx(
        `${CSS_PREFIX}__media`,
        alignMedia ? `${CSS_PREFIX}__media-align-${alignMedia}` : undefined,
        fitMedia ? `${CSS_PREFIX}__media-fit-${fitMedia}` : undefined,
        className,
      )}
      {...props}
    />
  );
}

export type CardContentProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    as?: E;
    ref?: React.Ref<HTMLDivElement>;
    spacing?: MaterialSpacingProps;
    flexbox?: MaterialFlexboxProps;
    grid?: MaterialGridProps;
  };

export function CardContent<E extends React.ElementType>({
  as,
  ref,
  spacing,
  flexbox,
  grid,
  className,
  ...props
}: CardContentProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof CardContentProps<E>>) {
  const Surface = as || 'div';
  return (
    <Surface
      ref={ref}
      className={clsx(
        `${CSS_PREFIX}__content`,
        spacing ? spacingClsx(`${CSS_PREFIX}__content`, spacing) : undefined,
        flexbox ? flexboxClsx(`${CSS_PREFIX}__content`, flexbox) : undefined,
        grid ? gridClsx(`${CSS_PREFIX}__content`, grid) : undefined,
        className,
      )}
      {...props}
    />
  );
}
