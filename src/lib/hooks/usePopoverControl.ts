'use client';

import { useCallback } from 'react';
import { useMediaQuery } from './useMediaQuery';

export function usePopoverControl() {
  const media = useMediaQuery();

  const getPositions = useCallback(
    (anchor: HTMLElement) => {
      const coords = anchor.getBoundingClientRect();
      const screenHeightHalf = media.height / 2;
      const screenWidthHalf = media.width / 2;
      const isTop = coords.bottom < screenHeightHalf;
      const isLeft = coords.right < screenWidthHalf;
      const top = isTop ? `${coords.bottom}px` : 'auto';
      const bottom = !isTop
        ? `${Math.round(media.height - coords.top)}px`
        : 'auto';
      const left = isLeft ? `${coords.right}px` : 'auto';
      const right = !isLeft
        ? `${Math.round(media.width - coords.left)}px`
        : 'auto';
      const transformOrigin = `${isTop ? 'top' : 'bottom'} ${isLeft ? 'left' : 'right'}`;
      return `margin-block-start: ${top}; margin-block-end: ${bottom}; margin-inline-start: ${left}; margin-inline-end: ${right}; transform-origin: ${transformOrigin}`;
    },
    [media.height, media.width],
  );

  const showPopover = useCallback(
    (popoverId: string, anchorElement?: HTMLElement) => {
      const popover = document.getElementById(popoverId);
      if (!popover || !popover.hasAttribute('popover')) return;
      if (anchorElement) {
        popover.style.cssText = getPositions(anchorElement);
      } else {
        popover.removeAttribute('style');
      }
      popover.showPopover();
    },
    [getPositions],
  );

  const hidePopover = useCallback((popoverId: string) => {
    const popover = document.getElementById(popoverId);
    if (popover && popover.hasAttribute('popover')) {
      popover.hidePopover();
    }
  }, []);

  const togglePopover = useCallback(
    (popoverId: string, anchorElement?: HTMLElement) => {
      const popover = document.getElementById(popoverId);
      if (!popover || !popover.hasAttribute('popover')) return;
      if (anchorElement) {
        popover.style.cssText = getPositions(anchorElement);
      } else {
        popover.removeAttribute('style');
      }
      popover.togglePopover(true);
    },
    [getPositions],
  );

  return { showPopover, hidePopover, togglePopover };
}
