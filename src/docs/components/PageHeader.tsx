import { Card, CardMedia, Content, Font, useMediaQuery } from '@/lib';

export default function PageHeader({
  title,
  description,
  image,
  imageDescription,
}: Readonly<{
  title: string;
  description?: string;
  image?: string;
  imageDescription?: string;
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
        flexbox={{ direction: 'column', gap: 'md', justifyContent: 'center' }}
        spacing={{ padding: 'lg' }}
      >
        <Font as="h1" variant="display-large">
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
      {image && (
        <CardMedia
          as="img"
          src={image}
          alt={imageDescription ?? `Cover image of the section ${title}`}
          aspectRatio="16:9"
          alignMedia="center"
          fitMedia="cover"
        />
      )}
    </Content>
  );
}
