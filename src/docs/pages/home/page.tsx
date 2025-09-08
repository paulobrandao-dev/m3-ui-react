import { CanonicalLayout } from '@/lib';
import HomeArticle from './article';
import HomeHeader from './header';
import HomeSupportingPane from './supporting-pane';
import { useSettings } from '@/docs/settings/hook';

export default function HomePage() {
  const { isFluidContent } = useSettings();

  return (
    <>
      <HomeHeader />
      <CanonicalLayout
        variant="supporting-pane"
        spacing={{
          paddingBlock: 'xl',
          marginInline: 'auto',
        }}
        gap={{ gap: 'xl' }}
        isFluid={isFluidContent}
      >
        <HomeArticle />
        <HomeSupportingPane />
      </CanonicalLayout>
    </>
  );
}
