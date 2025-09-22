import {
  Appbar,
  IconButton,
  Tooltip,
  useDialogControl,
  useMediaQuery,
  useScrollBehavior,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useState } from 'react';
import { useSettings } from '../settings/hook';

export default function DocsTopbar() {
  const media = useMediaQuery();
  const [isScrolled, setScrolledToggle] = useState<boolean>(false);
  const { showDialog } = useDialogControl();
  const { subtitle, settingsIsOpen, toggleSettings } = useSettings();

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
          <Tooltip text="License">
            <IconButton
              aria-label="License"
              onClick={() => showDialog('dialog-license')}
            >
              <Icon symbol="balance" />
            </IconButton>
          </Tooltip>
          <Tooltip text="Settings">
            <IconButton
              variant="outlined"
              aria-label="Settings"
              isToggleable
              isActive={settingsIsOpen}
              onClick={toggleSettings}
            >
              <Icon symbol="settings" />
            </IconButton>
          </Tooltip>
        </>
      }
    />
  );
}
