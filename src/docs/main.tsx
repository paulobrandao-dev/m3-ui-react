import { applyTheme } from '@/lib/theme'
import '@/styles/m3-ui.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import settings from './settings/model'

applyTheme({
  seedColor: '#58c4dc',
  colorScheme: settings.theme,
  font: { title: '"Roboto"', content: '"Roboto"', code: '"Roboto Mono"' },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
