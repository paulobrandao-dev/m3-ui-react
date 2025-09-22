import CardLink from '@/docs/shared/CardLink';
import { CanonicalLayout, Content, Font } from '@/lib';

export default function SectionButtons({
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
        Buttons
      </Font>
      <CanonicalLayout
        as="nav"
        variant="feed"
        gap={{ gap: 'sm' }}
        spacing={{ marginInline: 'auto' }}
        isFluid={isFluidContent}
      >
        <CardLink
          link="/components/button"
          name="Button"
          icon="buttons_alt"
          description="Buttons typically initiate the majority of actions within a UI."
        />
        <CardLink
          link="/components/fab"
          name="FAB"
          icon="add_box"
          description="Coming soon"
        />
        <CardLink
          link="/components/icon-button"
          name="IconButton"
          icon="add_circle"
          description="Icon buttons streamline user actions through a single tap."
        />
      </CanonicalLayout>
    </Content>
  );
}
