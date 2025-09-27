import CardLink from '@/docs/shared/CardLink';
import { CanonicalLayout, Content, Font } from '@/lib';

export default function SectionSheets({
  isFluidContent,
}: Readonly<{ isFluidContent: boolean }>) {
  return (
    <Content
      as="section"
      flexbox={{ direction: 'column', gap: 'xl' }}
      spacing={{
        paddingBlock: 'xl',
        marginInline: 'auto',
      }}
      style={{ maxWidth: !isFluidContent ? 1199 : undefined }}
    >
      <Font as="h2" variant="headline-large">
        Sheets
      </Font>
      <CanonicalLayout
        as="nav"
        variant="feed"
        gap={{ gap: 'sm' }}
        spacing={{ marginInline: 'auto' }}
        isFluid={isFluidContent}
      >
        <CardLink
          link="/components/side-sheet"
          name="SideSheet"
          icon="dock_to_left"
          description="TO DO"
        />
      </CanonicalLayout>
    </Content>
  );
}
