import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function HookDialogControlPanel() {
  return (
    <SupportingNav>
      <CardLink
        link="/"
        name="Installation"
        description="How to install M3 UI React"
        icon="deployed_code_update"
      />
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
    </SupportingNav>
  );
}
