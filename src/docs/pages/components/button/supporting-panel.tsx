import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function ComponentButtonPanel() {
  return (
    <SupportingNav>
      <CardLink
        link="/components/appbar"
        name="Appbar"
        description="App bars are positioned at the top of the screen, helping users navigate products."
        color="secondary"
        icon="toolbar"
      />
      <CardLink
        link="/components/canonical-layout"
        name="CanonicalLayout"
        description="Canonical layouts are standard designs that create typical screen arrangements for different window sizes."
        color="secondary"
        icon="auto_awesome_mosaic"
      />
      <CardLink
        link="/components/card"
        name="Card"
        description="Cards present information and options related to a specific subject."
        color="secondary"
        icon="cards"
      />
    </SupportingNav>
  );
}
