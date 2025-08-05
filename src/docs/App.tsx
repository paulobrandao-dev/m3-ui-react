import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { IconButton, Toolbar, useMediaQuery, useScrollBehavior } from '../lib';
import './App.css';
import CompleteNavigation from './CompleteNavigation';
import MainNavigation from './MainNavigation';
import { Router } from './utils';
import { Icon } from '@/lib/icon/Rounded';

export default function Docs() {
  const media = useMediaQuery();
  const [isScrolled, setScrolledToggle] = useState<boolean>(false);
  const [railIsOpen, openRail] = useState<boolean>(false);

  useEffect(() => {
    openRail(media.isGreaterThanLarge);
  }, [media.isGreaterThanLarge]);

  useScrollBehavior('#root', ({ atTop }) => setScrolledToggle(!atTop));

  return (
    <>
      {media.isLessThanMedium ? (
        <Toolbar
          as="header"
          bgColor={isScrolled ? 'surface-container' : 'surface'}
          dockedAt="top"
          startNode={<IconButton icon={<Icon icon="menu" />} />}
          elevation={isScrolled ? 1 : undefined}
        />
      ) : (
        <Toolbar
          dockedAt="left"
          bgColor="surface"
          startNode={
            <div
              id="toolbar_control"
              role="toolbar"
              className={clsx({ opened: railIsOpen })}
            >
              <IconButton
                onClick={() => openRail(current => !current)}
                icon={<Icon icon={railIsOpen ? 'menu_open' : 'menu'} />}
              />
            </div>
          }
          centerNode={
            <nav id="nav_rail" className={clsx({ opened: railIsOpen })}>
              {railIsOpen ? <CompleteNavigation /> : <MainNavigation />}
            </nav>
          }
        />
      )}
      <main>
        <Router />
      </main>
    </>
  );
}
