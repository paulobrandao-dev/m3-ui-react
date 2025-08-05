'use client';

import { useMemo } from 'react';
import '../../styles/icons/sharp.scss';

export type IconProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'children'
> & {
  icon: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  size?: number;
  isFilled?: boolean;
  emphasis?: 'low' | 'normal' | 'high';
  ref?: React.Ref<HTMLSpanElement>;
};

export function Icon({
  icon,
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
      className={`rm-icon${className ? ` ${className}` : ''}`}
      style={{
        ...style,
        fontSize: size,
        fontVariationSettings: `'FILL' ${isFilled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
      }}
      {...props}
    >
      {icon}
    </span>
  );
}
