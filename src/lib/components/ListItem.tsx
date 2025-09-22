'use client';

import { clsx } from 'clsx';

/**
 * Props for the ListItem component.
 *
 * @property {string} headline - The main text of the list item.
 * @property {string} [supportingText] - Additional text displayed below the headline.
 * @property {React.ReactElement} [startElement] - An element to be displayed at the start of the list item, such as an icon or avatar.
 * @property {React.ReactElement} [endElement] - An element to be displayed at the end of the list item, such as a trailing icon or a checkbox.
 * @property {boolean} [isSelected] - If `true`, the list item will be styled as selected.
 * @property {React.Ref<HTMLLIElement>} [ref] - A ref to the underlying `li` element.
 */
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

/**
 * The `ListItem` component is a single item within a list. It can contain text, icons, and other elements.
 *
 * @example
 * ```tsx
 * import { Checkbox, ListItem } from 'm3-ui-react';
 *
 * export default function MyList() {
 *   return (
 *     <ul>
 *       <ListItem
 *         headline="First item"
 *         supportingText="This is the first item in the list"
 *         startElement={<Checkbox />}
 *       />
 *       <ListItem
 *         headline="Second item"
 *         isSelected
 *       />
 *     </ul>
 *   );
 * }
 * ```
 *
 * @param {ListItemProps} props - The props for the `ListItem` component.
 * @returns {React.ReactElement} The rendered `ListItem` component.
 */
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
