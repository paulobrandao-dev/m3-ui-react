import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function HomeSupportingPane() {
  return (
    <SupportingNav>
      <CardLink
        link="/theming"
        name="Theming"
        description="Customize the display of components"
        icon="format_paint"
      />
      <CardLink
        link="/components"
        name="Components"
        description="Building blocks for creating a user interface"
        icon="extension"
      />
      <CardLink
        link="/hooks"
        name="Hooks"
        description="Functions to simplify your logic and improve code readability"
        icon="phishing"
      />
    </SupportingNav>
  );
}
