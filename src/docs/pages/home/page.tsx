import banner from '@/docs/assets/react-material-cover.webp';
import PageHeader from '@/docs/components/PageHeader';
import { useSettings } from '@/docs/settings/hook';
import { CanonicalLayout } from '@/lib';
import HomeArticle from './article';
import HomeSupportingPane from './supporting-pane';

export default function HomePage() {
  const { isFluidContent } = useSettings();

  return (
    <>
      <PageHeader
        title="M3 UI React"
        description="A powerful and straightforward way to implement the Google Design System in your React projects."
        image={banner}
        imageDescription="React Material logo over an abstract purple background"
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
        <HomeArticle />
        <HomeSupportingPane />
      </CanonicalLayout>
    </>
  );
}
