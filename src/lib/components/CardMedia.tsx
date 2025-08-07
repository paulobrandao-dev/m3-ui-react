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
  };

const CSS_PREFIX = 'rm-card-media';

export function CardMedia<E extends React.ElementType>({
  as,
  ref,
  alignMedia,
  fitMedia,
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
        alignMedia ? `${CSS_PREFIX}__align-${alignMedia}` : undefined,
        fitMedia ? `${CSS_PREFIX}__fit-${fitMedia}` : undefined,
        className,
      )}
      {...props}
    />
  );
}
