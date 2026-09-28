'use client'

import './nav-rail.scss'

/**
 * Props for the `NavRail` component.
 *
 * @template T - The HTML element type to render. Defaults to `nav`.
 */
export type NavRailProps<T extends React.ElementType = 'nav'> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the nav rail as. Defaults to `nav`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
  /** The display variant of the nav rail. Use `modal` to render with a backdrop overlay. Defaults to `standard`. */
  variant?: 'standard' | 'modal'
  /** The open/close state of the nav rail. Defaults to `collapsed`. */
  state?: 'collapsed' | 'expanded'
  /** Callback fired when the nav rail state changes, e.g. when the modal backdrop is clicked. */
  onChangeState?: (state: 'collapsed' | 'expanded') => void
}

/**
 * The `NavRail` component implements the Material Design 3 Navigation Drawer / Rail specification.
 * It supports a `standard` variant that stays permanently visible and a `modal` variant that
 * renders a backdrop and can be dismissed by clicking outside of it.
 *
 * @example
 * ```tsx
 * import {
 *   NavRail, NavRailHeader, NavRailContent, NavRailFooter,
 *   NavRailItem, NavRailItemIcon, NavRailItemLabel, NavRailSectionHeader
 * } from 'm3-ui-react/nav-rail';
 *
 * export default function Sidebar() {
 *   const [state, setState] = React.useState<'collapsed' | 'expanded'>('expanded');
 *
 *   return (
 *     <NavRail variant="modal" state={state} onChangeState={setState}>
 *       <NavRailHeader>
 *         <img src="/logo.svg" alt="Logo" />
 *       </NavRailHeader>
 *       <NavRailContent>
 *         <NavRailSectionHeader>Main</NavRailSectionHeader>
 *         <NavRailItem isActive href="/home">
 *           <NavRailItemIcon>home</NavRailItemIcon>
 *           <NavRailItemLabel>Home</NavRailItemLabel>
 *         </NavRailItem>
 *       </NavRailContent>
 *     </NavRail>
 *   );
 * }
 * ```
 *
 * @template T - The HTML element type to render. Defaults to `nav`.
 * @param {NavRailProps<T>} props - The props for the `NavRail` component.
 * @returns {React.ReactElement} The rendered `NavRail` component.
 */
export const NavRail = <T extends React.ElementType = 'nav'>({
  as,
  variant = 'standard',
  state = 'collapsed',
  onChangeState,
  ...props
}: NavRailProps<T>) => {
  const Component = as ?? 'nav'

  return (
    <>
      <Component
        data-navrail
        data-variant={variant}
        data-state={state}
        {...props}
      />
      {variant === 'modal' && (
        <div
          data-navrail-backdrop
          onClick={() => onChangeState?.('collapsed')}
        />
      )}
    </>
  )
}

/**
 * Props for the `NavRailHeader`, `NavRailContent`, and `NavRailFooter` components.
 *
 * @template T - The HTML element type to render.
 */
export type NavRailContainerProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the container as. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
}

/**
 * The `NavRailHeader` component is the top section of a `NavRail`.
 * Typically used to display a logo, app name, or a menu toggle button.
 * Defaults to a `header` element.
 *
 * @template T - The HTML element type to render. Defaults to `header`.
 * @param {NavRailContainerProps<T>} props - The props for the `NavRailHeader` component.
 * @returns {React.ReactElement} The rendered `NavRailHeader` component.
 */
export const NavRailHeader = <T extends React.ElementType = 'header'>({
  as,
  ...props
}: NavRailContainerProps<T>) => {
  const Component = as ?? 'header'

  return <Component data-navrail-header {...props} />
}

/**
 * The `NavRailContent` component is the main scrollable area of a `NavRail`.
 * Place `NavRailItem` and `NavRailSectionHeader` elements inside it.
 * Defaults to a `div` element.
 *
 * @template T - The HTML element type to render. Defaults to `div`.
 * @param {NavRailContainerProps<T>} props - The props for the `NavRailContent` component.
 * @returns {React.ReactElement} The rendered `NavRailContent` component.
 */
export const NavRailContent = <T extends React.ElementType = 'div'>({
  as,
  ...props
}: NavRailContainerProps<T>) => {
  const Component = as ?? 'div'

  return <Component data-navrail-content {...props} />
}

/**
 * The `NavRailFooter` component is the bottom section of a `NavRail`.
 * Typically used to place account controls or secondary actions.
 * Defaults to a `footer` element.
 *
 * @template T - The HTML element type to render. Defaults to `footer`.
 * @param {NavRailContainerProps<T>} props - The props for the `NavRailFooter` component.
 * @returns {React.ReactElement} The rendered `NavRailFooter` component.
 */
export const NavRailFooter = <T extends React.ElementType = 'footer'>({
  as,
  ...props
}: NavRailContainerProps<T>) => {
  const Component = as ?? 'footer'

  return <Component data-navrail-footer {...props} />
}

