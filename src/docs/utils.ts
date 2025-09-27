export const navigate = (to: string) => {
  window.history.pushState(null, '', to);
  document.dispatchEvent(new CustomEvent('routechange'));
};

export const copyTextToClipboard = async (
  text: string,
  onSuccess?: (value: void) => void | PromiseLike<void>,
  onError?: (reason: unknown) => void,
) => {
  await navigator.clipboard.writeText(text).then(onSuccess, onError);
};

export const copyTextFromElement = async (
  element: Element,
  onSuccess?: (value: void) => void | PromiseLike<void>,
  onError?: (reason: unknown) => void,
) => {
  const text = element.textContent;
  if (text) {
    await copyTextToClipboard(text, onSuccess, onError);
  }
};
