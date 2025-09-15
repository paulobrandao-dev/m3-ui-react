import { Card, Content, Font, useMediaQuery } from '@/lib';

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
      flexbox={{
        direction: media.isLessThanExpanded ? 'column-reverse' : 'row',
        alignItems: media.isLessThanExpanded ? 'center' : 'stretch',
        justifyContent: 'space-between',
        gap: 'sm',
      }}
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
        }}
        spacing={{ padding: 'lg' }}
        style={{ flexBasis: media.isGreaterThanCompact ? '100%' : undefined }}
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
      {element}
    </Content>
  );
}
