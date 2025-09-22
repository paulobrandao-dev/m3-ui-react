import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content } from '@/lib';
import { useEffect } from 'react';
import ComponentIconButtonArticle from './article';

export default function ComponentIconButtonPage() {
  const { isFluidContent, setSubtitle } = useSettings();

  useEffect(() => {
    setSubtitle('Components / IconButton');
    return () => {
      setSubtitle(undefined);
    };
  }, [setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="IconButton component"
        description="Icon buttons streamline user actions through a single tap."
        element={
          <CardIcon color="primary" icon="add_circle" isFilled size={200} />
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
        <ComponentIconButtonArticle />
      </CanonicalLayout>
    </Content>
  );
}
