'use client'

import './content.scss'

/**
 * Props for the `Content` component.
 *
 * @template T - The HTML element type to render. Defaults to `div`.
 */
export type ContentProps<T extends React.ElementType = 'div'> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the content container as. Defaults to `div`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
  /**
   * The layout variant of the content container.
   * - `grid`: Responsive CSS grid that adapts columns from 1 (mobile) to 4 (desktop).
   * - `stack`: Vertical flex column.
   * - `panes`: Horizontal flex row, intended to be used with `ContentPane` children.
   * Defaults to `panes`.
   */
  variant?: 'grid' | 'stack' | 'panes'
  /** Uniform padding applied to all sides, using the design token spacing scale. */
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Horizontal padding (`padding-inline`), using the design token spacing scale. */
  spacingX?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Vertical padding (`padding-block`), using the design token spacing scale. */
  spacingY?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Uniform gap between children, using the design token spacing scale. */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Row gap between children, using the design token spacing scale. */
  gapX?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Column gap between children, using the design token spacing scale. */
  gapY?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** When `true`, stretches the container to fill its parent's full width. */
  fullwidth?: boolean
}

/**
 * The `Content` component is a versatile layout container that supports three
 * layout variants: a responsive `grid`, a vertical `stack`, and a side-by-side
 * `panes` layout. It also exposes spacing and gap props that map to the design
 * token scale for consistent padding and gutters.
 *
 * @example
 * ```tsx
 * import { Content, ContentPane } from 'm3-ui-react/content';
 *
 * // Panes layout (default)
 * <Content variant="panes" gap="md">
 *   <ContentPane variant="fixed">Sidebar</ContentPane>
 *   <ContentPane>Main content</ContentPane>
 * </Content>
 *
 * // Responsive grid
 * import { Content, ContentGridItem } from 'm3-ui-react/content';
 *
 * <Content variant="grid" gap="sm">
 *   <ContentGridItem columns={2}>Wide card</ContentGridItem>
 *   <ContentGridItem>Regular card</ContentGridItem>
 * </Content>
 * ```
 *
 * @template T - The HTML element type to render. Defaults to `div`.
 * @param {ContentProps<T>} props - The props for the `Content` component.
 * @returns {React.ReactElement} The rendered `Content` component.
 */
export const Content = <T extends React.ElementType = 'div'>({
  as,
  variant = 'panes',
  spacing,
  spacingX,
  spacingY,
  gap,
  gapX,
  gapY,
  fullwidth,
  ...props
}: ContentProps<T>) => {
  const Component = as ?? 'div'

  return (
    <Component
      data-content
      data-variant={variant}
      data-spacing={spacing}
      data-spacing-x={spacingX}
      data-spacing-y={spacingY}
      data-gap={gap}
      data-gap-x={gapX}
      data-gap-y={gapY}
      data-fullwidth={fullwidth}
      {...props}
    />
  )
}

/**
 * Props for the `ContentGridItem` component.
 *
 * @template T - The HTML element type to render. Defaults to `div`.
 */
export type ContentGridItemProps<T extends React.ElementType = 'div'> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the grid item as. Defaults to `div`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
  /**
   * The number of grid columns this item should span. Responsive: on smaller
   * viewports the span is automatically reduced or collapsed to a single column.
   * Defaults to `1`.
   */
  columns?: 1 | 2 | 3 | 4
  /**
   * The number of grid rows this item should span. Collapses to a single row
   * on mobile viewports. Defaults to `1`.
   */
  rows?: 1 | 2 | 3 | 4
}

/**
 * The `ContentGridItem` component renders a child cell inside a `Content` with
 * `variant="grid"`. Use `columns` and `rows` to make a cell span multiple tracks
 * in the responsive grid. Spans are automatically clamped on smaller viewports.
 *
 * @example
 * ```tsx
 * <Content variant="grid" gap="sm">
 *   <ContentGridItem columns={2} rows={2}>Featured</ContentGridItem>
 *   <ContentGridItem>Card A</ContentGridItem>
 *   <ContentGridItem>Card B</ContentGridItem>
 * </Content>
 * ```
 *
 * @template T - The HTML element type to render. Defaults to `div`.
 * @param {ContentGridItemProps<T>} props - The props for the `ContentGridItem` component.
 * @returns {React.ReactElement} The rendered `ContentGridItem` component.
 */
export const ContentGridItem = <T extends React.ElementType = 'div'>({
  as,
  columns = 1,
  rows = 1,
  ...props
}: ContentGridItemProps<T>) => {
  const Component = as ?? 'div'

  return (
    <Component
      data-content-grid-item
      data-columns={columns}
      data-rows={rows}
      {...props}
    />
  )
}

/**
 * Props for the `ContentPane` component.
 *
 * @template T - The HTML element type to render. Defaults to `div`.
 */
export type ContentPaneProps<T extends React.ElementType = 'div'> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  /** The HTML element to render the pane as. Defaults to `div`. */
  as?: T
  /** A ref to the underlying HTML element. */
  ref?: React.Ref<HTMLElement | null>
  /**
   * The sizing behaviour of the pane inside a `Content` with `variant="panes"`.
   * - `flexible`: Grows to fill available space (`flex: 1`).
   * - `fixed`: Constrained between `22.5rem` and `25.75rem` — ideal for sidebars.
   * Defaults to `flexible`.
   */
  variant?: 'fixed' | 'flexible'
}

/**
 * The `ContentPane` component renders a horizontal pane inside a `Content` with
 * `variant="panes"`. Use `variant="fixed"` for sidebars that should maintain a
 * constrained width, and `variant="flexible"` (the default) for the main content
 * area that should grow to fill the remaining space.
 *
 * @example
 * ```tsx
 * <Content variant="panes">
 *   <ContentPane variant="fixed">
 *     <NavRail />
 *   </ContentPane>
 *   <ContentPane>
 *     <main>Page content</main>
 *   </ContentPane>
 * </Content>
 * ```
 *
 * @template T - The HTML element type to render. Defaults to `div`.
 * @param {ContentPaneProps<T>} props - The props for the `ContentPane` component.
 * @returns {React.ReactElement} The rendered `ContentPane` component.
 */
export const ContentPane = <T extends React.ElementType = 'div'>({
  as,
  variant = 'flexible',
  ...props
}: ContentPaneProps<T>) => {
  const Component = as ?? 'div'

  return <Component data-content-pane data-variant={variant} {...props} />
}
