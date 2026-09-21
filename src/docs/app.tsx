import './app.css'
import { Layout } from './layout'
import { Router } from './router'
import { SettingsProvider } from './settings/provider'

export default function Docs() {
  return (
    <SettingsProvider>
      <Layout>
        <Router />
      </Layout>
    </SettingsProvider>
  )
}
