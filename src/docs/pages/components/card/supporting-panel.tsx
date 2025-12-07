import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function ComponentCardPanel() {
  return (
    <SupportingNav>
      <CardLink
        link="/components/appbar"
        name="Appbar"
        description="App bars are positioned at the top of the screen, helping users navigate products."
        icon="toolbar"
      />
      <CardLink
        link="/components/button"
        name="Button"
        icon="buttons_alt"
        description="Buttons typically initiate the majority of actions within a UI."
      />
      <CardLink
        link="/components/canonical-layout"
        name="CanonicalLayout"
        description="Canonical layouts are standard designs that create typical screen arrangements for different window sizes."
        icon="auto_awesome_mosaic"
      />
    </SupportingNav>
  );
}
