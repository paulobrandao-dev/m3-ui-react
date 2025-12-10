import { renderHook } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { describe, expect, it, vi } from 'vitest';
import { useScrollBehavior } from './useScrollBehavior';

describe('useScrollBehavior hook', () => {
  it('should add and remove scroll event listener', () => {
    const mockElement = document.createElement('div');
    const addEventListenerSpy = vi.spyOn(mockElement, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(mockElement, 'removeEventListener');
    vi.spyOn(document, 'querySelector').mockReturnValue(mockElement);

    const onScroll = vi.fn();
    const { unmount } = renderHook(() => useScrollBehavior('#test', onScroll));

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
  });

  it('should call onScroll with correct flags', () => {
    const mockElement = document.createElement('div');
    Object.defineProperty(mockElement, 'scrollHeight', { value: 1000 });
    Object.defineProperty(mockElement, 'clientHeight', { value: 200 });

    let scrollTop = 0;
    Object.defineProperty(mockElement, 'scrollTop', {
      get: () => scrollTop,
      set: val => {
        scrollTop = val;
      },
    });

    vi.spyOn(document, 'querySelector').mockReturnValue(mockElement);

    const onScroll = vi.fn();
    renderHook(() => useScrollBehavior('#test', onScroll));

    // Simulate scrolling down
    mockElement.scrollTop = 100;
    fireEvent.scroll(mockElement);
    expect(onScroll).toHaveBeenLastCalledWith({
      atBottom: false,
      atTop: false,
      isUp: false,
      isDown: true,
    });

    // Simulate scrolling up
    mockElement.scrollTop = 50;
    fireEvent.scroll(mockElement);
    expect(onScroll).toHaveBeenLastCalledWith({
      atBottom: false,
      atTop: false,
      isUp: true,
      isDown: false,
    });

    // Simulate scrolling to top
    mockElement.scrollTop = 0;
    fireEvent.scroll(mockElement);
    expect(onScroll).toHaveBeenLastCalledWith({
      atBottom: false,
      atTop: true,
      isUp: true,
      isDown: false,
    });

    // Simulate scrolling to bottom
    mockElement.scrollTop = 800;
    fireEvent.scroll(mockElement);
    expect(onScroll).toHaveBeenLastCalledWith({
      atBottom: true,
      atTop: false,
      isUp: false,
      isDown: true,
    });
  });

  it('should fall back to document.body when element is not found', () => {
    const addEventListenerSpy = vi.spyOn(document.body, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(
      document.body,
      'removeEventListener',
    );
    vi.spyOn(document, 'querySelector').mockReturnValue(null);

    const onScroll = vi.fn();
    const { unmount } = renderHook(() =>
      useScrollBehavior('#non-existent', onScroll),
    );

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
  });
});
