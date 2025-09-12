'use client';

import { clsx } from 'clsx';

export type MenuProps = Omit<
  React.MenuHTMLAttributes<HTMLMenuElement>,
  'id' | 'popover'
> & {
  id: string;
  ref?: React.Ref<HTMLMenuElement>;
};

const CSS_PREFIX = 'm3-menu';

export function Menu({ id, ref, className, ...props }: MenuProps) {
  return (
    <menu
      role="menu"
      id={id}
      popover="auto"
      className={clsx(CSS_PREFIX, className)}
      ref={ref}
      {...props}
    />
  );
}
