'use client';

import { useMemo } from 'react';
import '../../styles/icons/rounded.scss';

/**
 * Props for the Icon component.
 *
 * @property {string} symbol - The name of the icon symbol from the Material Symbols set.
 * @property {100 | 200 | 300 | 400 | 500 | 600 | 700} [weight=400] - The font weight of the icon.
 * @property {number} [size=24] - The size of the icon in pixels.
 * @property {boolean} [isFilled] - If `true`, the icon will be filled.
 * @property {'low' | 'normal' | 'high'} [emphasis='normal'] - The emphasis level of the icon, affecting its grade.
 * @property {React.Ref<HTMLSpanElement>} [ref] - A ref to the underlying `span` element.
 */
export type IconProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'children'
> & {
  symbol: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  size?: number;
  isFilled?: boolean;
  emphasis?: 'low' | 'normal' | 'high';
  ref?: React.Ref<HTMLSpanElement>;
};

/**
 * The `Icon` component displays an icon from the Material Symbols Outlined set.
 * It allows for customization of weight, size, fill, and emphasis.
 *
 * @example
 * ```tsx
 * import { Icon } from 'm3-ui-react/icon';
 *
 * export default function MyIcon() {
 *   return <Icon symbol="settings" />;
 * }
 * ```
 *
 * @param {IconProps} props - The props for the `Icon` component.
 * @returns {React.ReactElement} The rendered `Icon` component.
 */
export function Icon({
  symbol,
  ref,
  weight = 400,
  size = 24,
  isFilled,
  emphasis = 'normal',
  className,
  style,
  ...props
}: IconProps) {
  const opsz = useMemo(() => {
    if (size <= 23) {
      return 20;
    } else if (size > 23 && size <= 39) {
      return 24;
    } else if (size > 39 && size <= 47) {
      return 40;
    } else {
      return 48;
    }
  }, [size]);

  const grade = useMemo(() => {
    switch (emphasis) {
      case 'low':
        return -25;
      case 'high':
        return 200;
      default:
        return 0;
    }
  }, [emphasis]);

  return (
    <span
      ref={ref}
      className={`m3-icon${className ? ` ${className}` : ''}`}
      style={{
        ...style,
        fontSize: size,
        fontVariationSettings: `'FILL' ${isFilled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
      }}
      {...props}
    >
      {symbol}
    </span>
  );
}
