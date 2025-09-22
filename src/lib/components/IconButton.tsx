'use client';

import { clsx } from 'clsx';

/**
 * Props for the IconButton component.
 *
 * @property {React.ReactElement} children - The icon element to be displayed inside the button.
 * @property {('standard' | 'outlined' | 'filled' | 'tonal')} [variant='standard'] - The variant of the icon button.
 * @property {boolean} [isToggleable] - If `true`, the button will have a toggle behavior.
 * @property {boolean} [isActive] - If `true` and `isToggleable` is also `true`, the button will be in an active state.
 * @property {('xs' | 'sm' | 'md' | 'lg' | 'xl')} [size='sm'] - The size of the icon button.
 * @property {('standard' | 'narrow' | 'wide')} [width] - The width of the icon button.
 * @property {React.Ref<HTMLButtonElement>} [ref] - A ref to the underlying `button` element.
 */
export type IconButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'aria-pressed'
> & {
  children: React.ReactElement;
  variant?: 'standard' | 'outlined' | 'filled' | 'tonal';
  isToggleable?: boolean;
  isActive?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  width?: 'standard' | 'narrow' | 'wide';
  ref?: React.Ref<HTMLButtonElement>;
};

const CSS_PREFIX = 'm3-icon-button';

/**
 * The `IconButton` component allows users to take actions and make choices with a single tap on an icon.
 *
 * @example
 * ```tsx
 * import { IconButton } from 'm3-ui-react';
 * import { Icon } from 'm3-ui-react/icon';
 *
 * export default function MyIconButton() {
 *   return (
 *     <IconButton>
 *       <Icon symbol="menu" />
 *     </IconButton>
 *   );
 * }
 * ```
 *
 * @param {IconButtonProps} props - The props for the `IconButton` component.
 * @returns {React.ReactElement} The rendered `IconButton` component.
 */
export const IconButton = ({
  ref,
  variant = 'standard',
  size = 'sm',
  width,
  isToggleable,
  isActive,
  className,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button
      ref={ref}
      aria-pressed={isToggleable ? (isActive ? 'true' : 'false') : undefined}
      className={clsx(
        `${CSS_PREFIX}-${variant}`,
        `size-${size}`,
        {
          'is-narrow': width === 'narrow',
          'is-wide': width === 'wide',
          'is-active': isActive,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
