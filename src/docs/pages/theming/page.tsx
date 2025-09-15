import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content } from '@/lib';
import { useEffect } from 'react';
import ThemingArticle from './article';

export default function ThemingPage() {
  const { isFluidContent, setSubtitle } = useSettings();

  useEffect(() => {
    setSubtitle('Theming');

    return () => {
      setSubtitle(undefined);
    };
  }, [setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="Theming"
        description="Why should it be difficult? There's no reason for that!"
        element={<CardIcon color="primary" icon="palette" size={200} />}
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
    </Content>
  );
}
