import PageHeader from '@/docs/components/PageHeader';
import { useSettings } from '@/docs/settings/hook';
import { CanonicalLayout, CardMedia } from '@/lib';
import HomeArticle from './article';
import HomeSupportingPane from './supporting-pane';

export default function HomePage() {
  const { isFluidContent } = useSettings();

  return (
    <>
      <PageHeader
        title="M3 UI React"
        description="A powerful and straightforward way to implement the Google Design System in your React projects."
        element={
          <CardMedia
            as="img"
            src="/m3-ui-react.png"
            alt="M3 UI React Logo"
            aspectRatio="16:9"
            alignMedia="center"
            fitMedia="contain"
          />
        }
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
