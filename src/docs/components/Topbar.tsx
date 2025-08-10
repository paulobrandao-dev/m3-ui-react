import {
  IconButton,
  Toolbar,
  useDialogControl,
  useMediaQuery,
  usePopoverControl,
  useScrollBehavior,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useState } from 'react';

export default function DocsTopbar() {
  const media = useMediaQuery();
  const [isScrolled, setScrolledToggle] = useState<boolean>(false);
  const { showDialog } = useDialogControl();
  const { showPopover } = usePopoverControl();

  useScrollBehavior('#root', ({ atTop }) => setScrolledToggle(!atTop));

  return (
    <Toolbar
      as="header"
      dockedAt="top"
      bgColor={isScrolled ? 'surface-container' : 'surface'}
      elevation={isScrolled ? 1 : undefined}
      startNode={<IconButton icon={<Icon icon="menu" />} />}
      endNode={
        <>
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
        </>
      }
    />
  );
}
