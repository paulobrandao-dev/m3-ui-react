'use client';

import { clsx } from 'clsx';

export type ListItemProps = Omit<
  React.LiHTMLAttributes<HTMLLIElement>,
  'children'
> & {
  headline: string;
  supportingText?: string;
  startElement?: React.ReactElement;
  endElement?: React.ReactElement;
  isSelected?: boolean;
  ref?: React.Ref<HTMLLIElement>;
};

const CSS_PREFIX = 'm3-list-item';

export function ListItem({
  ref,
  startElement,
  headline,
  supportingText,
  endElement,
  isSelected,
  className,
  ...props
}: ListItemProps) {
  return (
    <li
      ref={ref}
      className={clsx(CSS_PREFIX, { 'is-selected': isSelected }, className)}
      {...props}
    >
      {startElement}
      <span className="item-text">
        <span className="item-text-headline">{headline}</span>
        {supportingText && (
          <span className="item-text-supporting">{supportingText}</span>
        )}
      </span>
      {endElement}
    </li>
  );
}
