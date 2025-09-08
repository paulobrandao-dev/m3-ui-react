import { CanonicalLayout } from '@/lib';
import ThemingHeader from './header';
import ThemingArticle from './article';
import { useSettings } from '@/docs/settings/hook';

export default function ThemingPage() {
  const { isFluidContent } = useSettings();

  return (
    <>
      <ThemingHeader />
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
