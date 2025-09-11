import {
  Content,
  Font,
  IconButton,
  NavRail,
  Tooltip,
  useDialogControl,
  useMediaQuery,
  usePopoverControl,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import CompleteNavigation from './CompleteNavigation';
import MainNavigation from './MainNavigation';

export default function DocsNavRail() {
  const media = useMediaQuery();
  const { showDialog } = useDialogControl();
  const { showPopover } = usePopoverControl();
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
              icon={<Icon icon={isOpen ? 'menu_open' : 'menu'} />}
              aria-label={isOpen ? 'Close rail' : 'Open rail'}
            />
          </Tooltip>
        </Content>
      }
      footer={
        <>
          <Content
            role="toolbar"
            flexbox={{ direction: isOpen ? 'row' : 'column' }}
          >
            <Tooltip text="License">
              <IconButton
                icon={<Icon icon="balance" />}
                aria-label="License"
                onClick={() => showDialog('dialog-license')}
              />
            </Tooltip>
            <Tooltip text="Settings">
              <IconButton
                icon={<Icon icon="settings" />}
                aria-label="Settings"
                onClick={e =>
                  showPopover(
                    'settings-menu',
                    media.isGreaterThanCompact ? e.currentTarget : undefined,
                  )
                }
              />
            </Tooltip>
          </Content>
          <Font scale="label-small">{import.meta.env.PACKAGE_VERSION}</Font>
        </>
      }
    >
      {isOpen ? <CompleteNavigation /> : <MainNavigation />}
    </NavRail>
  );
}
