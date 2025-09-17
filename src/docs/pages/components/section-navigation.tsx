import CardLink from '@/docs/shared/CardLink';
import { CanonicalLayout, Content, Font } from '@/lib';

export default function SectionNavigation({
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
        Navigation
      </Font>
      <CanonicalLayout
        as="nav"
        variant="feed"
        gap={{ gap: 'sm' }}
        spacing={{ marginInline: 'auto' }}
        isFluid={isFluidContent}
      >
        <CardLink
          link="/components/navlink"
          name="NavLink"
          icon="link"
          description="TO DO"
        />
        <CardLink
          link="/components/nav-bar"
          name="NavBar"
          icon="bottom_navigation"
          description="TO DO"
        />
        <CardLink
          link="/components/nav-rail"
          name="NavRail"
          icon="dock_to_right"
          description="TO DO"
        />
      </CanonicalLayout>
    </Content>
  );
}
