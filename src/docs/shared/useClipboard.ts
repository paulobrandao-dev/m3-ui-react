import { useCallback } from 'react';

export function useClipboard() {
  const copyTextToClipboard = useCallback(
    async (
      text: string,
      onSuccess?: (value: void) => void | PromiseLike<void>,
      onError?: (reason: unknown) => void | PromiseLike<void>,
    ) => {
      await navigator.clipboard.writeText(text).then(onSuccess, onError);
    },
    [],
  );

  const copyTextContentFrom = useCallback(
    async (
      element: Element,
      onSuccess?: (value: void) => void | PromiseLike<void>,
      onError?: (reason: unknown) => void | PromiseLike<void>,
    ) => {
      const text = element.textContent;
      if (text) {
        await copyTextToClipboard(text, onSuccess, onError);
      }
    },
    [copyTextToClipboard],
  );

  const pasteTextFromClipboard = useCallback(() => {
    return navigator.clipboard.readText();
  }, []);

  return { copyTextToClipboard, copyTextContentFrom, pasteTextFromClipboard };
}
