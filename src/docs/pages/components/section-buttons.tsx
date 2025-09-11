import { CanonicalLayout, Content, Font } from '@/lib';
import CardLink from './card-link';

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
          description="Buttons typically initiate the majority of actions within a UI."
        />
        <CardLink
          link="/components/icon-button"
          name="IconButton"
          description="Icon buttons streamline user actions through a single tap."
        />
        <CardLink
          link="/components/fab"
          name="FAB"
          description="Coming soon"
          disabled
        />
      </CanonicalLayout>
    </Content>
  );
}
