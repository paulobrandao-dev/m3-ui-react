'use client';

import { clsx } from 'clsx';
import { flexboxClsx, gridClsx, spacingClsx } from './commons';
import {
  MaterialFlexboxProps,
  MaterialGridProps,
  MaterialSpacingProps,
} from './types';

/**
 * Props for the Card component.
 *
 * @template E - The HTML element type to render.
 * @property {E} [as] - The HTML element to render the card as. Defaults to `div`.
 * @property {React.Ref<HTMLDivElement>} [ref] - A ref to the underlying HTML element.
 * @property {('elevated' | 'filled' | 'outlined')} [variant='elevated'] - The variant of the card.
 * @property {boolean} [stateLayer] - If `true`, a state layer will be applied to the card on hover and press.
 * @property {MaterialSpacingProps} [spacing] - The spacing properties for the card.
 * @property {MaterialFlexboxProps} [flexbox] - The flexbox properties for the card.
 * @property {MaterialGridProps} [grid] - The grid properties for the card.
 */
export type CardProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    as?: E;
    ref?: React.Ref<HTMLDivElement>;
    variant?: 'elevated' | 'filled' | 'outlined';
    stateLayer?: boolean;
    spacing?: MaterialSpacingProps;
    flexbox?: MaterialFlexboxProps;
    grid?: MaterialGridProps;
  };

const CSS_PREFIX = 'm3-card';

/**
 * The `Card` component is a versatile container for content and actions.
 * It can be used to display information in a structured and visually appealing way.
 *
 * @example
 * ```tsx
 * import { Card, CardMedia, Button } from 'm3-ui-react';
 *
 * export default function MyCard() {
 *   return (
 *     <Card
 *       variant="elevated"
 *       spacing={{ all: '1rem' }}
 *       flexbox={{ direction: 'col' }}
 *     >
 *       <CardMedia src="/path/to/image.jpg" alt="My Image" />
 *       <h2>Card Title</h2>
 *       <p>Some descriptive text about the card content.</p>
 *       <Button>Action</Button>
 *     </Card>
 *   );
 * }
 * ```
 *
 * @template E - The HTML element type to render.
 * @param {CardProps<E>} props - The props for the `Card` component.
 * @returns {React.ReactElement} The rendered `Card` component.
 */
export function Card<E extends React.ElementType>({
  as,
  ref,
  variant = 'elevated',
  stateLayer,
  spacing,
  flexbox,
  grid,
  className,
  ...props
}: CardProps<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof CardProps<E>>) {
  const Surface = as || 'div';
  return (
    <Surface
      ref={ref}
      className={clsx(
        `${CSS_PREFIX}-${variant}`,
        {
          'has-state-layer': stateLayer,
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
