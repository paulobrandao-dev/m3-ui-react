import { Navlink } from '@/lib';
import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import { Link } from '../pages/router';

export default function MainNavigation() {
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
      <Navlink
        as={Link}
        variant="navrail"
        to="/"
        label="Home"
        icon={<Icon icon="home" />}
        isActive={current === '/'}
      />
      <Navlink
        as={Link}
        variant="navrail"
        to="/theming"
        label="Theming"
        icon={<Icon icon="palette" />}
        isActive={current === '/theming'}
      />
      <Navlink
        as={Link}
        variant="navrail"
        to="/components"
        label="Components"
        icon={<Icon icon="extension" />}
        isActive={current.startsWith('/components')}
      />
      <Navlink
        as={Link}
        variant="navrail"
        to="/hooks"
        label="Hooks"
        icon={<Icon icon="phishing" />}
        isActive={current.startsWith('/hooks')}
      />
    </>
  );
}
