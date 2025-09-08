'use client';

import { clsx } from 'clsx';
import { ListItem } from './ListItem';

export type MenuProps = Omit<
  React.MenuHTMLAttributes<HTMLMenuElement>,
  'children' | 'id' | 'popover'
> & {
  id: string;
  disableCloseOnClick?: boolean;
  items: Array<{
    label: string;
    startElement?: React.ReactElement;
    endElement?: React.ReactElement;
    onClick: () => void;
    isSelected?: boolean;
  }>;
  ref?: React.Ref<HTMLMenuElement>;
};

const CSS_PREFIX = 'm3-menu';

export function Menu({
  id,
  items,
  disableCloseOnClick,
  ref,
  className,
  ...props
}: MenuProps) {
  return (
    <menu
      id={id}
      popover="auto"
      className={clsx(CSS_PREFIX, className)}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => (
        <ListItem
          key={`${id}__${index}`}
          headline={item.label}
          startElement={item.startElement}
          endElement={item.endElement}
          onClick={() => {
            const menu = document.querySelector<HTMLMenuElement>(`menu#${id}`);
            if (!disableCloseOnClick) {
              menu?.hidePopover();
            }
            item.onClick();
          }}
          isSelected={item.isSelected}
        />
      ))}
    </menu>
  );
}
