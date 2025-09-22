'use client';

import { clsx } from 'clsx';

export type IconButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'aria-pressed'
> & {
  children: React.ReactElement;
  variant?: 'standard' | 'outlined' | 'filled' | 'tonal';
  isToggleable?: boolean;
  isActive?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  width?: 'standard' | 'narrow' | 'wide';
  ref?: React.Ref<HTMLButtonElement>;
};

const CSS_PREFIX = 'm3-icon-button';

export const IconButton = ({
  ref,
  variant = 'standard',
  size = 'sm',
  width,
  isToggleable,
  isActive,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      ref={ref}
      aria-pressed={isToggleable ? (isActive ? 'true' : 'false') : undefined}
      className={clsx(
        `${CSS_PREFIX}-${variant}`,
        `size-${size}`,
        {
          'is-narrow': width === 'narrow',
          'is-wide': width === 'wide',
        },
        className,
      )}
      {...props}
    />
  );
};
