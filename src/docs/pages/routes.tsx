import ComponentAppbarPage from './components/appbar/page';
import ComponentButtonPage from './components/button/page';
import ComponentIconButtonPage from './components/icon-button/page';
import ComponentsPage from './components/page';
import HomePage from './home/page';
import NotFoundPage from './not-found/page';
import ReleaseNotesPage from './release-notes/page';
import ThemingPage from './theming/page';

export default function routes(path: string) {
  const baseURL = import.meta.env.BASE_URL;

  switch (path) {
    case `${baseURL}`:
      return <HomePage />;
    case `${baseURL}/theming`:
      return <ThemingPage />;
    case `${baseURL}/release-notes`:
      return <ReleaseNotesPage />;
    case `${baseURL}/components`:
      return <ComponentsPage />;
    case `${baseURL}/components/appbar`:
      return <ComponentAppbarPage />;
    case `${baseURL}/components/button`:
      return <ComponentButtonPage />;
    case `${baseURL}/components/icon-button`:
      return <ComponentIconButtonPage />;
    default:
      return <NotFoundPage />;
  }
}