/**
 * Props for the `NavRailItem` component.
 *
 * @template T - The HTML element type to render. Defaults to `a`.
 */
export type NavRailItemProps<T extends React.ElementType = 'a'> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the item as. Defaults to `a`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
  /** Whether this item represents the currently active route. Sets `aria-current="true"` when active. */
  isActive?: boolean
}

/**
 * The `NavRailItem` component renders a single navigation destination inside a `NavRailContent`.
 * When `isActive` is `true`, the item receives an `aria-current="true"` attribute for accessibility
 * and applies the active visual style.
 *
 * @example
 * ```tsx
 * <NavRailItem isActive href="/dashboard">
 *   <NavRailItemIcon>dashboard</NavRailItemIcon>
 *   <NavRailItemLabel>Dashboard</NavRailItemLabel>
 * </NavRailItem>
 * ```
 *
 * @template T - The HTML element type to render. Defaults to `a`.
 * @param {NavRailItemProps<T>} props - The props for the `NavRailItem` component.
 * @returns {React.ReactElement} The rendered `NavRailItem` component.
 */
export const NavRailItem = <T extends React.ElementType = 'a'>({
  as,
  isActive,
  ...props
}: NavRailItemProps<T>) => {
  const Component = as ?? 'a'

  return (
    <Component
      data-navrail-item
      aria-current={isActive ? 'true' : undefined}
      {...props}
    />
  )
}

/**
 * Props for the `NavRailItemIcon` and `NavRailItemLabel` components.
 *
 * @template T - The HTML element type to render. Defaults to `span`.
 */
export type NavRailItemElementsProps<T extends React.ElementType = 'span'> =
  Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
    /** The HTML element to render the element as. Defaults to `span`. */
    as?: T
    /** A ref to the underlying HTML element. */
    ref?: React.Ref<HTMLElement | null>
  }

/**
 * The `NavRailItemIcon` component renders the icon slot inside a `NavRailItem`.
 * Typically receives a Material Symbol icon name or an icon component as its child.
 * Defaults to a `span` element.
 *
 * @template T - The HTML element type to render. Defaults to `span`.
 * @param {NavRailItemElementsProps<T>} props - The props for the `NavRailItemIcon` component.
 * @returns {React.ReactElement} The rendered `NavRailItemIcon` component.
 */
export const NavRailItemIcon = <T extends React.ElementType = 'span'>({
  as,
  ...props
}: NavRailItemElementsProps<T>) => {
  const Component = as ?? 'span'

  return <Component data-navrail-item-icon {...props} />
}

/**
 * The `NavRailItemLabel` component renders the text label slot inside a `NavRailItem`.
 * The label is hidden when the nav rail is in its `collapsed` state and shown when `expanded`.
 * Defaults to a `span` element.
 *
 * @template T - The HTML element type to render. Defaults to `span`.
 * @param {NavRailItemElementsProps<T>} props - The props for the `NavRailItemLabel` component.
 * @returns {React.ReactElement} The rendered `NavRailItemLabel` component.
 */
export const NavRailItemLabel = <T extends React.ElementType = 'span'>({
  as,
  ...props
}: NavRailItemElementsProps<T>) => {
  const Component = as ?? 'span'

  return <Component data-navrail-item-label {...props} />
}

/**
 * Props for the `NavRailSectionHeader` component.
 *
 * @template T - The HTML element type to render. Defaults to `div`.
 */
export type NavRailSectionHeaderProps<T extends React.ElementType = 'div'> =
  Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
    /** The HTML element to render the section header as. Defaults to `div`. */
    as?: T
    /** A ref to the underlying HTML element. */
    ref?: React.Ref<HTMLElement | null>
    /** Whether to render a top border separator above the section header. */
    border?: boolean
  }

/**
 * The `NavRailSectionHeader` component renders a labelled divider that groups
 * related `NavRailItem` elements inside a `NavRailContent`. Optionally renders
 * a top border via the `border` prop.
 *
 * @example
 * ```tsx
 * <NavRailContent>
 *   <NavRailSectionHeader border>Settings</NavRailSectionHeader>
 *   <NavRailItem href="/settings/profile">
 *     <NavRailItemIcon>person</NavRailItemIcon>
 *     <NavRailItemLabel>Profile</NavRailItemLabel>
 *   </NavRailItem>
 * </NavRailContent>
 * ```
 *
 * @template T - The HTML element type to render. Defaults to `div`.
 * @param {NavRailSectionHeaderProps<T>} props - The props for the `NavRailSectionHeader` component.
 * @returns {React.ReactElement} The rendered `NavRailSectionHeader` component.
 */
export const NavRailSectionHeader = <T extends React.ElementType = 'div'>({
  as,
  border,
  ...props
}: NavRailSectionHeaderProps<T>) => {
  const Component = as ?? 'div'

  return (
    <Component
      data-navrail-section-header
      data-border={border ? 'true' : undefined}
      {...props}
    />
  )
}
