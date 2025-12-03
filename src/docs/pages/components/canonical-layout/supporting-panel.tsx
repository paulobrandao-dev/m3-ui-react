import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function ComponentCanonicalLayoutPanel() {
  return (
    <SupportingNav>
      <CardLink
        link="/components/button"
        name="Button"
        icon="buttons_alt"
        description="Buttons typically initiate the majority of actions within a UI."
      />
      <CardLink
        link="/components/card"
        name="Card"
        description="Cards present information and options related to a specific subject."
        icon="cards"
      />
    </SupportingNav>
  );
}
