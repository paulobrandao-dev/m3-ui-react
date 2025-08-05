'use client';

import { clsx } from 'clsx';
import {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

export type ButtonProps<T extends ElementType> = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  label: string;
  as?: T;
  ref?: Ref<HTMLButtonElement>;
  icon?: ReactNode;
  variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'elevated';
};

const CSS_PREFIX = 'rm-button';

export function Button<T extends ElementType>({
  as,
  ref,
  icon,
  variant = 'text',
  label,
  className,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
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
      <span className={`${CSS_PREFIX}__label`}>{label}</span>
    </Surface>
  );
}
