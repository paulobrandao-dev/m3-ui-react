import notFoundBox from '@/docs/assets/box_not_found.webp';
import { Card, CardMedia, Content, Font, useMediaQuery } from '@/lib';

export default function NotFoundPage() {
  const media = useMediaQuery();

  return (
    <>
      <Content
        as="section"
        flexbox={
          media.isLessThanExpanded
            ? {
                direction: 'column-reverse',
                gap: 'sm',
                alignItems: 'center',
              }
            : undefined
        }
        grid={media.isGreaterThanMedium ? { columns: 2, gap: 'sm' } : undefined}
        spacing={{ marginInline: 'auto', marginBlock: 'md' }}
      >
        <Card
          as="article"
          variant="filled"
          flexbox={{ direction: 'column', gap: 'md', justifyContent: 'center' }}
          spacing={{ padding: 'lg' }}
        >
          <Font as="h1" variant="display-large" textColor="error">
            404
          </Font>
          <Font as="p" variant="headline-medium" textAlign="left">
            This page cannot be found.
          </Font>
        </Card>
        <CardMedia
          as="img"
          src={notFoundBox}
          alt="isometric illustration of a craft box overturned full of styrofoam over a blue circle carpet in a white room"
          aspectRatio="16:9"
          alignMedia="center"
          fitMedia="cover"
        />
      </Content>
    </>
  );
}
