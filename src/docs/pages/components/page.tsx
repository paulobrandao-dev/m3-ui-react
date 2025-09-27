import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import PageHeader from '@/docs/shared/PageHeader';
import { Content } from '@/lib';
import { useEffect } from 'react';
import SectionButtons from './section-buttons';
import SectionNavigation from './section-navigation';
import SectionOthers from './section-others';
import SectionSheets from './section-sheets';

export default function ComponentsPage() {
  const { isFluidContent, setSubtitle } = useSettings();

  useEffect(() => {
    setSubtitle('Components');

    return () => {
      setSubtitle(undefined);
    };
  }, [setSubtitle]);

  return (
    <Content as="main">
      <PageHeader
        title="Components"
        description="Interactive components are the fundamental elements for designing a user interface."
        element={
          <CardIcon color="primary" size={200} isFilled icon="extension" />
        }
      />
      <SectionButtons isFluidContent={isFluidContent} />
      <SectionNavigation isFluidContent={isFluidContent} />
      <SectionSheets isFluidContent={isFluidContent} />
      <SectionOthers isFluidContent={isFluidContent} />
    </Content>
  );
}
