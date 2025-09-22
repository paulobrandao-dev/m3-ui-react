'use client';

import { clsx } from 'clsx';

/**
 * Props for the Menu component.
 *
 * @property {string} id - A unique identifier for the menu.
 * @property {React.Ref<HTMLMenuElement>} [ref] - A ref to the underlying `menu` element.
 */
export type MenuProps = Omit<
  React.MenuHTMLAttributes<HTMLMenuElement>,
  'id' | 'popover'
> & {
  id: string;
  ref?: React.Ref<HTMLMenuElement>;
};

const CSS_PREFIX = 'm3-menu';

/**
 * The `Menu` component displays a list of choices on a temporary surface.
 * It uses the native `menu` element with the `popover` attribute.
 *
 * To control the menu, you can use the `usePopoverControl` hook, which simplifies
 * showing and hiding the menu.
 *
 * @example
 * ```tsx
 * import { Menu, ListItem, Button } from 'm3-ui-react';
 * import { usePopoverControl } from 'm3-ui-react/hooks';
 *
 * export default function MyMenu() {
 *   const popoverControl = usePopoverControl('my-menu');
 *
 *   return (
 *     <>
 *       <Button
 *         popoverTarget="my-menu"
 *         onClick={() => popoverControl.showPopover()}
 *       >
 *         Open Menu
 *       </Button>
 *       <Menu id="my-menu">
 *         <ListItem headline="First item" />
 *         <ListItem headline="Second item" />
 *       </Menu>
 *     </>
 *   );
 * }
 * ```
 *
 * @param {MenuProps} props - The props for the `Menu` component.
 * @returns {React.ReactElement} The rendered `Menu` component.
 */
export function Menu({ id, ref, className, ...props }: MenuProps) {
  return (
    <menu
      role="menu"
      id={id}
      popover="auto"
      className={clsx(CSS_PREFIX, className)}
      ref={ref}
      {...props}
    />
  );
}
