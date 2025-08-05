'use client';

import { clsx } from 'clsx';

export type DividerProps<T extends React.ElementType> =
  React.HTMLAttributes<HTMLHRElement> & {
    as?: T;
    vertical?: boolean;
    ref?: React.Ref<HTMLElement & HTMLHRElement>;
  };

const CSS_PREFIX = 'rm-divider';

export function Divider<T extends React.ElementType>({
  as,
  vertical,
  ref,
  className,
  ...props
}: DividerProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof DividerProps<T>>) {
  const Surface = as || 'hr';

  return (
    <Surface
      ref={ref}
      className={clsx(
        CSS_PREFIX,
        { [`${CSS_PREFIX}__vertical`]: vertical },
        className,
      )}
      {...props}
    />
  );
}
