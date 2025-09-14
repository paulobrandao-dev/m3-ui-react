import PageHeader from '@/docs/shared/PageHeader';
import { useSettings } from '@/docs/settings/hook';
import { CanonicalLayout, CardMedia, Content } from '@/lib';
import HomeArticle from './article';
import HomeSupportingPane from './supporting-pane';

export default function HomePage() {
  const { isFluidContent } = useSettings();

  return (
    <Content as="main">
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
    </Content>
  );
}
