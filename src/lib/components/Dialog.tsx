'use client';

import { clsx } from 'clsx';

export type DialogProps = Omit<
  React.HTMLAttributes<HTMLDialogElement>,
  'id'
> & {
  id: string;
  ref?: React.Ref<HTMLDialogElement>;
  fullscreenOnCompact?: boolean;
};

const CSS_PREFIX = 'm3-dialog';

export function Dialog({
  id,
  ref,
  fullscreenOnCompact,
  className,
  children,
  ...props
}: DialogProps) {
  return (
    <dialog
      ref={ref}
      id={id}
      className={clsx(
        CSS_PREFIX,
        { 'is-fullscreen-on-compact': fullscreenOnCompact },
        className,
      )}
      {...props}
    >
      <div role="presentation">{children}</div>
    </dialog>
  );
}
