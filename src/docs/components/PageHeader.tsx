import { Card, Content, Font, useMediaQuery } from '@/lib';
import bg_error from '../assets/m3-ui-error-pattern.webp';
import bg from '../assets/m3-ui-pattern.webp';

export default function PageHeader({
  title,
  description,
  element,
  isErrorHandler,
}: Readonly<{
  title: string;
  description?: string;
  element?: React.ReactNode;
  isErrorHandler?: boolean;
}>) {
  const media = useMediaQuery();

  return (
    <Content
      as="header"
      flexbox={
        media.isLessThanExpanded
          ? {
              direction: 'column-reverse',
              alignItems: 'center',
              gap: 'sm',
            }
          : undefined
      }
      grid={
        media.isGreaterThanMedium
          ? {
              columns: 2,
              gap: 'sm',
            }
          : undefined
      }
      spacing={{
        marginBlockStart: 'md',
      }}
    >
      <Card
        as="hgroup"
        variant="filled"
        flexbox={{
          direction: 'column',
          gap: 'md',
          justifyContent: 'center',
          alignSelf: 'stretch',
        }}
        spacing={{ padding: 'lg' }}
      >
        <Font
          as="h1"
          variant="display-large"
          textColor={isErrorHandler ? 'error' : undefined}
        >
          {title}
        </Font>
        {description && (
          <Font
            as="p"
            variant="headline-medium"
            spacing={{ marginBlockStart: 'md' }}
          >
            {description}
          </Font>
        )}
      </Card>
      <Card
        variant="filled"
        flexbox={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'stretch',
        }}
        style={{
          backgroundImage: `url(${isErrorHandler ? bg_error : bg})`,
          backgroundSize: 'cover',
        }}
      >
        {element}
      </Card>
    </Content>
  );
}
