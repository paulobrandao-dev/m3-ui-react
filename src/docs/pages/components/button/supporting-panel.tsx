import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function ComponentButtonPanel() {
  return (
    <SupportingNav>
      <CardLink
        link="/components/appbar"
        name="Appbar"
        description="TO DO"
        color="secondary"
        icon="toolbar"
      />
      <CardLink
        link="/components/fab"
        name="FAB"
        description="Coming soon"
        color="secondary"
        icon="add_box"
      />
      <CardLink
        link="/components/icon-button"
        name="IconButton"
        description="Icon buttons streamline user actions through a single tap."
        color="secondary"
        icon="add_circle"
      />
    </SupportingNav>
  );
}
