import { NavLink } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import { Link } from '../pages/router';

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
        to="/"
        label="Home"
        icon={<Icon symbol="home" isFilled={current === '/'} />}
        isActive={current === '/'}
      />
      <NavLink
        as={Link}
        variant={isNavBar ? 'navbar' : 'navrail'}
        isHorizontal={isHorizontal}
        to="/theming"
        label="Theming"
        icon={<Icon symbol="palette" isFilled={current === '/theming'} />}
        isActive={current === '/theming'}
      />
      <NavLink
        as={Link}
        variant={isNavBar ? 'navbar' : 'navrail'}
        isHorizontal={isHorizontal}
        to="/components"
        label="Components"
        icon={
          <Icon
            symbol="extension"
            isFilled={current.startsWith('/components')}
          />
        }
        isActive={current.startsWith('/components')}
      />
      <NavLink
        as={Link}
        variant={isNavBar ? 'navbar' : 'navrail'}
        isHorizontal={isHorizontal}
        to="/hooks"
        label="Hooks"
        icon={
          <Icon symbol="phishing" isFilled={current.startsWith('/hooks')} />
        }
        isActive={current.startsWith('/hooks')}
      />
    </>
  );
}
