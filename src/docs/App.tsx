import { Content, useMediaQuery } from '../lib';
import './App.css';
import DocsNavRail from './components/NavRail';
import PageFooter from './components/PageFooter';
import DocsTopbar from './components/Topbar';
import { Router } from './router';

export default function Docs() {
  const media = useMediaQuery();

  return (
    <>
      {media.isLessThanExpanded ? <DocsTopbar /> : <DocsNavRail />}
      <Content as="main" spacing={{ paddingInline: 'md' }}>
        <Router />
        <PageFooter />
      </Content>
    </>
  );
}
