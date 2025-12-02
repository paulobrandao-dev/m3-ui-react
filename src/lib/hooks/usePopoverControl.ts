'use client';

import { useCallback } from 'react';
import { useMediaQuery } from './useMediaQuery';

/**
 * A hook to control an element with the `popover` attribute.
 * It provides functions to show, hide, and toggle the popover, and automatically positions it relative to an anchor element.
 *
 * @returns {{
 *   showPopover: (anchorElement?: HTMLElement | null) => void;
 *   hidePopover: () => void;
 *   togglePopover: (anchorElement?: HTMLElement | null) => void;
 * }} An object with functions to control a popover.
 *
 * @example
 * ```tsx
 * import { useRef } from 'react';
 * import { Menu, ListItem, Button, usePopoverControl } from 'm3-ui-react';
 *
 * export default function MyMenu() {
 *   const buttonRef = useRef<HTMLButtonElement>(null);
 *   const { togglePopover } = usePopoverControl('my-menu');
 *
 *   return (
 *     <>
 *       <Button
 *         ref={buttonRef}
 *         onClick={() => togglePopover(buttonRef.current)}
 *       >
 *         Open Menu
 *       </Button>
 *       <Menu id="my-menu">
 *         <ListItem headline="First item" />
 *         <ListItem headline="Second item" />
 *       </Menu>
 *     </>
 *   );
 * }
 * ```
 */
export function usePopoverControl(popoverId: string) {
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
    (anchorElement?: HTMLElement) => {
      const popover = document.getElementById(popoverId);
      if (!popover || !popover.hasAttribute('popover')) return;
      if (anchorElement) {
        popover.style.cssText = getPositions(anchorElement);
      }
      popover.showPopover();
    },
    [getPositions, popoverId],
  );

  const hidePopover = useCallback(() => {
    const popover = document.getElementById(popoverId);
    if (popover && popover.hasAttribute('popover')) {
      popover.hidePopover();
    }
  }, [popoverId]);

  const togglePopover = useCallback(
    (anchorElement?: HTMLElement) => {
      const popover = document.getElementById(popoverId);
      if (!popover || !popover.hasAttribute('popover')) return;
      if (anchorElement) {
        popover.style.cssText = getPositions(anchorElement);
      }
      popover.togglePopover(true);
    },
    [getPositions, popoverId],
  );

  return { showPopover, hidePopover, togglePopover };
}
