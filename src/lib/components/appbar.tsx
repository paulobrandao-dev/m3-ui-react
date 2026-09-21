'use client'

import './appbar.scss'

/**
 * Props for the `Appbar` component.
 *
 * @template T - The HTML element type to render.
 */
export type AppbarProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the appbar as. Defaults to `header`. */
  as?: T
  /** Whether the page has been scrolled, used to apply an elevated visual state. */
  isScrolled?: boolean
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
}

/**
 * The `Appbar` component is the top-level container for the application's top app bar.
 * It follows the Material Design 3 Top App Bar specification and adjusts its visual style
 * based on scroll position via the `isScrolled` prop.
 *
 * @example
 * ```tsx
 * import { Appbar, AppbarRow, AppbarContent, AppbarHeading, AppbarTitle } from 'm3-ui-react/appbar';
 *
 * export default function MyPage() {
 *   return (
 *     <Appbar isScrolled={scrolled}>
 *       <AppbarRow>
 *         <AppbarContent variant="start">
 *           <Icon symbol="menu" />
 *         </AppbarContent>
 *         <AppbarHeading>
 *           <AppbarTitle>Page Title</AppbarTitle>
 *         </AppbarHeading>
 *       </AppbarRow>
 *     </Appbar>
 *   );
 * }
 * ```
 *
 * @template T - The HTML element type to render.
 * @param {AppbarProps<T>} props - The props for the `Appbar` component.
 * @returns {React.ReactElement} The rendered `Appbar` component.
 */
export const Appbar = <T extends React.ElementType>({
  as,
  isScrolled,
  ...props
}: AppbarProps<T>) => {
  const Component = as ?? 'header'

  return <Component data-appbar data-scrolled={isScrolled} {...props} />
}

/**
 * Props for the `AppbarRow` component.
 *
 * @template T - The HTML element type to render.
 */
export type AppbarRowProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the row as. Defaults to `div`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
}

/**
 * The `AppbarRow` component is a horizontal layout container inside an `Appbar`.
 * An appbar can have one or two rows: the first holds navigation/actions,
 * and the optional second holds a heading.
 *
 * @template T - The HTML element type to render.
 * @param {AppbarRowProps<T>} props - The props for the `AppbarRow` component.
 * @returns {React.ReactElement} The rendered `AppbarRow` component.
 */
export const AppbarRow = <T extends React.ElementType>({
  as,
  ...props
}: AppbarRowProps<T>) => {
  const Component = as ?? 'div'

  return <Component data-appbar-row role='presentation' {...props} />
}

/**
 * Props for the `AppbarContent` component.
 *
 * @template T - The HTML element type to render.
 */
export type AppbarContentProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The horizontal position slot within the row. */
  variant: 'start' | 'end' | 'center'
  /** The HTML element to render the content container as. Defaults to `div`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
}

/**
 * The `AppbarContent` component is a slot container inside an `AppbarRow`.
 * Use it to position icons, buttons, or other actions at the `start`, `center`,
 * or `end` of the row.
 *
 * @example
 * ```tsx
 * <AppbarRow>
 *   <AppbarContent variant="start">
 *     <Icon symbol="arrow_back" />
 *   </AppbarContent>
 *   <AppbarContent variant="end">
 *     <Icon symbol="more_vert" />
 *   </AppbarContent>
 * </AppbarRow>
 * ```
 *
 * @template T - The HTML element type to render.
 * @param {AppbarContentProps<T>} props - The props for the `AppbarContent` component.
 * @returns {React.ReactElement} The rendered `AppbarContent` component.
 */
export const AppbarContent = <T extends React.ElementType>({
  as,
  variant,
  ...props
}: AppbarContentProps<T>) => {
  const Component = as ?? 'div'

  return (
    <Component
      data-appbar-content
      data-variant={variant}
      role='presentation'
      {...props}
    />
  )
}

/**
 * Props for the `AppbarHeading` component.
 *
 * @template T - The HTML element type to render.
 */
export type AppbarHeadingProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** Centers the heading text horizontally. */
  alignCenter?: boolean
  /** The visual size variant of the heading area. Defaults to `small`. */
  variant?: 'small' | 'medium' | 'large'
  /** The HTML element to render the heading group as. Defaults to `hgroup`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
}

/**
 * The `AppbarHeading` component wraps the title and optional subtitle of an appbar.
 * It is typically placed inside the second `AppbarRow`. Use `variant` to control
 * how prominent the heading appears.
 *
 * @template T - The HTML element type to render.
 * @param {AppbarHeadingProps<T>} props - The props for the `AppbarHeading` component.
 * @returns {React.ReactElement} The rendered `AppbarHeading` component.
 */
export const AppbarHeading = <T extends React.ElementType>({
  as,
  alignCenter,
  variant = 'small',
  ...props
}: AppbarHeadingProps<T>) => {
  const Component = as ?? 'hgroup'

  return (
    <Component
      data-appbar-heading
      data-align-center={alignCenter}
      data-variant={variant}
      role='presentation'
      {...props}
    />
  )
}

/**
 * Props for the `AppbarTitle` component.
 *
 * @template T - The HTML element type to render.
 */
export type AppbarTitleProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the title as. Defaults to `h1`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
}

/**
 * The `AppbarTitle` component renders the main title text inside an `AppbarHeading`.
 * It defaults to an `h1` element for correct semantic heading hierarchy.
 *
 * @template T - The HTML element type to render.
 * @param {AppbarTitleProps<T>} props - The props for the `AppbarTitle` component.
 * @returns {React.ReactElement} The rendered `AppbarTitle` component.
 */
export const AppbarTitle = <T extends React.ElementType>({
  as,
  ...props
}: AppbarTitleProps<T>) => {
  const Component = as ?? 'h1'

  return <Component data-appbar-title {...props} />
}

/**
 * Props for the `AppbarSubtitle` component.
 *
 * @template T - The HTML element type to render.
 */
export type AppbarSubtitleProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the subtitle as. Defaults to `p`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
}

/**
 * The `AppbarSubtitle` component renders an optional secondary line of text
 * inside an `AppbarHeading`, complementing the `AppbarTitle`.
 *
 * @template T - The HTML element type to render.
 * @param {AppbarSubtitleProps<T>} props - The props for the `AppbarSubtitle` component.
 * @returns {React.ReactElement} The rendered `AppbarSubtitle` component.
 */
export const AppbarSubtitle = <T extends React.ElementType>({
  as,
  ...props
}: AppbarSubtitleProps<T>) => {
  const Component = as ?? 'p'

  return <Component data-appbar-subtitle {...props} />
}
