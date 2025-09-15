import { Content, Font, SideSheet, Switch, useMediaQuery } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import { useSettings } from '../settings/hook';

export default function SettingsSidebar() {
  const media = useMediaQuery();
  const { isDarkMode, isFluidContent, toggleDarkMode, toggleFluidContent } =
    useSettings();
  const [isOpen, toggle] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('togglesettings', () => toggle(!isOpen));
  }, [isOpen]);

  return (
    <SideSheet
      variant={media.isGreaterThanMedium ? 'standard' : 'modal'}
      headline="Settings"
      closeAction={{
        icon: <Icon symbol="right_panel_close" />,
        onClose: () => toggle(false),
      }}
      isOpen={isOpen}
    >
      <Content
        as="div"
        flexbox={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        spacing={{ paddingBlock: 'md' }}
      >
        <Font variant="body-medium">Dark mode</Font>
        <Switch
          checked={isDarkMode}
          icon={<Icon symbol="dark_mode" size={16} isFilled />}
          onChange={() => toggleDarkMode()}
        />
      </Content>
      <Content
        as="div"
        flexbox={{
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        spacing={{ paddingBlock: 'md' }}
      >
        <Font variant="body-medium">Fluid content</Font>
        <Switch
          checked={isFluidContent}
          icon={<Icon symbol="width_full" size={16} isFilled />}
          onChange={() => toggleFluidContent()}
        />
      </Content>
    </SideSheet>
  );
}
