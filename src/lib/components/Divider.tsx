'use client';

import { clsx } from 'clsx';
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  Ref,
} from 'react';

export type DividerProps<T extends ElementType> =
  HTMLAttributes<HTMLHRElement> & {
    as?: T;
    vertical?: boolean;
    ref?: Ref<HTMLElement & HTMLHRElement>;
  };

export function Divider<T extends ElementType>({
  as,
  vertical,
  ref,
  className,
  ...props
}: DividerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof DividerProps<T>>) {
  const Surface = as || 'hr';

  return (
    <Surface
      ref={ref}
      className={clsx('material-divider', { vertical }, className)}
      {...props}
    />
  );
}
