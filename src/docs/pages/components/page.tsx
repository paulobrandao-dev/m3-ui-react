import PageHeader from '@/docs/components/PageHeader';
import { useSettings } from '@/docs/settings/hook';
import SectionButtons from './section-buttons';
import SectionNavigation from './section-navigation';
import { Icon } from '@/lib/icon/Rounded';

export default function ComponentsPage() {
  const { isFluidContent } = useSettings();

  return (
    <>
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
    </>
  );
}
