'use client';

import { clsx } from 'clsx';

/**
 * Props for the Switch component.
 *
 * @property {boolean} [checked] - If `true`, the switch is in the "on" state.
 * @property {(checked: boolean) => void} [onChange] - Callback function invoked when the switch state changes.
 * @property {boolean} [disabled] - If `true`, the switch is disabled and cannot be interacted with.
 * @property {React.ReactElement} [icon] - An icon to be displayed on the thumb when the switch is checked.
 * @property {React.Ref<HTMLDivElement>} [ref] - A ref to the underlying `div` element.
 */
export type SwitchProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children' | 'onChange'
> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  icon?: React.ReactElement;
  ref?: React.Ref<HTMLDivElement>;
};

/**
 * The `Switch` component toggles the state of a single setting on or off.
 *
 * @example
 * ```tsx
 * import { useState } from 'react';
 * import { Switch } from 'm3-ui-react';
 * import { Icon } from 'm3-ui-react/icon';
 *
 * export default function MySwitch() {
 *   const [isChecked, setIsChecked] = useState(false);
 *
 *   return (
 *     <Switch
 *       checked={isChecked}
 *       onChange={setIsChecked}
 *       icon={<Icon symbol="check" />}
 *     />
 *   );
 * }
 * ```
 *
 * @param {SwitchProps} props - The props for the `Switch` component.
 * @returns {React.ReactElement} The rendered `Switch` component.
 */
export const Switch = ({
  checked,
  icon,
  onChange,
  disabled,
  className,
  ref,
  ...props
}: SwitchProps) => {
  return (
    <div
      role="switch"
      aria-checked={checked ? 'true' : 'false'}
      className={clsx('m3-switch', { 'is-disabled': disabled }, className)}
      onClick={() => onChange && !disabled && onChange(!checked)}
      ref={ref}
      {...props}
    >
      <span className="thumb">{checked && icon}</span>
    </div>
  );
};
