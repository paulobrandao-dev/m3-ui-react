import { NavLink } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import { BASE_PATH } from '../constants';
import { Link } from '../router';

export default function MainNavigation({
  isNavBar,
  isHorizontal,
}: Readonly<{ isNavBar?: boolean; isHorizontal?: boolean }>) {
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
        variant={isNavBar ? 'navbar' : 'navrail'}
        isHorizontal={isHorizontal}
        to={`${BASE_PATH}/`}
        label="Home"
        icon={<Icon symbol="home" isFilled={current === BASE_PATH} />}
        isActive={current === BASE_PATH}
      />
      <NavLink
        as={Link}
        variant={isNavBar ? 'navbar' : 'navrail'}
        isHorizontal={isHorizontal}
        to={`${BASE_PATH}/theming`}
        label="Theming"
        icon={
          <Icon
            symbol="format_paint"
            isFilled={current === `${BASE_PATH}/theming`}
          />
        }
        isActive={current === `${BASE_PATH}/theming`}
      />
      <NavLink
        as={Link}
        variant={isNavBar ? 'navbar' : 'navrail'}
        isHorizontal={isHorizontal}
        to={`${BASE_PATH}/components`}
        label="Components"
        icon={
          <Icon
            symbol="extension"
            isFilled={current.startsWith(`${BASE_PATH}/components`)}
          />
        }
        isActive={current.startsWith(`${BASE_PATH}/components`)}
      />
      <NavLink
        as={Link}
        variant={isNavBar ? 'navbar' : 'navrail'}
        isHorizontal={isHorizontal}
        to={`${BASE_PATH}/hooks`}
        label="Hooks"
        icon={
          <Icon
            symbol="phishing"
            isFilled={current.startsWith(`${BASE_PATH}/hooks`)}
          />
        }
        isActive={current.startsWith(`${BASE_PATH}/hooks`)}
      />
    </>
  );
}
