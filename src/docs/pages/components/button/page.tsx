import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content } from '@/lib';
import { useEffect } from 'react';
import ComponentButtonArtcile from './article';
import ComponentButtonPanel from './supporting-panel';

export default function ComponentButtonPage() {
  const { isFluidContent, setSubtitle } = useSettings();

  useEffect(() => {
    setSubtitle('Components / Button');
    return () => {
      setSubtitle(undefined);
    };
  }, [setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="Button component"
        description="Buttons typically initiate the majority of actions within a UI."
        element={
          <CardIcon color="primary" icon="buttons_alt" isFilled size={200} />
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
        <ComponentButtonArtcile />
        <ComponentButtonPanel />
      </CanonicalLayout>
    </Content>
  );
}
