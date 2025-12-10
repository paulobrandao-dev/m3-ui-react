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
            isFilled={current === `${BASE_PATH}/theming`}
          />
        }
        isActive={current === `${BASE_PATH}/theming`}
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
        to={`${BASE_PATH}/components/card-media`}
        label="CardMedia"
        icon={
          <Icon
            symbol="panorama"
            isFilled={current === `${BASE_PATH}/components/card-media`}
          />
        }
        isActive={current === `${BASE_PATH}/components/card-media`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/checkbox`}
        label="Checkbox"
        icon={
          <Icon
            symbol="check_box"
            isFilled={current === `${BASE_PATH}/components/checkbox`}
          />
        }
        isActive={current === `${BASE_PATH}/components/checkbox`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/chip`}
        label="Chip"
        icon={
          <Icon
            symbol="voting_chip"
            isFilled={current === `${BASE_PATH}/components/chip`}
          />
        }
        isActive={current === `${BASE_PATH}/components/chip`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/content`}
        label="Content"
        icon={
          <Icon
            symbol="margin"
            isFilled={current === `${BASE_PATH}/components/content`}
          />
        }
        isActive={current === `${BASE_PATH}/components/content`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/dialog`}
        label="Dialog"
        icon={
          <Icon
            symbol="dialogs"
            isFilled={current === `${BASE_PATH}/components/dialog`}
          />
        }
        isActive={current === `${BASE_PATH}/components/dialog`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/divider`}
        label="Divider"
        icon={
          <Icon
            symbol="horizontal_rule"
            isFilled={current === `${BASE_PATH}/components/divider`}
          />
        }
        isActive={current === `${BASE_PATH}/components/divider`}
        isHorizontal
        isDisabled
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
        isDisabled
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
        isDisabled
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
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/input`}
        label="Input"
        icon={
          <Icon
            symbol="text_fields_alt"
            isFilled={current === `${BASE_PATH}/components/input`}
          />
        }
        isActive={current === `${BASE_PATH}/components/input`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/list-item`}
        label="ListItem"
        icon={
          <Icon
            symbol="lists"
            isFilled={current === `${BASE_PATH}/components/list-item`}
          />
        }
        isActive={current === `${BASE_PATH}/components/list-item`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/menu`}
        label="Menu"
        icon={
          <Icon
            symbol="dropdown"
            isFilled={current === `${BASE_PATH}/components/menu`}
          />
        }
        isActive={current === `${BASE_PATH}/components/menu`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/nav-bar`}
        label="NavBar"
        icon={
          <Icon
            symbol="bottom_navigation"
            isFilled={current === `${BASE_PATH}/components/nav-bar`}
          />
        }
        isActive={current === `${BASE_PATH}/components/nav-bar`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/nav-link`}
        label="NavLink"
        icon={
          <Icon
            symbol="link"
            isFilled={current === `${BASE_PATH}/components/nav-link`}
          />
        }
        isActive={current === `${BASE_PATH}/components/nav-link`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/nav-rail`}
        label="NavRail"
        icon={
          <Icon
            symbol="side_navigation"
            isFilled={current === `${BASE_PATH}/components/nav-rail`}
          />
        }
        isActive={current === `${BASE_PATH}/components/nav-rail`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/select`}
        label="Select"
        icon={
          <Icon
            symbol="list_alt"
            isFilled={current === `${BASE_PATH}/components/select`}
          />
        }
        isActive={current === `${BASE_PATH}/components/select`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/side-sheet`}
        label="SideSheet"
        icon={
          <Icon
            symbol="view_sidebar"
            isFilled={current === `${BASE_PATH}/components/side-sheet`}
          />
        }
        isActive={current === `${BASE_PATH}/components/side-sheet`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/switch`}
        label="Switch"
        icon={
          <Icon
            symbol="switches"
            isFilled={current === `${BASE_PATH}/components/switch`}
          />
        }
        isActive={current === `${BASE_PATH}/components/switch`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/components/tooltip`}
        label="Tooltip"
        icon={
          <Icon
            symbol="tooltip"
            isFilled={current === `${BASE_PATH}/components/tooltip`}
          />
        }
        isActive={current === `${BASE_PATH}/components/tooltip`}
        isHorizontal
        isDisabled
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
        isDisabled
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
        isDisabled
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
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        to={`${BASE_PATH}/hooks/use-theme-colors`}
        label="useThemeColors"
        icon={
          <Icon
            symbol="colors"
            isFilled={current === `${BASE_PATH}/hooks/use-theme-colors`}
          />
        }
        isActive={current === `${BASE_PATH}/hooks/use-theme-colors`}
        isHorizontal
        isDisabled
      />
      <NavLink
        as={Link}
        variant="navrail"
        isHorizontal
        to={`${BASE_PATH}/release-notes`}
        label="Changelog"
        icon={
          <Icon
            symbol="release_alert"
            isFilled={current === `${BASE_PATH}/release-notes`}
          />
        }
        isActive={current === `${BASE_PATH}/release-notes`}
      />
    </>
  );
}
