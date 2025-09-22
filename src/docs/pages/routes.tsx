import ComponentButtonPage from './components/button/page';
import ComponentIconButtonPage from './components/icon-button/page';
import ComponentsPage from './components/page';
import HomePage from './home/page';
import NotFoundPage from './not-found/page';
import ReleaseNotesPage from './release-notes/page';
import ThemingPage from './theming/page';

export default function routes(path: string) {
  switch (path) {
    case '/':
      return <HomePage />;
    case '/theming':
      return <ThemingPage />;
    case '/release-notes':
      return <ReleaseNotesPage />;
    case '/components':
      return <ComponentsPage />;
    case '/components/button':
      return <ComponentButtonPage />;
    case '/components/icon-button':
      return <ComponentIconButtonPage />;
    default:
      return <NotFoundPage />;
  }
}
