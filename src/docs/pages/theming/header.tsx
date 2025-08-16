import banner from '@/docs/assets/theming_wallpaper.webp';
import { Card, CardMedia, Content, Font, useMediaQuery } from '@/lib';

export default function ThemingHeader() {
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
        <Font as="h1" scale="display-large">
          Theming
        </Font>
        <Font
          as="p"
          scale="headline-medium"
          spacing={{ marginBlockStart: 'md' }}
        >
          Why should it be difficult? There's no reason for that!
        </Font>
      </Card>
      <CardMedia
        as="img"
        src={banner}
        alt="flat illustration, with blue color tones, of people applying wallpaper over a wall"
        alignMedia="center"
        aspectRatio="16:9"
        fitMedia="cover"
      />
    </Content>
  );
}
