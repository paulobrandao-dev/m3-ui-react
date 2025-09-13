import { NavBar, useMediaQuery } from '@/lib';
import { useMemo } from 'react';
import MainNavigation from './MainNavigation';

export default function DocsNavBar() {
  const media = useMediaQuery();

  const isHorizontal = useMemo(
    () => media.isGreaterThanCompact,
    [media.isGreaterThanCompact],
  );

  return (
    <NavBar isHorizontalLinks={isHorizontal}>
      <MainNavigation isNavBar isHorizontal={isHorizontal} />
    </NavBar>
  );
}
