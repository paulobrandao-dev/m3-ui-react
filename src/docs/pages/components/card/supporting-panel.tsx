import CardLink from '@/docs/shared/CardLink';
import SupportingNav from '@/docs/shared/SupportingNav';

export default function ComponentCardPanel() {
  return (
    <SupportingNav>
      <CardLink
        link="/components/canonical-layout"
        name="CanonicalLayout"
        description="Canonical layouts are standard designs that create typical screen arrangements for different window sizes."
        icon="auto_awesome_mosaic"
      />
      <CardLink
        link="/components/card-media"
        name="CardMedia"
        description="CardMedia is used to display media, such as images or videos, within a card."
        icon="panorama"
      />
    </SupportingNav>
  );
}
