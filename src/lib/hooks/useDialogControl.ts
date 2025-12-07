'use client';

import { useCallback } from 'react';

/**
 * A hook to control a native `dialog` element.
 *
 * @param {string} dialogId - The ID of the dialog element to control.
 * @returns {{ showModal: () => void; close: () => void; }} An object with functions to show and close the dialog.
 *
 * @example
 * ```tsx
 * import { Dialog, Button, useDialogControl } from 'm3-ui-react';
 *
 * export default function MyDialog() {
 *   const { showModal, close } = useDialogControl('my-dialog');
 *
 *   return (
 *     <>
 *       <Button onClick={showModal}>Open Dialog</Button>
 *       <Dialog id="my-dialog">
 *         <h2>Dialog Title</h2>
 *         <p>This is the content of the dialog.</p>
 *         <Button onClick={close}>Close</Button>
 *       </Dialog>
 *     </>
 *   );
 * }
 * ```
 */
export function useDialogControl(dialogId: string) {
  const showModal = useCallback(() => {
    const dialog = document.getElementById(
      dialogId,
    ) as HTMLDialogElement | null;
    dialog?.showModal();
  }, [dialogId]);

  const close = useCallback(() => {
    const dialog = document.getElementById(
      dialogId,
    ) as HTMLDialogElement | null;
    dialog?.close();
  }, [dialogId]);

  return { showModal, close };
}
