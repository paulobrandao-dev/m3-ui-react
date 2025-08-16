import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './docs/App';
import { theme } from './docs/models';
import { applyTheme } from './lib/theme';
import './styles/index.scss';

applyTheme({
  seedColor: '#4285F4',
  colorScheme: theme.current || theme.system,
  font: { title: 'Roboto', content: 'Roboto', code: 'Roboto Mono' },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
