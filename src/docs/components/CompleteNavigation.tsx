import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import { Font, NavLink } from '../../lib';
import { Link } from '../pages/router';

export default function CompleteNavigation() {
  const [current, setCurrent] = useState<string>(window.location.pathname);

  useEffect(() => {
    const updateCurrent = () => setCurrent(window.location.pathname);
    updateCurrent();
    document.addEventListener('routechange', updateCurrent);
    window.addEventListener('popstate', updateCurrent);
    return () => {
      document.removeEventListener('routechange', updateCurrent);
      window.removeEventListener('popstate', updateCurrent);
    };
  }, []);

  return (
    <>
      <NavLink
        as={Link}
        variant="navrail"
        to="/"
        label="Home"
        icon={<Icon icon="home" />}
        isActive={current === '/'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/theming"
        label="Theming"
        icon={<Icon icon="palette" />}
        isActive={current == '/theming'}
        isHorizontal
      />
      <Font
        variant="title-small"
        spacing={{
          paddingInline: 'lg',
          paddingBlockStart: 'md',
          paddingBlockEnd: 'sm',
        }}
        role="presentation"
      >
        Components
      </Font>
      <NavLink
        as={Link}
        variant="navrail"
        to="/components/button"
        label="Button"
        icon={<Icon icon="buttons_alt" />}
        isActive={current === '/components/button'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/components/font"
        label="Font"
        icon={<Icon icon="text_format" />}
        isActive={current === '/components/font'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/components/icon"
        label="Icon"
        icon={<Icon icon="interests" />}
        isActive={current === '/components/icon'}
        isHorizontal
      />
      <Font
        variant="title-small"
        spacing={{
          paddingInline: 'lg',
          paddingBlockStart: 'md',
          paddingBlockEnd: 'sm',
        }}
        role="presentation"
      >
        Hooks
      </Font>
      <NavLink
        as={Link}
        variant="navrail"
        to="/hooks/use-dialog-control"
        label="useDialogControl"
        icon={<Icon icon="picture_in_picture_center" />}
        isActive={current === '/hooks/use-dialog-control'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/hooks/use-media-query"
        label="useMediaQuery"
        icon={<Icon icon="responsive_layout" />}
        isActive={current === '/hooks/use-media-query'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/hooks/use-popover-control"
        label="usePopoverControl"
        icon={<Icon icon="arrow_drop_down_circle" />}
        isActive={current === '/hooks/use-popover-control'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/hooks/use-scroll-behavior"
        label="useScrollBehavior"
        icon={<Icon icon="unfold_more" />}
        isActive={current === '/hooks/use-scroll-behavior'}
        isHorizontal
      />
    </>
  );
}
