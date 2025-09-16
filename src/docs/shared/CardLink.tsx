import { Link } from '@/docs/pages/router';
import { Card, Font } from '@/lib';
import CardIcon from './CardIcon';

export default function CardLink({
  link,
  name,
  icon,
  iconFilled,
  description,
  disabled,
}: Readonly<{
  link: string;
  name: string;
  icon?: string;
  iconFilled?: boolean;
  description?: string;
  color?: 'primary' | 'secondary' | 'error';
  disabled?: boolean;
}>) {
  if (disabled) return null;

  return (
    <Card variant="elevated" as={Link} to={link} stateLayer>
      {icon && (
        <CardIcon
          color="secondary"
          size={128}
          isFilled={iconFilled}
          icon={icon}
        />
      )}
      <Font
        variant="title-large"
        as="span"
        flexbox={{ direction: 'row' }}
        spacing={{
          paddingInline: 'lg',
          paddingBlockStart: 'lg',
          paddingBlockEnd: 'md',
        }}
      >
        {name}
      </Font>
      {description && (
        <Font
          variant="body-large"
          as="span"
          flexbox={{ direction: 'row' }}
          spacing={{ paddingInline: 'lg', paddingBlockEnd: 'lg' }}
        >
          {description}
        </Font>
      )}
    </Card>
  );
}
