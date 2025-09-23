'use client';

import { clsx } from 'clsx';

/**
 * Props for the Dialog component.
 *
 * @property {string} id - A unique identifier for the dialog.
 * @property {React.Ref<HTMLDialogElement>} [ref] - A ref to the underlying `dialog` element.
 * @property {boolean} [fullscreenOnCompact] - If `true`, the dialog will be displayed in fullscreen on compact screens.
 */
export type DialogProps = Omit<
  React.HTMLAttributes<HTMLDialogElement>,
  'id'
> & {
  id: string;
  ref?: React.Ref<HTMLDialogElement>;
  fullscreenOnCompact?: boolean;
};

const CSS_PREFIX = 'm3-dialog';

/**
 * The `Dialog` component informs users about a task and can contain critical information,
 * require decisions, or involve multiple tasks. It uses the native `dialog` element.
 *
 * To control the dialog, you can use the `useDialogControl` hook.
 *
 * @example
 * ```tsx
 * import { Dialog, Button, useDialogControl } from 'm3-ui-react';
 *
 * export default function MyDialog() {
 *   const dialogControl = useDialogControl('my-dialog');
 *
 *   return (
 *     <>
 *       <Button onClick={() => dialogControl.showModal()}>Open Dialog</Button>
 *       <Dialog id="my-dialog">
 *         <h2>Dialog Title</h2>
 *         <p>This is the content of the dialog.</p>
 *         <Button onClick={() => dialogControl.close()}>Close</Button>
 *       </Dialog>
 *     </>
 *   );
 * }
 * ```
 *
 * @param {DialogProps} props - The props for the `Dialog` component.
 * @returns {React.ReactElement} The rendered `Dialog` component.
 */
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
