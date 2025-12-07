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
import { navigate } from '../utils';
import { BASE_PATH } from '../constants';

export default function DocsTopbar() {
  const media = useMediaQuery();
  const [isScrolled, setScrolledToggle] = useState<boolean>(false);
  const { showModal } = useDialogControl('dialog-license');
  const { subtitle, settingsIsOpen, navAction, toggleSettings } = useSettings();

  useScrollBehavior('#root', ({ atTop }) => setScrolledToggle(!atTop));

  return (
    <Appbar
      isScroll={media.isLessThanExpanded && isScrolled}
      variant="small"
      headline="M3 UI React"
      subtitle={subtitle}
      isFluid
      navAction={
        navAction ? (
          <IconButton
            onClick={() => navigate(`${BASE_PATH}${navAction}`)}
            aria-label="Go back"
          >
            <Icon symbol="arrow_back" />
          </IconButton>
        ) : undefined
      }
      actions={
        <>
          {media.isLessThanExpanded && (
            <Tooltip text="Release notes">
              <IconButton
                aria-label="Release notes"
                onClick={() => navigate(`${BASE_PATH}/release-notes`)}
              >
                <Icon symbol="release_alert" />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip text="License">
            <IconButton aria-label="License" onClick={showModal}>
              <Icon symbol="license" />
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
