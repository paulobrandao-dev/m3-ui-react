import { CanonicalLayout } from '@/lib';
import HomeArticle from './article';
import HomeHeader from './header';
import HomeSupportingPane from './supporting-pane';

export default function HomePage() {
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
      >
        <HomeArticle />
        <HomeSupportingPane />
      </CanonicalLayout>
    </>
  );
}
