'use client';

import { clsx } from 'clsx';

/**
 * Props for the CardMedia component.
 *
 * @template E - The HTML element type to render.
 * @property {E} [as] - The HTML element to render the media container as. Defaults to `div`.
 * @property {React.Ref<HTMLDivElement>} [ref] - A ref to the underlying HTML element.
 * @property {'left-top' | 'left-center' | 'left-bottom' | 'right-top' | 'right-center' | 'right-bottom' | 'center'} [alignMedia] - The alignment of the media within the container.
 * @property {'contain' | 'cover' | 'fill' | 'none'} [fitMedia] - How the media should be resized to fit its container.
 * @property {'16:9' | '1:1' | '4:3'} [aspectRatio] - The aspect ratio of the media container.
 */
export type CardMediaProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    as?: E;
    ref?: React.Ref<HTMLDivElement>;
    alignMedia?:
      | 'left-top'
      | 'left-center'
      | 'left-bottom'
      | 'right-top'
      | 'right-center'
      | 'right-bottom'
      | 'center';
    fitMedia?: 'contain' | 'cover' | 'fill' | 'none';
    aspectRatio?: '16:9' | '1:1' | '4:3';
  };

const CSS_PREFIX = 'm3-card-media';

/**
 * The `CardMedia` component is used to display media, such as images or videos, within a `Card`.
 * It provides options for controlling the aspect ratio, alignment, and fit of the media.
 *
 * @example
 * ```tsx
 * import { Card, CardMedia } from 'm3-ui-react';
 *
 * export default function MediaCard() {
 *   return (
 *     <Card>
 *       <CardMedia
 *         as="img"
 *         src="/path/to/image.jpg"
 *         alt="A beautiful landscape"
 *         aspectRatio="16:9"
 *         fitMedia="cover"
 *       />
 *     </Card>
 *   );
 * }
 * ```
 *
 * @template E - The HTML element type to render.
 * @param {CardMediaProps<E>} props - The props for the `CardMedia` component.
 * @returns {React.ReactElement} The rendered `CardMedia` component.
 */
export function CardMedia<E extends React.ElementType>({
  as,
  ref,
  alignMedia,
  fitMedia,
  aspectRatio,
  className,
  ...props
}: CardMediaProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof CardMediaProps<E>>) {
  const Surface = as || 'div';

  return (
    <Surface
      ref={ref}
      className={clsx(
        CSS_PREFIX,
        {
          'has-aspect-16x9': aspectRatio === '16:9',
          'has-aspect-1x1': aspectRatio === '1:1',
          'has-aspect-4x3': aspectRatio === '4:3',
        },
        alignMedia ? `is-align-${alignMedia}` : undefined,
        fitMedia ? `is-fit-${fitMedia}` : undefined,
        className,
      )}
      {...props}
    />
  );
}
