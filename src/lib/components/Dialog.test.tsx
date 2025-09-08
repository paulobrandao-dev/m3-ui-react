import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { Dialog } from './Dialog';
import { Toolbar } from './Toolbar';

describe('Dialog component', () => {
  afterEach(cleanup);

  const user = userEvent.setup({ pointerEventsCheck: 0 });

  it('should apply the right CSS classes and act as expected', async () => {
    const result = render(
      <>
        <button
          onClick={() =>
            document
              .querySelector<HTMLDialogElement>('dialog#test-basic')
              ?.showModal()
          }
        >
          Open dialog
        </button>
        <Dialog id="test-basic" data-testid="test-dialog" fullscreenOnCompact>
          <Toolbar
            startNode={<h1>Testing dialog</h1>}
            endNode={
              <button
                onClick={() => {
                  document
                    .querySelector<HTMLDialogElement>('dialog#test-basic')
                    ?.close();
                }}
              >
                Close
              </button>
            }
          />
          <p>Sample text</p>
        </Dialog>
      </>,
    );

    const dialog = result.getByTestId('test-dialog');
    const opener = result.getByRole('button', { name: 'Open dialog' });

    expect(dialog.tagName).toEqual('DIALOG');

    await user.click(opener);
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeTruthy();
    });
    expect(dialog.classList.contains('is-fullscreen-on-compact')).toBeTruthy();
    await user.click(result.getByRole('button', { name: 'Close' }));
    await waitFor(() => {
      expect(dialog.hasAttribute('open')).toBeFalsy();
    });
  });
});
