'use client';

import { clsx } from 'clsx';

/**
 * Props for the NavRail component.
 *
 * @property {React.ReactNode} [header] - A header element to be displayed at the top of the navigation rail.
 * @property {React.ReactNode} [footer] - A footer element to be displayed at the bottom of the navigation rail.
 * @property {boolean} [isExpanded] - If `true`, the navigation rail will be expanded to show labels next to the icons.
 * @property {React.Ref<HTMLElement>} [ref] - A ref to the underlying `nav` element.
 */
export type NavRailProps = React.HTMLAttributes<HTMLElement> & {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isExpanded?: boolean;
  ref?: React.Ref<HTMLElement>;
};

/**
 * The `NavRail` component provides a side navigation rail for accessing primary destinations in an app.
 * It is designed for tablet and desktop screens.
 *
 * @example
 * ```tsx
 * import { NavRail, NavLink, IconButton } from 'm3-ui-react';
 * import { Icon } from 'm3-ui-react/icon';
 *
 * export default function MyNavRail() {
 *   return (
 *     <NavRail header={<IconButton><Icon symbol="menu" /></IconButton>}>
 *       <NavLink href="/" variant="navrail" icon={<Icon symbol="home" />} label="Home" />
 *       <NavLink href="/about" variant="navrail" icon={<Icon symbol="info" />} label="About" />
 *     </NavRail>
 *   );
 * }
 * ```
 *
 * @param {NavRailProps} props - The props for the `NavRail` component.
 * @returns {React.ReactElement} The rendered `NavRail` component.
 */
export function NavRail({
  header,
  footer,
  isExpanded,
  ref,
  children,
  className,
  ...props
}: NavRailProps) {
  return (
    <nav
      className={clsx('m3-navrail', { 'is-expanded': isExpanded }, className)}
      ref={ref}
      {...props}
    >
      {header && <header>{header}</header>}
      <div role="presentation">{children}</div>
      {footer && <footer>{footer}</footer>}
    </nav>
  );
}
