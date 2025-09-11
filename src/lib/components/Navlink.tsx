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
  variant: 'navrail' | 'navbar' | 'navdrawer';
  icon?: ReactNode;
  isActive?: boolean;
  isHorizontal?: boolean;
  as?: A;
  ref?: Ref<HTMLElement & HTMLAnchorElement>;
};

const CSS_PREFIX = 'm3-navlink';

export function Navlink<T extends ElementType>({
  as,
  variant,
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
        {
          'at-navbar': variant === 'navbar',
          'at-navdrawer': variant === 'navdrawer',
          'at-navrail': variant === 'navrail',
          'is-horizontal': isHorizontal,
        },
        className,
      )}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {isHorizontal && icon}
      {!isHorizontal && icon !== undefined && (
        <span className={clsx('link-indicator', { 'is-active': isActive })}>
          {icon}
        </span>
      )}
      <span className={`link-label${isHorizontal ? '-horizontal' : ''}`}>
        {label}
      </span>
    </Surface>
  );
}
