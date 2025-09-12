'use client';

import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

export type M3ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  children: string;
  ref?: Ref<HTMLButtonElement>;
  icon?: ReactNode;
  variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'elevated';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const CSS_PREFIX = 'm3-button';

export function Button({
  ref,
  icon,
  variant = 'text',
  size = 'sm',
  children,
  className,
  ...props
}: M3ButtonProps) {
  return (
    <button
      ref={ref}
      className={clsx(`${CSS_PREFIX}-${variant}`, `size-${size}`, className)}
      {...props}
    >
      {icon}
      <span className="label">{children}</span>
    </button>
  );
}
