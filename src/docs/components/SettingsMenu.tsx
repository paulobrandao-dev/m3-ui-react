import {
  Content,
  Font,
  IconButton,
  ListItem,
  Menu,
  usePopoverControl,
} from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useSettings } from '../settings/hook';

export default function SettingsMenu() {
  const { isDarkMode, isFluidContent, toggleDarkMode, toggleFluidContent } =
    useSettings();
  const { hidePopover } = usePopoverControl();

  return (
    <Menu id="settings-menu">
      <Content
        as="li"
        flexbox={{
          direction: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        spacing={{
          paddingBlock: 'sm',
          paddingInlineStart: 'lg',
          paddingInlineEnd: 'sm',
        }}
      >
        <Font variant="title-small">Settings</Font>
        <IconButton
          aria-label="Close settings menu"
          onClick={() => hidePopover('settings-menu')}
        >
          <Icon icon="close" />
        </IconButton>
      </Content>
      <ListItem
        headline="Dark mode"
        startElement={<Icon icon="dark_mode" />}
        endElement={<Icon icon={`toggle_${isDarkMode ? 'on' : 'off'}`} />}
        onClick={toggleDarkMode}
      />
      <ListItem
        headline="Fluid content"
        startElement={<Icon icon="width_full" />}
        endElement={<Icon icon={`toggle_${isFluidContent ? 'on' : 'off'}`} />}
        onClick={toggleFluidContent}
      />
    </Menu>
  );
}
