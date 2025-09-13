import {
  Appbar,
  IconButton,
  useDialogControl,
  useMediaQuery,
  usePopoverControl,
  useScrollBehavior,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';

export default function DocsTopbar() {
  const media = useMediaQuery();
  const [isScrolled, setScrolledToggle] = useState<boolean>(false);
  const { showDialog } = useDialogControl();
  const { showPopover } = usePopoverControl();
  const [subtitle, setSubtitle] = useState<string>();

  useEffect(() => {
    document.addEventListener('setsubtitle', e =>
      setSubtitle(e.detail.subtitle),
    );
  }, []);

  useScrollBehavior('#root', ({ atTop }) => setScrolledToggle(!atTop));

  return (
    <Appbar
      isScroll={media.isLessThanExpanded && isScrolled}
      variant="small"
      headline="M3 UI React"
      subtitle={subtitle}
      isFluid
      actions={
        <>
          <IconButton
            aria-label="License"
            onClick={() => showDialog('dialog-license')}
          >
            <Icon icon="balance" />
          </IconButton>
          <IconButton
            aria-label="Settings"
            onClick={e =>
              showPopover(
                'settings-menu',
                media.isGreaterThanMedium ? e.currentTarget : undefined,
              )
            }
          >
            <Icon icon="settings" />
          </IconButton>
        </>
      }
    />
  );
}
