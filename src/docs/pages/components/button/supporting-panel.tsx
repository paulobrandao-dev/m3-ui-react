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
        link="/components/icon-button"
        name="IconButton"
        description="Icon buttons streamline user actions through a single tap."
        color="secondary"
        icon="add_circle"
      />
    </SupportingNav>
  );
}
