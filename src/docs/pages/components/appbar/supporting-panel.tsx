import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function ComponentAppbarPanel() {
  return (
    <SupportingNav>
      <CardLink
        link="/components/button"
        name="Button"
        description="Buttons typically initiate the majority of actions within a UI."
        color="secondary"
        icon="buttons_alt"
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
