import { CanonicalLayout } from '@/lib';
import ThemingHeader from './header';
import ThemingArticle from './article';

export default function ThemingPage() {
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
      >
        <ThemingArticle />
      </CanonicalLayout>
    </>
  );
}
