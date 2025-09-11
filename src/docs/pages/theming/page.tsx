import banner from '@/docs/assets/theming_wallpaper.webp';
import PageHeader from '@/docs/components/PageHeader';
import { useSettings } from '@/docs/settings/hook';
import { CanonicalLayout } from '@/lib';
import ThemingArticle from './article';

export default function ThemingPage() {
  const { isFluidContent } = useSettings();

  return (
    <>
      <PageHeader
        title="Theming"
        description="Why should it be difficult? There's no reason for that!"
        image={banner}
        imageDescription="flat illustration, with blue color tones, of people applying wallpaper over a wall"
      />
      <CanonicalLayout
        variant="supporting-pane"
        spacing={{
          paddingBlock: 'xl',
          marginInline: 'auto',
        }}
        gap={{ gap: 'xl' }}
        isFluid={isFluidContent}
      >
        <ThemingArticle />
      </CanonicalLayout>
    </>
  );
}
