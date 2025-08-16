'use client';

import { clsx } from 'clsx';

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

const CSS_PREFIX = 'rm-card-media';

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
          [`${CSS_PREFIX}__aspect-16x9`]: aspectRatio === '16:9',
          [`${CSS_PREFIX}__aspect-1x1`]: aspectRatio === '1:1',
          [`${CSS_PREFIX}__aspect-4x3`]: aspectRatio === '4:3',
        },
        alignMedia ? `${CSS_PREFIX}__align-${alignMedia}` : undefined,
        fitMedia ? `${CSS_PREFIX}__fit-${fitMedia}` : undefined,
        className,
      )}
      {...props}
    />
  );
}
