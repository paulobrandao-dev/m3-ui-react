'use client';

import { clsx } from 'clsx';
import { gapClsx, spacingClsx } from './commons';
import { MaterialGapProps, MaterialSpacingProps } from './types';

/**
 * Props for the CanonicalLayout component.
 *
 * @template E - The HTML element type to render.
 * @property {('list-detail' | 'supporting-pane' | 'feed')} variant - The layout variant to apply.
 * @property {MaterialSpacingProps} [spacing] - The spacing properties for the layout.
 * @property {MaterialGapProps} [gap] - The gap properties for the layout.
 * @property {boolean} [isFluid] - If `true`, the layout will span the full width of its container.
 * @property {E} [as] - The HTML element to render the layout as. Defaults to `section`.
 * @property {React.Ref<HTMLElement>} [ref] - A ref to the underlying HTML element.
 */
export type CanonicalLayoutProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    variant: 'list-detail' | 'supporting-pane' | 'feed';
    spacing?: MaterialSpacingProps;
    gap?: MaterialGapProps;
    isFluid?: boolean;
    as?: E;
    ref?: React.Ref<HTMLElement>;
  };

const CSS_PREFIX = 'm3-layout';

/**
 * The `CanonicalLayout` component provides standardized page layouts for common use cases.
 * It helps ensure consistency across different parts of an application.
 *
 * @example
 * ```tsx
 * import { CanonicalLayout } from 'm3-ui-react';
 *
 * export default function ListDetailView() {
 *   return (
 *     <CanonicalLayout variant="list-detail">
 *       <div>List Pane</div>
 *       <div>Detail Pane</div>
 *     </CanonicalLayout>
 *   );
 * }
 * ```
 *
 * @template E - The HTML element type to render.
 * @param {CanonicalLayoutProps<E>} props - The props for the `CanonicalLayout` component.
 * @returns {React.ReactElement} The rendered `CanonicalLayout` component.
 */
export function CanonicalLayout<E extends React.ElementType>({
  as,
  ref,
  variant,
  spacing,
  gap,
  isFluid,
  className,
  ...props
}: CanonicalLayoutProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof CanonicalLayoutProps<E>>) {
  const Surface = as || 'section';

  return (
    <Surface
      ref={ref}
      className={clsx(
        `${CSS_PREFIX}-${variant}`,
        { 'is-fluid': isFluid },
        spacing !== undefined ? spacingClsx(spacing) : undefined,
        gap !== undefined ? gapClsx(gap) : undefined,
        className,
      )}
      {...props}
    />
  );
}
