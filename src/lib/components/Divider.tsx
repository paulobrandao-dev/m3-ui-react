'use client';

import { clsx } from 'clsx';

export type DividerProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLHRElement> & {
    as?: E;
    isVertical?: boolean;
    ref?: React.Ref<HTMLElement & HTMLHRElement>;
  };

const CSS_PREFIX = 'm3-divider';

export function Divider<E extends React.ElementType>({
  as,
  isVertical,
  ref,
  className,
  ...props
}: DividerProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof DividerProps<E>>) {
  const Surface = as || 'hr';

  return (
    <Surface
      ref={ref}
      className={clsx(CSS_PREFIX, { 'is-vertical': isVertical }, className)}
      {...props}
    />
  );
}
