import { useEffect, useRef } from 'react';

type ScrollFlags = {
  isUp: boolean;
  isDown: boolean;
  atTop: boolean;
  atBottom: boolean;
};

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
      onScroll({
        atBottom: element.scrollTop >= element.scrollHeight,
        atTop: element.scrollTop === 0,
        isUp: element.scrollTop < lastScrollCoord.current,
        isDown: element.scrollTop > lastScrollCoord.current,
      });
    };
    element.addEventListener('scroll', scrollHandler);
    return () => {
      element.removeEventListener('scroll', scrollHandler);
    };
  }, [elementSelector, onScroll]);
}
