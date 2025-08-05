import { Icon } from '@/lib/icon/Rounded';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import {
  Button,
  Divider,
  Font,
  IconButton,
  Toolbar,
  useMediaQuery,
  useScrollBehavior,
} from '../lib';
import './App.css';
import CompleteNavigation from './CompleteNavigation';
import MainNavigation from './MainNavigation';
import { Router } from './utils';

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
      {media.isLessThanExpanded ? (
        <Toolbar
          as="header"
          dockedAt="top"
          bgColor={isScrolled ? 'surface-container' : 'surface'}
          elevation={isScrolled ? 1 : undefined}
          startNode={<IconButton icon={<Icon icon="menu" />} />}
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
          endNode={
            <>
              <Font scale="label-small">{import.meta.env.PACKAGE_VERSION}</Font>
            </>
          }
        />
      )}
      <main>
        <Router />
        <footer id="app_footer">
          <Divider />
          <div>
            <Button
              as="a"
              label="NPM package"
              icon={<Icon icon="sdk" />}
              href="https://www.npmjs.com/package/@paulobrandao/react-material"
            />
            <Button
              as="a"
              label="Repository"
              icon={<Icon icon="code" />}
              href="https://github.com/paulobrandao-dev/react-material"
            />
            <Button
              as="a"
              label="Bug report"
              icon={<Icon icon="bug_report" />}
              href="https://github.com/paulobrandao-dev/react-material/issues"
            />
          </div>
        </footer>
      </main>
    </>
  );
}
