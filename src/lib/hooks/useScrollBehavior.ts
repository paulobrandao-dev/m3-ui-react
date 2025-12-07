import { useEffect, useRef } from 'react';

/**
 * Flags representing the scroll state of an element.
 *
 * @property {boolean} isUp - `true` if the user is scrolling up.
 * @property {boolean} isDown - `true` if the user is scrolling down.
 * @property {boolean} atTop - `true` if the scroll position is at the top of the element.
 * @property {boolean} atBottom - `true` if the scroll position is at the bottom of the element.
 */
type ScrollFlags = {
  isUp: boolean;
  isDown: boolean;
  atTop: boolean;
  atBottom: boolean;
};

/**
 * A hook that tracks the scroll behavior of an element and provides flags for scroll direction and position.
 *
 * @param {string} elementSelector - A CSS selector for the element to track. If `null` or empty, the `document.body` will be used.
 * @param {(value: ScrollFlags) => void} onScroll - A callback function that receives the scroll flags whenever the element is scrolled.
 *
 * @example
 * ```tsx
 * import { useScrollBehavior } from 'm3-ui-react';
 * import { useState } from 'react';
 *
 * export default function MyComponent() {
 *   const [isScrolled, setIsScrolled] = useState(false);
 *
 *   useScrollBehavior('#my-scrollable-div', ({ atTop }) => {
 *     setIsScrolled(!atTop);
 *   });
 *
 *   return (
 *     <div id="my-scrollable-div" style={{ height: '200px', overflow: 'auto' }}>
 *       <p>Scrollable content...</p>
 *       {isScrolled && <p>Scrolled from top!</p>}
 *     </div>
 *   );
 * }
 * ```
 */
export function useScrollBehavior(
  elementSelector: string,
  onScroll: (value: ScrollFlags) => void,
) {
  const lastScrollCoord = useRef<number>(0);

  useEffect(() => {
    const found = elementSelector
      ? document.querySelector<HTMLElement>(elementSelector)
      : null;
    const element = found ?? document.body;
    const scrollHandler = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      onScroll({
        atBottom: scrollTop + clientHeight >= scrollHeight,
        atTop: scrollTop === 0,
        isUp: scrollTop < lastScrollCoord.current,
        isDown: scrollTop > lastScrollCoord.current,
      });
      lastScrollCoord.current = scrollTop;
    };
    element.addEventListener('scroll', scrollHandler);
    return () => {
      element.removeEventListener('scroll', scrollHandler);
    };
  }, [elementSelector, onScroll]);
}
