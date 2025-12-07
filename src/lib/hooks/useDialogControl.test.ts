import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useDialogControl } from './useDialogControl';

const spyShow = vi.spyOn(HTMLDialogElement.prototype, 'showModal');
const spyClose = vi.spyOn(HTMLDialogElement.prototype, 'close');

vi.spyOn(document, 'getElementById').mockImplementation(elementId => {
  const element = document.createElement('dialog');
  element.setAttribute('id', elementId);
  return element;
});

describe('useDialogControl hook', () => {
  it('should handle dialog display by modal methods', () => {
    const { result } = renderHook(() => useDialogControl('test'));
    result.current.showModal();
    expect(spyShow).toBeCalled();
    result.current.close();
    expect(spyClose).toBeCalled();
  });
});
