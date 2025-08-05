import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import { Font, Navlink } from '../lib';
import { Link } from './utils';

export default function CompleteNavigation() {
  const [current, setCurrent] = useState<string>(window.location.pathname);

  useEffect(() => {
    const updateCurrent = () => setCurrent(window.location.pathname);
    updateCurrent();
    document.addEventListener('routechange', updateCurrent);
    return () => {
      document.removeEventListener('routechange', updateCurrent);
    };
  }, []);

  return (
    <>
      <Navlink
        as={Link}
        to="/"
        label="Home"
        icon={<Icon icon="home" />}
        isActive={current === '/'}
        isHorizontal
      />
      <Navlink
        as={Link}
        to="/theming"
        label="Theming"
        icon={<Icon icon="palette" />}
        isActive={current == '/theming'}
        isHorizontal
      />
      <Font
        scale="title-small"
        spacing={{
          paddingInline: 'lg',
          paddingBlockStart: 'md',
          paddingBlockEnd: 'sm',
        }}
        role="presentation"
      >
        Components
      </Font>
      <Navlink
        as={Link}
        to="/components/button"
        label="Button"
        icon={<Icon icon="buttons_alt" />}
        isActive={current === '/components/button'}
        isHorizontal
      />
      <Navlink
        as={Link}
        to="/components/font"
        label="Font"
        icon={<Icon icon="text_format" />}
        isActive={current === '/components/font'}
        isHorizontal
      />
      <Navlink
        as={Link}
        to="/components/icon"
        label="Icon"
        icon={<Icon icon="interests" />}
        isActive={current === '/components/icon'}
        isHorizontal
      />
      <Font
        scale="title-small"
        spacing={{
          paddingInline: 'lg',
          paddingBlockStart: 'md',
          paddingBlockEnd: 'sm',
        }}
        role="presentation"
      >
        Hooks
      </Font>
      <Navlink
        as={Link}
        to="/hooks/use-dialog-control"
        label="useDialogControl"
        icon={<Icon icon="picture_in_picture_center" />}
        isActive={current === '/hooks/use-dialog-control'}
        isHorizontal
      />
      <Navlink
        as={Link}
        to="/hooks/use-media-query"
        label="useMediaQuery"
        icon={<Icon icon="responsive_layout" />}
        isActive={current === '/hooks/use-media-query'}
        isHorizontal
      />
      <Navlink
        as={Link}
        to="/hooks/use-popover-control"
        label="usePopoverControl"
        icon={<Icon icon="arrow_drop_down_circle" />}
        isActive={current === '/hooks/use-popover-control'}
        isHorizontal
      />
      <Navlink
        as={Link}
        to="/hooks/use-scroll-behavior"
        label="useScrollBehavior"
        icon={<Icon icon="unfold_more" />}
        isActive={current === '/hooks/use-scroll-behavior'}
        isHorizontal
      />
    </>
  );
}
