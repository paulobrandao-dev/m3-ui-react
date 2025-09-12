import { Card, Font } from '@/lib';
import { Link } from '../router';

export default function CardLink({
  link,
  name,
  description,
  disabled,
}: Readonly<{
  link: string;
  name: string;
  description?: string;
  disabled?: boolean;
}>) {
  if (disabled) return null;

  return (
    <Card variant="elevated" as={Link} to={link} stateLayer>
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
        {name} component
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
