import { BASE_PATH } from './constants';
import ComponentAppbarPage from './pages/components/appbar/page';
import ComponentButtonPage from './pages/components/button/page';
import ComponentCanonicalLayoutPage from './pages/components/canonical-layout/page';
import ComponentCardPage from './pages/components/card/page';
import ComponentIconButtonPage from './pages/components/icon-button/page';
import ComponentsPage from './pages/components/page';
import HomePage from './pages/home/page';
import HooksPage from './pages/hooks/page';
import NotFoundPage from './pages/not-found/page';
import ReleaseNotesPage from './pages/release-notes/page';
import ThemingPage from './pages/theming/page';

export default function routes(path: string) {
  switch (path) {
    case `${BASE_PATH}/`:
      return <HomePage />;
    case `${BASE_PATH}/theming`:
      return <ThemingPage />;
    case `${BASE_PATH}/release-notes`:
      return <ReleaseNotesPage />;
    case `${BASE_PATH}/components`:
      return <ComponentsPage />;
    case `${BASE_PATH}/components/appbar`:
      return <ComponentAppbarPage />;
    case `${BASE_PATH}/components/button`:
      return <ComponentButtonPage />;
    case `${BASE_PATH}/components/canonical-layout`:
      return <ComponentCanonicalLayoutPage />;
    case `${BASE_PATH}/components/card`:
      return <ComponentCardPage />;
    case `${BASE_PATH}/components/icon-button`:
      return <ComponentIconButtonPage />;
    case `${BASE_PATH}/hooks`:
      return <HooksPage />;
    default:
      return <NotFoundPage />;
  }
}
