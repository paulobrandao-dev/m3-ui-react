'use client';

import { clsx } from 'clsx';

export type ListItemProps<E extends React.ElementType> = Omit<
  React.HTMLAttributes<HTMLElement>,
  'children'
> & {
  headline: string;
  supportingText?: string;
  startElement?: React.ReactElement;
  endElement?: React.ReactElement;
  as?: E;
  ref?: React.Ref<HTMLDivElement>;
};

const CSS_PREFIX = 'rm-list-item';

export function ListItem<E extends React.ElementType>({
  as,
  ref,
  startElement,
  headline,
  supportingText,
  endElement,
  className,
  ...props
}: ListItemProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof ListItemProps<E>>) {
  const Surface = as || 'div';

  return (
    <Surface ref={ref} className={clsx(CSS_PREFIX, className)} {...props}>
      {startElement}
      <span className={`${CSS_PREFIX}__text`}>
        <span className={`${CSS_PREFIX}__text-headline`}>{headline}</span>
        {supportingText && (
          <span className={`${CSS_PREFIX}__text-supporting`}>
            {supportingText}
          </span>
        )}
      </span>
      {endElement}
    </Surface>
  );
}
