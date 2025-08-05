'use client';

import { clsx } from 'clsx';
import {
  AnchorHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

export type NavlinkProps<A extends ElementType> = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'aria-current'
> & {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  isHorizontal?: boolean;
  as?: A;
  ref?: Ref<HTMLElement & HTMLAnchorElement>;
};

const CSS_PREFIX = 'material-navlink';

export function Navlink<T extends ElementType>({
  as,
  ref,
  label,
  icon,
  isActive,
  isHorizontal,
  className,
  ...props
}: NavlinkProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavlinkProps<T>>) {
  const Surface = as || 'a';
  return (
    <Surface
      ref={ref}
      className={clsx(
        CSS_PREFIX,
        isHorizontal ? `${CSS_PREFIX}__horizontal` : undefined,
        className,
      )}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {isHorizontal && icon}
      {!isHorizontal && icon !== undefined && (
        <span
          className={clsx(
            `${CSS_PREFIX}__indicator`,
            isActive ? `${CSS_PREFIX}__indicator-active` : undefined,
          )}
        >
          {icon}
        </span>
      )}
      <span
        className={`${CSS_PREFIX}__label${isHorizontal ? '-horizontal' : ''}`}
      >
        {label}
      </span>
    </Surface>
  );
}
