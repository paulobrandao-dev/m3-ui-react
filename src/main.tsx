import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './docs/App';
import settings from './docs/settings/model';
import { applyTheme } from './lib/theme';
import './styles/index.scss';

applyTheme({
  seedColor: '#4285F4',
  colorScheme: settings.theme,
  font: { title: '"Roboto"', content: '"Roboto"', code: '"Roboto Mono"' },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
