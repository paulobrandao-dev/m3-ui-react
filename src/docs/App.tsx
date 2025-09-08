import { Content, useMediaQuery } from '../lib';
import './App.css';
import DocsNavRail from './components/NavRail';
import PageFooter from './components/PageFooter';
import DocsTopbar from './components/Topbar';
import { Router } from './pages/router';
import { SettingsProvider } from './settings/provider';

export default function Docs() {
  const media = useMediaQuery();

  return (
    <SettingsProvider>
      {media.isLessThanExpanded ? <DocsTopbar /> : <DocsNavRail />}
      <Content as="main" spacing={{ paddingInline: 'md' }}>
        <Router />
        <PageFooter />
      </Content>
    </SettingsProvider>
  );
}
