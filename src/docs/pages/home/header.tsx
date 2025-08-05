import banner from '@/docs/assets/react-material-cover.webp';
import { Card, CardContent, CardMedia, Font, useMediaQuery } from '@/lib';

export default function HomeHeader() {
  const media = useMediaQuery();

  return (
    <Card
      as="header"
      variant="filled"
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
      <CardContent
        as="hgroup"
        spacing={{
          paddingInline: 'lg',
          paddingBlockEnd: 'lg',
          paddingBlockStart: media.isLessThanExpanded ? 'md' : 'lg',
          marginBlock: 'auto',
        }}
      >
        <Font as="h1" scale="display-large">
          React Material
        </Font>
        <Font
          as="p"
          scale="headline-medium"
          spacing={{ marginBlockStart: 'md' }}
        >
          A powerful and straightforward way to implement the Google Design
          System in your React projects.
        </Font>
      </CardContent>
      <CardMedia
        as="img"
        src={banner}
        alt="React Material logo over an abstract purple background"
        alignMedia="right-center"
        fitMedia="cover"
      />
    </Card>
  );
}
