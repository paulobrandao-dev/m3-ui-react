'use client';

import { clsx } from 'clsx';
import { flexboxClsx, gridClsx, spacingClsx } from './commons';
import {
  MaterialFlexboxProps,
  MaterialGridProps,
  MaterialSpacingProps,
} from './types';

/**
 * Props for the Content component.
 *
 * @template E - The HTML element type to render.
 * @property {E} [as] - The HTML element to render the content as. Defaults to `div`.
 * @property {MaterialSpacingProps} [spacing] - The spacing properties for the content.
 * @property {MaterialFlexboxProps} [flexbox] - The flexbox properties for the content.
 * @property {MaterialGridProps} [grid] - The grid properties for the content.
 * @property {{ horizontal?: 'auto' | 'hidden' | 'visible' | 'scroll'; vertical?: 'auto' | 'hidden' | 'visible' | 'scroll'; }} [scrollable] - The scroll behavior of the content.
 */
export type ContentProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    as?: E;
    spacing?: MaterialSpacingProps;
    flexbox?: MaterialFlexboxProps;
    grid?: MaterialGridProps;
    scrollable?: {
      horizontal?: 'auto' | 'hidden' | 'visible' | 'scroll';
      vertical?: 'auto' | 'hidden' | 'visible' | 'scroll';
    };
  };

const CSS_PREFIX = 'm3-content';

/**
 * The `Content` component is a flexible container for the main content of a screen or section.
 * It provides layout options like spacing, flexbox, and grid, as well as control over scrolling behavior.
 *
 * @example
 * ```tsx
 * import { Content } from 'm3-ui-react';
 *
 * export default function MyScreen() {
 *   return (
 *     <Content
 *       spacing={{ all: '1rem' }}
 *       scrollable={{ vertical: 'auto' }}
 *     >
 *       <h1>Page Title</h1>
 *       <p>This is the main content of the page. It will scroll vertically if it overflows.</p>
 *     </Content>
 *   );
 * }
 * ```
 *
 * @template E - The HTML element type to render.
 * @param {ContentProps<E>} props - The props for the `Content` component.
 * @returns {React.ReactElement} The rendered `Content` component.
 */
export function Content<E extends React.ElementType>({
  as,
  ref,
  spacing,
  flexbox,
  grid,
  scrollable,
  className,
  ...props
}: ContentProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof ContentProps<E>>) {
  const Surface = as || 'div';
  return (
    <Surface
      ref={ref}
      className={clsx(
        CSS_PREFIX,
        {
          [`is-scrollable-x-${scrollable?.horizontal}`]:
            scrollable?.horizontal !== undefined,
          [`is-scrollable-y-${scrollable?.vertical}`]:
            scrollable?.vertical !== undefined,
        },
        spacing ? spacingClsx(spacing) : undefined,
        flexbox ? flexboxClsx(flexbox) : undefined,
        grid ? gridClsx(grid) : undefined,
        className,
      )}
      {...props}
    />
  );
}
