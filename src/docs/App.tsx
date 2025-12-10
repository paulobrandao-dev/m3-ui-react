import { Content, useMediaQuery } from '../lib';
import './App.css';
import { Router } from './router';
import { SettingsProvider } from './settings/provider';
import DialogLicense from './shared/DialogLicense';
import DocsNavBar from './shared/DocsNavBar';
import PageFooter from './shared/PageFooter';
import DocsNavRail from './shared/Rail';
import SettingsSidebar from './shared/SettingsSidebar';
import DocsTopbar from './shared/Topbar';

export default function Docs() {
  const media = useMediaQuery();

  return (
    <SettingsProvider>
      <DocsNavRail />
      {media.isLessThanExpanded && <DocsTopbar />}
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
