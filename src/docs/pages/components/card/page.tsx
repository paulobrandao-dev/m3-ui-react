import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content } from '@/lib';
import { useEffect } from 'react';
import ComponentCardArtcile from './article';
import ComponentCardPanel from './supporting-panel';

export default function ComponentCardPage() {
  const { isFluidContent, setSubtitle, setNavAction } = useSettings();

  useEffect(() => {
    setSubtitle('Components / Card');
    setNavAction('/components');
    return () => {
      setSubtitle(undefined);
      setNavAction(null);
    };
  }, [setNavAction, setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="Card component"
        description="Cards present information and options related to a specific subject."
        element={<CardIcon color="primary" icon="cards" isFilled size={200} />}
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
        <ComponentCardArtcile />
        <ComponentCardPanel />
      </CanonicalLayout>
    </Content>
  );
}
