import {
  Content,
  Font,
  IconButton,
  ListItem,
  Menu,
  Switch,
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
          <Icon symbol="close" />
        </IconButton>
      </Content>
      <ListItem
        headline="Dark mode"
        endElement={
          <Switch
            checked={isDarkMode}
            icon={<Icon symbol="dark_mode" size={16} isFilled />}
          />
        }
        onClick={toggleDarkMode}
      />
      <ListItem
        headline="Fluid content"
        endElement={
          <Switch
            checked={isFluidContent}
            icon={<Icon symbol="width_full" size={16} isFilled />}
          />
        }
        onClick={toggleFluidContent}
      />
    </Menu>
  );
}
