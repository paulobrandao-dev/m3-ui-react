'use client';

import { clsx } from 'clsx';
import { ListItem } from './ListItem';

export type MenuProps = Omit<
  React.MenuHTMLAttributes<HTMLMenuElement>,
  'children' | 'id' | 'popover'
> & {
  id: string;
  items: Array<{
    label: string;
    startElement?: React.ReactElement;
    endElement?: React.ReactElement;
    onClick: () => void;
    isSelected?: boolean;
  }>;
  ref?: React.Ref<HTMLMenuElement>;
};

const CSS_PREFIX = 'rm-menu';

export function Menu({ id, items, ref, className, ...props }: MenuProps) {
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
          as="li"
          key={`${id}__${index}`}
          headline={item.label}
          startElement={item.startElement}
          endElement={item.endElement}
          onClick={() => {
            const menu = document.querySelector<HTMLMenuElement>(`menu#${id}`);
            menu?.hidePopover();
            item.onClick();
          }}
          isSelected={item.isSelected}
        />
      ))}
    </menu>
  );
}
