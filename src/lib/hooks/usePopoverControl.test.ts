import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { usePopoverControl } from './usePopoverControl';
import * as useMediaQuery from './useMediaQuery';

const spyShow = vi.fn();
const spyHide = vi.fn();
const spyToggle = vi.fn();

const spyGetElementById = vi
  .spyOn(document, 'getElementById')
  .mockImplementation(elementId => {
    if (elementId.startsWith('non-existent')) {
      return null;
    }
    const element = document.createElement('div');
    element.setAttribute('id', elementId);
    element.setAttribute('popover', '');
    element.showPopover = spyShow;
    element.hidePopover = spyHide;
    element.togglePopover = spyToggle;
    return element;
  });

vi.spyOn(useMediaQuery, 'useMediaQuery').mockReturnValue({
  height: 1080,
  width: 1920,
  isCompact: false,
  isGreaterThanCompact: true,
  isMedium: false,
  isLessThanMedium: false,
  isGreaterThanMedium: true,
  isExpanded: true,
  isLessThanExpanded: false,
  isGreaterThanExpanded: true,
  isLarge: true,
  isLessThanLarge: false,
  isGreaterThanLarge: true,
  isExtraLarge: true,
  isLessThanExtraLarge: false,
  isPortrait: false,
  isLandscape: true,
});

const getAnchorElement = (rect: {
  top: number;
  bottom: number;
  left: number;
  right: number;
}) => {
  const anchor = document.createElement('div');
  anchor.getBoundingClientRect = () => rect as DOMRect;
  return anchor;
};

describe('usePopoverControl hook', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should handle popover elements display by Popover API', () => {
    const { result } = renderHook(() => usePopoverControl());
    result.current.showPopover('test');
    expect(spyShow).toBeCalled();
    result.current.hidePopover('test');
    expect(spyHide).toBeCalled();
    result.current.togglePopover('test');
    expect(spyToggle).toBeCalled();
  });

  it('should do nothing if popover element does not exist', () => {
    const { result } = renderHook(() => usePopoverControl());
    result.current.showPopover('non-existent');
    expect(spyShow).not.toBeCalled();
    result.current.hidePopover('non-existent-2');
    expect(spyHide).not.toBeCalled();
    result.current.togglePopover('non-existent-3');
    expect(spyToggle).not.toBeCalled();
  });

  it('should set popover position based on a top-left anchor', () => {
    const { result } = renderHook(() => usePopoverControl());
    const anchor = getAnchorElement({
      top: 100,
      bottom: 200,
      left: 300,
      right: 400,
    });
    result.current.showPopover('test-position', anchor);
    const popover = spyGetElementById.mock.results[0].value;
    expect(popover?.style.cssText).toContain('margin-block-start: 200px');
    expect(popover?.style.cssText).toContain('margin-inline-start: 400px');
    expect(popover?.style.cssText).toContain('transform-origin: top left');
  });

  it('should set popover position based on a bottom-right anchor', () => {
    const { result } = renderHook(() => usePopoverControl());
    const anchor = getAnchorElement({
      top: 900,
      bottom: 1000,
      left: 1300,
      right: 1400,
    });
    result.current.togglePopover('test-position', anchor);
    const popover = spyGetElementById.mock.results[0].value;
    expect(popover?.style.cssText).toContain('margin-block-end: 180px');
    expect(popover?.style.cssText).toContain('margin-inline-end: 620px');
    expect(popover?.style.cssText).toContain('transform-origin: bottom right');
  });
});
