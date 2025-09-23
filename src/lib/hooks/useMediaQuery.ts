'use client';

import { useEffect, useState } from 'react';

/**
 * A set of media queries that can be used to create responsive layouts.
 *
 * @property {number} width - The current width of the viewport.
 * @property {number} height - The current height of the viewport.
 * @property {boolean} isCompact - `true` if the viewport width is less than or equal to 599px.
 * @property {boolean} isGreaterThanCompact - `true` if the viewport width is greater than 599px.
 * @property {boolean} isMedium - `true` if the viewport width is between 600px and 839px.
 * @property {boolean} isLessThanMedium - `true` if the viewport width is less than 600px.
 * @property {boolean} isGreaterThanMedium - `true` if the viewport width is greater than 839px.
 * @property {boolean} isExpanded - `true` if the viewport width is between 840px and 1199px.
 * @property {boolean} isLessThanExpanded - `true` if the viewport width is less than 840px.
 * @property {boolean} isGreaterThanExpanded - `true` if the viewport width is greater than 1199px.
 * @property {boolean} isLarge - `true` if the viewport width is between 1200px and 1399px.
 * @property {boolean} isLessThanLarge - `true` if the viewport width is less than 1200px.
 * @property {boolean} isGreaterThanLarge - `true` if the viewport width is greater than 1399px.
 * @property {boolean} isExtraLarge - `true` if the viewport width is greater than or equal to 1400px.
 * @property {boolean} isLessThanExtraLarge - `true` if the viewport width is less than 1400px.
 * @property {boolean} isPortrait - `true` if the viewport width is less than the height.
 * @property {boolean} isLandscape - `true` if the viewport width is greater than the height.
 */
export type MediaQueries = {
  width: number;
  height: number;
  isCompact: boolean;
  isGreaterThanCompact: boolean;
  isMedium: boolean;
  isLessThanMedium: boolean;
  isGreaterThanMedium: boolean;
  isExpanded: boolean;
  isLessThanExpanded: boolean;
  isGreaterThanExpanded: boolean;
  isLarge: boolean;
  isLessThanLarge: boolean;
  isGreaterThanLarge: boolean;
  isExtraLarge: boolean;
  isLessThanExtraLarge: boolean;
  isPortrait: boolean;
  isLandscape: boolean;
};

/**
 * A hook that provides a set of media queries to create responsive layouts.
 * It listens for changes in the viewport size and updates the queries accordingly.
 *
 * @returns {MediaQueries} An object with the current media query states.
 *
 * @example
 * ```tsx
 * import { useMediaQuery } from 'm3-ui-react';
 *
 * export default function MyResponsiveComponent() {
 *   const { isCompact, isMedium } = useMediaQuery();
 *
 *   return (
 *     <div>
 *       {isCompact && <p>This is a compact screen.</p>}
 *       {isMedium && <p>This is a medium screen.</p>}
 *     </div>
 *   );
 * }
 * ```
 */
export function useMediaQuery(): MediaQueries {
  const [queries, setQueries] = useState<MediaQueries>({
    width: 0,
    height: 0,
    isCompact: false,
    isGreaterThanCompact: false,
    isMedium: false,
    isLessThanMedium: false,
    isGreaterThanMedium: false,
    isExpanded: false,
    isLessThanExpanded: false,
    isGreaterThanExpanded: false,
    isLarge: false,
    isLessThanLarge: false,
    isGreaterThanLarge: false,
    isExtraLarge: false,
    isLessThanExtraLarge: false,
    isLandscape: false,
    isPortrait: false,
  });

  useEffect(() => {
    const checkMedia = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setQueries({
        width,
        height,
        isCompact: width <= 599,
        isGreaterThanCompact: width > 599,
        isMedium: width >= 600 && width <= 839,
        isLessThanMedium: width < 600,
        isGreaterThanMedium: width > 839,
        isExpanded: width >= 840 && width <= 1199,
        isLessThanExpanded: width < 840,
        isGreaterThanExpanded: width > 1199,
        isLarge: width >= 1200 && width <= 1399,
        isLessThanLarge: width < 1200,
        isGreaterThanLarge: width > 1399,
        isExtraLarge: width >= 1400,
        isLessThanExtraLarge: width < 1400,
        isLandscape: width > height,
        isPortrait: width < height,
      });
    };
    checkMedia();
    window.addEventListener('resize', checkMedia);
    return () => {
      window.removeEventListener('resize', checkMedia);
    };
  }, []);

  return queries;
}
