import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content } from '@/lib';
import { useEffect } from 'react';
import ComponentAppbarArtcile from './article';

export default function ComponentAppbarPage() {
  const { isFluidContent, setSubtitle } = useSettings();

  useEffect(() => {
    setSubtitle('Components / Appbar');
    return () => {
      setSubtitle(undefined);
    };
  }, [setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="Appbar component"
        description="App bars are positioned at the top of the screen, helping users navigate products."
        element={
          <CardIcon color="primary" icon="toolbar" isFilled size={200} />
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
        <ComponentAppbarArtcile />
      </CanonicalLayout>
    </Content>
  );
}
