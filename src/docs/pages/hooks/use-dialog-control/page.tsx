import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content } from '@/lib';
import { useEffect } from 'react';
import HookDialogControlArtcile from './article';
import HookDialogControlPanel from './supporting-panel';

export default function HookDialogControlPage() {
  const { isFluidContent, setSubtitle, setNavAction } = useSettings();

  useEffect(() => {
    setSubtitle('Hooks / useDialogControl');
    setNavAction('/hooks');
    return () => {
      setSubtitle(undefined);
      setNavAction(null);
    };
  }, [setNavAction, setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="useDialogControl"
        description="A hook to control a native dialog element."
        element={
          <CardIcon
            color="primary"
            icon="picture_in_picture_center"
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
        <HookDialogControlArtcile />
        <HookDialogControlPanel />
      </CanonicalLayout>
    </Content>
  );
}
