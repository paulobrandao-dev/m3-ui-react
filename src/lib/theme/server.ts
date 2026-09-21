import { ThemeProps, createThemeVars } from './common'
import React from 'react'

export function applyTheme(params: ThemeProps): React.CSSProperties {
  const vars = createThemeVars(params)
  const styles: Record<string, string> = {}

  vars.split(';').forEach(rule => {
    const colonIndex = rule.indexOf(':')
    if (colonIndex !== -1) {
      const key = rule.slice(0, colonIndex).trim()
      const value = rule.slice(colonIndex + 1).trim()
      if (key) {
        styles[key] = value
      }
    }
  })

  return styles as React.CSSProperties
}
