import { Icon } from '@/lib/icon/Rounded';
import { useEffect, useState } from 'react';
import {
  Content,
  IconButton,
  Toolbar,
  useMediaQuery,
  useScrollBehavior,
} from '../lib';
import './App.css';
import DocsNavRail from './components/NavRail';
import PageFooter from './components/PageFooter';
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
        <DocsNavRail isOpen={railIsOpen} openRail={openRail} />
      )}
      <Content as="main" spacing={{ paddingInline: 'md' }}>
        <Router />
        <PageFooter />
      </Content>
    </>
  );
}
