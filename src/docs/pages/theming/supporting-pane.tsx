import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function ThemingSupportingPane() {
  return (
    <SupportingNav>
      <CardLink
        link="/"
        name="Installation"
        description="How to install M3 UI React"
        icon="deployed_code_update"
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
