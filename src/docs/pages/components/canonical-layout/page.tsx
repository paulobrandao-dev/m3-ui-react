import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content } from '@/lib';
import { useEffect } from 'react';
import ComponentCanonicalLayoutArtcile from './article';
import ComponentCanonicalLayoutPanel from './supporting-panel';

export default function ComponentCanonicalLayoutPage() {
  const { isFluidContent, setSubtitle, setNavAction } = useSettings();

  useEffect(() => {
    setSubtitle('Components / CanonicalLayout');
    setNavAction('/components');
    return () => {
      setSubtitle(undefined);
      setNavAction(null);
    };
  }, [setNavAction, setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="CanonicalLayout component"
        description="Canonical layouts are standard designs that create typical screen arrangements for different window sizes."
        element={
          <CardIcon
            color="primary"
            icon="auto_awesome_mosaic"
            isFilled
            size={200}
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
        <ComponentCanonicalLayoutArtcile />
        <ComponentCanonicalLayoutPanel />
      </CanonicalLayout>
    </Content>
  );
}
