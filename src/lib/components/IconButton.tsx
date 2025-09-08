'use client';

import { clsx } from 'clsx';

export type IconButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  icon: React.ReactElement;
  variant?: 'standard' | 'outlined' | 'filled' | 'tonal';
  ref?: React.Ref<HTMLButtonElement & HTMLElement>;
};

const CSS_PREFIX = 'm3-icon-button';

export const IconButton = ({
  icon,
  ref,
  variant = 'standard',
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      ref={ref}
      className={clsx(`${CSS_PREFIX}-${variant}`, className)}
      {...props}
    >
      {icon}
    </button>
  );
};
