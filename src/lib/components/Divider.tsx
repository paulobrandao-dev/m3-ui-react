'use client';

import { clsx } from 'clsx';

/**
 * Props for the Divider component.
 *
 * @property {boolean} [isVertical] - If `true`, the divider will be vertical.
 * @property {React.Ref<HTMLElement & HTMLHRElement>} [ref] - A ref to the underlying `hr` element.
 */
export type DividerProps = React.HTMLAttributes<HTMLHRElement> & {
  isVertical?: boolean;
  ref?: React.Ref<HTMLElement & HTMLHRElement>;
};

const CSS_PREFIX = 'm3-divider';

/**
 * The `Divider` component is a thin line that groups content in lists and layouts.
 *
 * @example
 * ```tsx
 * import { Divider } from 'm3-ui-react';
 *
 * export default function MyList() {
 *   return (
 *     <div>
 *       <span>Item 1</span>
 *       <Divider />
 *       <span>Item 2</span>
 *     </div>
 *   );
 * }
 * ```
 *
 * @param {DividerProps} props - The props for the `Divider` component.
 * @returns {React.ReactElement} The rendered `Divider` component.
 */
export function Divider({
  isVertical,
  ref,
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      ref={ref}
      className={clsx(CSS_PREFIX, { 'is-vertical': isVertical }, className)}
      {...props}
    />
  );
}
