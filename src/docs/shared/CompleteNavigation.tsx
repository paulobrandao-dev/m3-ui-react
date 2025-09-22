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
        icon={<Icon symbol="home" isFilled={current === '/'} />}
        isActive={current === '/'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/theming"
        label="Theming"
        icon={<Icon symbol="format_paint" isFilled={current == '/theming'} />}
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
        to="/components/appbar"
        label="Appbar"
        icon={
          <Icon symbol="toolbar" isFilled={current === '/components/appbar'} />
        }
        isActive={current === '/components/appbar'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/components/button"
        label="Button"
        icon={
          <Icon
            symbol="buttons_alt"
            isFilled={current === '/components/button'}
          />
        }
        isActive={current === '/components/button'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/components/font"
        label="Font"
        icon={
          <Icon
            symbol="text_format"
            isFilled={current === '/components/font'}
          />
        }
        isActive={current === '/components/font'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/components/icon"
        label="Icon"
        icon={
          <Icon symbol="interests" isFilled={current === '/components/icon'} />
        }
        isActive={current === '/components/icon'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/components/icon-button"
        label="IconButton"
        icon={
          <Icon
            symbol="add_circle"
            isFilled={current === '/components/icon-button'}
          />
        }
        isActive={current === '/components/icon-button'}
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
        icon={
          <Icon
            symbol="picture_in_picture_center"
            isFilled={current === '/hooks/use-dialog-control'}
          />
        }
        isActive={current === '/hooks/use-dialog-control'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/hooks/use-media-query"
        label="useMediaQuery"
        icon={
          <Icon
            symbol="responsive_layout"
            isFilled={current === '/hooks/use-media-query'}
          />
        }
        isActive={current === '/hooks/use-media-query'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/hooks/use-popover-control"
        label="usePopoverControl"
        icon={
          <Icon
            symbol="arrow_drop_down_circle"
            isFilled={current === '/hooks/use-popover-control'}
          />
        }
        isActive={current === '/hooks/use-popover-control'}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to="/hooks/use-scroll-behavior"
        label="useScrollBehavior"
        icon={
          <Icon
            symbol="unfold_more"
            isFilled={current === '/hooks/use-scroll-behavior'}
          />
        }
        isActive={current === '/hooks/use-scroll-behavior'}
        isHorizontal
      />
    </>
  );
}
