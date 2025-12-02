import { Content, useMediaQuery } from '../lib';
import './App.css';
import DocsNavBar from './shared/DocsNavBar';
import PageFooter from './shared/PageFooter';
import DocsNavRail from './shared/Rail';
import DocsTopbar from './shared/Topbar';
import { Router } from './router';
import { SettingsProvider } from './settings/provider';
import SettingsSidebar from './shared/SettingsSidebar';
import DialogLicense from './shared/DialogLicense';

export default function Docs() {
  const media = useMediaQuery();

  return (
    <SettingsProvider>
      {media.isLessThanExpanded ? <DocsTopbar /> : <DocsNavRail />}
      <Content as="div" role="presentation" spacing={{ paddingInline: 'md' }}>
        {media.isGreaterThanMedium && <DocsTopbar />}
        <Content
          as="div"
          role="presentation"
          flexbox={{
            direction: media.isGreaterThanMedium ? 'row' : 'column',
          }}
        >
          <Router />
          <SettingsSidebar />
        </Content>
        <PageFooter />
        <DialogLicense />
      </Content>
      {media.isLessThanExpanded && <DocsNavBar />}
    </SettingsProvider>
  );
}
