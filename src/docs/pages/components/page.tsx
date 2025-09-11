import PageHeader from '@/docs/components/PageHeader';
import { useSettings } from '@/docs/settings/hook';
import SectionButtons from './section-buttons';
import SectionNavigation from './section-navigation';

export default function ComponentsPage() {
  const { isFluidContent } = useSettings();

  return (
    <>
      <PageHeader
        title="Components"
        description="Interactive components are the fundamental elements for designing a user interface."
      />
      <SectionButtons isFluidContent={isFluidContent} />
      <SectionNavigation isFluidContent={isFluidContent} />
    </>
  );
}
