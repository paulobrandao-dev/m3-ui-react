import { CardMedia } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { clsx } from 'clsx';

export default function CardIcon({
  color,
  icon,
  size,
  isFilled,
}: Readonly<{
  color: 'primary' | 'secondary' | 'error';
  icon: string;
  size: number;
  isFilled?: boolean;
}>) {
  return (
    <CardMedia
      as={Icon}
      aspectRatio="16:9"
      symbol={icon}
      isFilled={isFilled}
      size={size}
      alignMedia="center"
      fitMedia="contain"
      className={clsx('card-icon', `color-${color}`)}
    />
  );
}
