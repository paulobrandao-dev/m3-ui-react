'use client';

import { clsx } from 'clsx';
import { ElementType } from 'react';

export type IconButtonProps<E extends React.ElementType> = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  icon: React.ReactNode;
  as?: E;
  variant?: 'standard' | 'outlined' | 'filled' | 'tonal';
  ref?: React.Ref<HTMLButtonElement & HTMLElement>;
};

const CSS_PREFIX = 'rm-icon-button';

export const IconButton = <E extends ElementType>({
  icon,
  as,
  ref,
  variant = 'standard',
  className,
  ...props
}: IconButtonProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof IconButtonProps<E>>) => {
  const Surface = as || 'button';

  return (
    <Surface
      ref={ref}
      className={clsx(
        CSS_PREFIX,
        `${CSS_PREFIX}__${variant}`,
        { [`${CSS_PREFIX}__disabled`]: props.disabled },
        className,
      )}
      {...props}
    >
      {icon}
    </Surface>
  );
};
