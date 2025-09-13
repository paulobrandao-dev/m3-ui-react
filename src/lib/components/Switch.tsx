'use client';

import { clsx } from 'clsx';

export type SwitchProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  icon?: React.ReactElement;
  ref?: React.Ref<HTMLDivElement>;
};

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
      onClick={() => onChange && onChange(!checked)}
      ref={ref}
      {...props}
    >
      <span className="thumb">{checked && icon}</span>
    </div>
  );
};
