import { Menu } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useSettings } from '../settings/hook';

export default function SettingsMenu() {
  const { isDarkMode, isFluidContent, toggleDarkMode, toggleFluidContent } =
    useSettings();

  return (
    <Menu
      id="settings-menu"
      disableCloseOnClick
      items={[
        {
          label: 'Dark mode',
          startElement: <Icon icon="dark_mode" />,
          endElement: <Icon icon={`toggle_${isDarkMode ? 'on' : 'off'}`} />,
          onClick: toggleDarkMode,
        },
        {
          label: 'Fluid content',
          startElement: <Icon icon="width_full" />,
          endElement: <Icon icon={`toggle_${isFluidContent ? 'on' : 'off'}`} />,
          onClick: toggleFluidContent,
        },
      ]}
    />
  );
}
