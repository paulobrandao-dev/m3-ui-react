'use client';

import { clsx } from 'clsx';

/**
 * Props for the NavBar component.
 *
 * @property {boolean} [isHorizontalLinks] - If `true`, the navigation links will be displayed horizontally.
 * @property {React.Ref<HTMLElement>} [ref] - A ref to the underlying `nav` element.
 */
export type NavBarProps = React.HTMLAttributes<HTMLElement> & {
  isHorizontalLinks?: boolean;
  ref?: React.Ref<HTMLElement>;
};

/**
 * The `NavBar` component provides a container for navigation links.
 * It can be used to create a primary navigation bar for an application.
 *
 * @example
 * ```tsx
 * import { NavBar, NavLink } from 'm3-ui-react';
 * import { Icon } from 'm3-ui-react/icon';
 *
 * export default function MyNavBar() {
 *   return (
 *     <NavBar>
 *       <NavLink href="/" icon={<Icon symbol="home" />}>Home</NavLink>
 *       <NavLink href="/about" icon={<Icon symbol="info" />}>About</NavLink>
 *     </NavBar>
 *   );
 * }
 * ```
 *
 * @param {NavBarProps} props - The props for the `NavBar` component.
 * @returns {React.ReactElement} The rendered `NavBar` component.
 */
export function NavBar({
  isHorizontalLinks,
  ref,
  children,
  className,
  ...props
}: NavBarProps) {
  return (
    <nav
      className={clsx(
        'm3-navbar',
        { 'is-horizontal': isHorizontalLinks },
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </nav>
  );
}
