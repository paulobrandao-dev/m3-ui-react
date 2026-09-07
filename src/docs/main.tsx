import { applyTheme } from '@/lib/theme';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import settings from './settings/model';
import '@/styles/index.scss';

applyTheme({
  seedColor: '#58c4dc',
  colorScheme: settings.theme,
  font: { title: '"Roboto"', content: '"Roboto"', code: '"Roboto Mono"' },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
