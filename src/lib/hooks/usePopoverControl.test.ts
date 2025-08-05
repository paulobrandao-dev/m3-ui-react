import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { usePopoverControl } from './usePopoverControl';

const spyShow = vi.fn();
const spyHide = vi.fn();
const spyToggle = vi.fn();

vi.spyOn(document, 'getElementById').mockImplementation(elementId => {
  const element = document.createElement('div');
  element.setAttribute('id', elementId);
  element.setAttribute('popover', '');
  element.showPopover = spyShow;
  element.hidePopover = spyHide;
  element.togglePopover = spyToggle;
  return element;
});

describe('usePopoverControl hook', () => {
  it('should handle popover elements display by Popover API', () => {
    const { result } = renderHook(() => usePopoverControl());
    result.current.showPopover('test');
    expect(spyShow).toBeCalled();
    result.current.hidePopover('test');
    expect(spyHide).toBeCalled();
    result.current.togglePopover('test');
    expect(spyToggle).toBeCalled();
  });
});
