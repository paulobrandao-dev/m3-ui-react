import {
  Appbar,
  IconButton,
  useDialogControl,
  usePopoverControl,
  useScrollBehavior,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useState } from 'react';

export default function DocsTopbar() {
  const [isScrolled, setScrolledToggle] = useState<boolean>(false);
  const { showDialog } = useDialogControl();
  const { showPopover } = usePopoverControl();

  useScrollBehavior('#root', ({ atTop }) => setScrolledToggle(!atTop));

  return (
    <Appbar
      isScroll={isScrolled}
      navAction={<IconButton icon={<Icon icon="menu" />} />}
      variant="small"
      headline="M3 UI React"
      actions={
        <>
          <IconButton
            icon={<Icon icon="balance" />}
            aria-label="License"
            onClick={() => showDialog('dialog-license')}
          />
          <IconButton
            icon={<Icon icon="settings" />}
            aria-label="Settings"
            onClick={() => showPopover('settings-menu')}
          />
        </>
      }
    />
  );
}
