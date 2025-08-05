import { Link } from '@/docs/utils';
import { Card, ListItem, useMediaQuery } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';

export default function HomeSupportingPane() {
  const media = useMediaQuery();

  return (
    <Card
      variant="elevated"
      as="nav"
      flexbox={{
        direction: 'column',
        alignSelf: media.isLessThanMedium ? 'center' : 'flex-start',
      }}
      spacing={{ paddingBlock: 'sm' }}
    >
      <ListItem
        headline="Theming"
        supportingText="Customize the display of components"
        startElement={<Icon icon="palette" />}
        as={Link}
        to="/theming"
      />
      <ListItem
        headline="Components"
        supportingText="Building blocks for creating a user interface"
        startElement={<Icon icon="extension" />}
        as={Link}
        to="/components"
      />
      <ListItem
        headline="Hooks"
        supportingText="Functions to simplify your logic and improve code readability"
        startElement={<Icon icon="phishing" />}
        as={Link}
        to="/hooks"
      />
    </Card>
  );
}
