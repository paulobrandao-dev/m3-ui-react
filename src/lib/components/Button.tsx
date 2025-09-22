'use client';

import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

/**
 * Props for the Button component.
 *
 * @property {string} children - The text content of the button.
 * @property {Ref<HTMLButtonElement>} [ref] - A ref to the underlying `button` element.
 * @property {ReactNode} [icon] - An icon to be displayed before the text.
 * @property {('text' | 'outlined' | 'tonal' | 'filled' | 'elevated')} [variant='text'] - The variant of the button.
 * @property {('xs' | 'sm' | 'md' | 'lg' | 'xl')} [size='sm'] - The size of the button.
 */
export type M3ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  children: string;
  ref?: Ref<HTMLButtonElement>;
  icon?: ReactNode;
  variant?: 'text' | 'outlined' | 'tonal' | 'filled' | 'elevated';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const CSS_PREFIX = 'm3-button';

/**
 * The `Button` component allows users to take actions and make choices with a single tap.
 *
 * @example
 * ```tsx
 * import { Button } from 'm3-ui-react';
 * import { Icon } from 'm3-ui-react/icon';
 *
 * export default function MyButton() {
 *   return (
 *     <Button
 *       variant="filled"
 *       icon={<Icon symbol="add" />}
 *     >
 *       Add to cart
 *     </Button>
 *   );
 * }
 * ```
 *
 * @param {M3ButtonProps} props - The props for the `Button` component.
 * @returns {React.ReactElement} The rendered `Button` component.
 */
export function Button({
  ref,
  icon,
  variant = 'text',
  size = 'sm',
  children,
  className,
  ...props
}: M3ButtonProps) {
  return (
    <button
      ref={ref}
      className={clsx(`${CSS_PREFIX}-${variant}`, `size-${size}`, className)}
      {...props}
    >
      {icon}
      <span className="label">{children}</span>
    </button>
  );
}
