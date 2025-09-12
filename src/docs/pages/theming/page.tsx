import PageHeader from '@/docs/components/PageHeader';
import { useSettings } from '@/docs/settings/hook';
import { CanonicalLayout } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import ThemingArticle from './article';

export default function ThemingPage() {
  const { isFluidContent } = useSettings();

  return (
    <>
      <PageHeader
        title="Theming"
        description="Why should it be difficult? There's no reason for that!"
        element={
          <Icon
            icon="palette"
            isFilled
            size={200}
            style={{ color: 'var(--color-seed)' }}
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
        <ThemingArticle />
      </CanonicalLayout>
    </>
  );
}
