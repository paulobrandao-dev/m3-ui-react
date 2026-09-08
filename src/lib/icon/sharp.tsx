'use client'

import { useMemo } from 'react'
import { IconProps } from './icon'
import './sharp.scss'

/**
 * The `Icon` component displays an icon from the Material Symbols Sharp set.
 * It allows for customization of weight, size, fill, and emphasis.
 *
 * @example
 * ```tsx
 * import { Icon } from 'm3-ui-react/icon/sharp';
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
  style,
  ...props
}: IconProps) {
  const opsz = useMemo(() => {
    if (size <= 23) {
      return 20
    } else if (size > 23 && size <= 39) {
      return 24
    } else if (size > 39 && size <= 47) {
      return 40
    } else {
      return 48
    }
  }, [size])

  const grade = useMemo(() => {
    switch (emphasis) {
      case 'low':
        return -25
      case 'high':
        return 200
      default:
        return 0
    }
  }, [emphasis])

  return (
    <span
      ref={ref}
      data-icon-sharp
      style={{
        ...style,
        fontSize: size,
        fontVariationSettings: `'FILL' ${isFilled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
      }}
      {...props}
    >
      {symbol}
    </span>
  )
}
