import {
  Content,
  Font,
  IconButton,
  Toolbar,
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
          <IconButton
            onClick={() => openRail(current => !current)}
            icon={<Icon icon={isOpen ? 'menu_open' : 'menu'} />}
          />
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
            <IconButton
              icon={<Icon icon="balance" />}
              aria-label="License"
              onClick={() => showDialog('dialog-license')}
            />
            <IconButton
              icon={<Icon icon="palette" />}
              aria-label="Theme"
              onClick={e =>
                showPopover(
                  'select-theme',
                  media.isGreaterThanCompact ? e.currentTarget : undefined,
                )
              }
            />
          </Content>
          <Font scale="label-small">{import.meta.env.PACKAGE_VERSION}</Font>
        </>
      }
    />
  );
}
