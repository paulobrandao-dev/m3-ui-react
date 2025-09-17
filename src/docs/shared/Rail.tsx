import {
  Content,
  Font,
  IconButton,
  NavRail,
  Tooltip,
  useMediaQuery,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import { Link } from '../pages/router';
import CompleteNavigation from './CompleteNavigation';
import MainNavigation from './MainNavigation';

export default function DocsNavRail() {
  const media = useMediaQuery();
  const [isOpen, openRail] = useState<boolean>(false);

  useEffect(() => {
    openRail(media.isGreaterThanLarge);
  }, [media.isGreaterThanLarge]);

  return (
    <NavRail
      isExpanded={isOpen}
      header={
        <Content
          role="toolbar"
          flexbox={{
            direction: 'column',
            alignItems: isOpen ? 'flex-start' : 'center',
            alignSelf: 'stretch',
          }}
          spacing={{ marginInline: isOpen ? 'lg' : undefined }}
        >
          <Tooltip text={isOpen ? 'Close' : 'Open'}>
            <IconButton
              onClick={() => openRail(current => !current)}
              aria-label={isOpen ? 'Close rail' : 'Open rail'}
            >
              <Icon symbol={isOpen ? 'menu_open' : 'menu'} />
            </IconButton>
          </Tooltip>
        </Content>
      }
      footer={
        <Font
          variant="label-small"
          as={Link}
          to="/release-notes"
          textColor="primary"
        >
          {import.meta.env.PACKAGE_VERSION}
        </Font>
      }
    >
      {isOpen ? <CompleteNavigation /> : <MainNavigation />}
    </NavRail>
  );
}
