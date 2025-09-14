import { useSettings } from '@/docs/settings/hook';
import PageHeader from '@/docs/shared/PageHeader';
import { Content } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useEffect } from 'react';
import SectionButtons from './section-buttons';
import SectionNavigation from './section-navigation';

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
          <Icon
            icon="extension"
            size={200}
            style={{ color: 'var(--color-seed)' }}
            isFilled
          />
        }
      />
      <SectionButtons isFluidContent={isFluidContent} />
      <SectionNavigation isFluidContent={isFluidContent} />
    </Content>
  );
}
