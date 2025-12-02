import { useSettings } from '@/docs/settings/hook';
import CardIcon from '@/docs/shared/CardIcon';
import CardLink from '@/docs/shared/CardLink';
import PageHeader from '@/docs/shared/PageHeader';
import { CanonicalLayout, Content } from '@/lib';
import { useEffect } from 'react';

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
      <CanonicalLayout
        as="nav"
        variant="feed"
        gap={{ gap: 'sm' }}
        spacing={{ marginInline: 'auto', paddingBlock: 'xl' }}
        isFluid={isFluidContent}
      >
        <CardLink
          link="/components/appbar"
          name="Appbar"
          icon="toolbar"
          description="App bars are positioned at the top of the screen, helping users navigate products."
        />
        <CardLink
          link="/components/button"
          name="Button"
          icon="buttons_alt"
          description="Buttons typically initiate the majority of actions within a UI."
        />
        <CardLink
          link="/components/icon-button"
          name="IconButton"
          icon="add_circle"
          description="Icon buttons streamline user actions through a single tap."
        />
        <CardLink
          link="/components/nav-link"
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
