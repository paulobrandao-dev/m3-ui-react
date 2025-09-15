import { CardMedia } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { clsx } from 'clsx';

export default function CardIcon({
  color,
  icon,
  size,
}: Readonly<{
  color: 'primary' | 'secondary' | 'error';
  icon: string;
  size: number;
}>) {
  return (
    <CardMedia
      as={Icon}
      aspectRatio="16:9"
      symbol={icon}
      isFilled
      size={size}
      alignMedia="center"
      fitMedia="contain"
      className={clsx('card-icon', `color-${color}`)}
    />
  );
}
