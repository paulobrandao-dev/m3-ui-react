'use client';

import { clsx } from 'clsx';
import {
  AnchorHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref,
} from 'react';

/**
 * Props for the NavLink component.
 *
 * @template A - The HTML element type to render.
 * @property {string} label - The text label for the navigation link.
 * @property {('navrail' | 'navbar')} variant - The context in which the link is used, either in a `NavRail` or `NavBar`.
 * @property {ReactNode} [icon] - An icon to be displayed with the link.
 * @property {boolean} [isActive] - If `true`, the link will be styled as the current page.
 * @property {boolean} [isHorizontal] - If `true`, the link will be displayed in a horizontal layout.
 * @property {A} [as] - The HTML element to render the link as. Defaults to `a`.
 * @property {Ref<HTMLElement & HTMLAnchorElement>} [ref] - A ref to the underlying HTML element.
 */
export type NavLinkProps<A extends ElementType> = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'aria-current'
> & {
  label: string;
  variant: 'navrail' | 'navbar';
  icon?: ReactNode;
  isActive?: boolean;
  isHorizontal?: boolean;
  as?: A;
  ref?: Ref<HTMLElement & HTMLAnchorElement>;
};

const CSS_PREFIX = 'm3-navlink';

/**
 * The `NavLink` component is a styled link intended for use within `NavBar` or `NavRail` components.
 * It provides consistent styling for navigation items, including support for icons and an active state.
 *
 * @example
 * ```tsx
 * import { NavLink } from 'm3-ui-react';
 * import { Icon } from 'm3-ui-react/icon';
 *
 * export default function MyNavLink() {
 *   return (
 *     <NavLink
 *       href="/"
 *       variant="navbar"
 *       icon={<Icon symbol="home" />}
 *       label="Home"
 *       isActive
 *     />
 *   );
 * }
 * ```
 *
 * @template T - The HTML element type to render.
 * @param {NavLinkProps<T>} props - The props for the `NavLink` component.
 * @returns {React.ReactElement} The rendered `NavLink` component.
 */
export function NavLink<T extends ElementType>({
  as,
  variant,
  ref,
  label,
  icon,
  isActive,
  isHorizontal,
  className,
  ...props
}: NavLinkProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavLinkProps<T>>) {
  const Surface = as || 'a';
  return (
    <Surface
      ref={ref}
      className={clsx(
        CSS_PREFIX,
        {
          'at-navbar': variant === 'navbar',
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
