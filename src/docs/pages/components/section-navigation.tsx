import { CanonicalLayout, Content, Font } from '@/lib';
import CardLink from './card-link';

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
          description="TO DO"
        />
        <CardLink
          link="/components/nav-bar"
          name="NavBar"
          description="TO DO"
        />
        <CardLink
          link="/components/nav-drawer"
          name="NavDrawer"
          description="Coming soon"
          disabled
        />
        <CardLink
          link="/components/nav-rail"
          name="NavRail"
          description="TO DO"
        />
      </CanonicalLayout>
    </Content>
  );
}
