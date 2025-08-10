import { Menu } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { applyThemeColorScheme } from '@/lib/theme';
import { useState } from 'react';
import { theme } from '../models';

export default function SelectThemeMenu() {
  const [currentTheme, setCurrentTheme] = useState(theme.current);

  return (
    <Menu
      id="select-theme"
      items={[
        {
          label: 'System',
          startElement: <Icon icon="routine" />,
          onClick: () => {
            theme.current = null;
            applyThemeColorScheme(theme.system, () => setCurrentTheme(null));
          },
          isSelected: !currentTheme,
        },
        {
          label: 'Light',
          startElement: <Icon icon="light_mode" />,
          onClick: () => {
            theme.current = 'light';
            applyThemeColorScheme('light', () => setCurrentTheme('light'));
          },
          isSelected: currentTheme == 'light',
        },
        {
          label: 'Dark',
          startElement: <Icon icon="dark_mode" />,
          onClick: () => {
            theme.current = 'dark';
            applyThemeColorScheme('dark', () => setCurrentTheme('dark'));
          },
          isSelected: currentTheme == 'dark',
        },
      ]}
    />
  );
}
