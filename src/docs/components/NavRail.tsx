import {
  Content,
  Font,
  IconButton,
  Toolbar,
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
    <Toolbar
      dockedAt="left"
      bgColor="surface"
      startNode={
        <Content
          role="toolbar"
          flexbox={{
            direction: 'row',
            alignItems: 'center',
            justifyContent: isOpen ? 'flex-start' : 'center',
            alignSelf: 'stretch',
          }}
          spacing={{ paddingInlineStart: isOpen ? 'lg' : undefined }}
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
      centerNode={
        <Content
          as="nav"
          flexbox={{
            direction: 'column',
            alignItems: isOpen ? 'flex-start' : undefined,
            rowGap: isOpen ? 'none' : 'md',
          }}
        >
          {isOpen ? <CompleteNavigation /> : <MainNavigation />}
        </Content>
      }
      endNode={
        <>
          <Content
            role="toolbar"
            flexbox={{
              direction: isOpen ? 'row' : 'column',
              gap: 'sm',
              alignItems: 'center',
            }}
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
    />
  );
}
