import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import { Font, NavLink } from '../../lib';
import { BASE_PATH } from '../constants';
import { Link } from '../router';

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
        to={`${BASE_PATH}/`}
        label="Home"
        icon={<Icon symbol="home" isFilled={current === `${BASE_PATH}/`} />}
        isActive={current === `${BASE_PATH}/`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/theming`}
        label="Theming"
        icon={
          <Icon
            symbol="format_paint"
            isFilled={current == `${BASE_PATH}/theming`}
          />
        }
        isActive={current == `${BASE_PATH}/theming`}
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
        to={`${BASE_PATH}/components/appbar`}
        label="Appbar"
        icon={
          <Icon
            symbol="toolbar"
            isFilled={current === `${BASE_PATH}/components/appbar`}
          />
        }
        isActive={current === `${BASE_PATH}/components/appbar`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/button`}
        label="Button"
        icon={
          <Icon
            symbol="buttons_alt"
            isFilled={current === `${BASE_PATH}/components/button`}
          />
        }
        isActive={current === `${BASE_PATH}/components/button`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/canonical-layout`}
        label="CanonicalLayout"
        icon={
          <Icon
            symbol="auto_awesome_mosaic"
            isFilled={current === `${BASE_PATH}/components/canonical-layout`}
          />
        }
        isActive={current === `${BASE_PATH}/components/canonical-layout`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/card`}
        label="Card"
        icon={
          <Icon
            symbol="cards"
            isFilled={current === `${BASE_PATH}/components/card`}
          />
        }
        isActive={current === `${BASE_PATH}/components/card`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/font`}
        label="Font"
        icon={
          <Icon
            symbol="text_format"
            isFilled={current === `${BASE_PATH}/components/font`}
          />
        }
        isActive={current === `${BASE_PATH}/components/font`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/icon`}
        label="Icon"
        icon={
          <Icon
            symbol="interests"
            isFilled={current === `${BASE_PATH}/components/icon`}
          />
        }
        isActive={current === `${BASE_PATH}/components/icon`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/icon-button`}
        label="IconButton"
        icon={
          <Icon
            symbol="add_circle"
            isFilled={current === `${BASE_PATH}/components/icon-button`}
          />
        }
        isActive={current === `${BASE_PATH}/components/icon-button`}
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
        to={`${BASE_PATH}/hooks/use-dialog-control`}
        label="useDialogControl"
        icon={
          <Icon
            symbol="picture_in_picture_center"
            isFilled={current === `${BASE_PATH}/hooks/use-dialog-control`}
          />
        }
        isActive={current === `${BASE_PATH}/hooks/use-dialog-control`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/hooks/use-media-query`}
        label="useMediaQuery"
        icon={
          <Icon
            symbol="responsive_layout"
            isFilled={current === `${BASE_PATH}/hooks/use-media-query`}
          />
        }
        isActive={current === `${BASE_PATH}/hooks/use-media-query`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/hooks/use-popover-control`}
        label="usePopoverControl"
        icon={
          <Icon
            symbol="arrow_drop_down_circle"
            isFilled={current === `${BASE_PATH}/hooks/use-popover-control`}
          />
        }
        isActive={current === `${BASE_PATH}/hooks/use-popover-control`}
        isHorizontal
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/hooks/use-scroll-behavior`}
        label="useScrollBehavior"
        icon={
          <Icon
            symbol="unfold_more"
            isFilled={current === `${BASE_PATH}/hooks/use-scroll-behavior`}
          />
        }
        isActive={current === `${BASE_PATH}/hooks/use-scroll-behavior`}
        isHorizontal
      />
    </>
  );
}
