import { describe, expect, it, vi } from 'vitest'
import { applyTheme } from './server'
import { createThemeVars } from './common'

vi.mock('./common', () => ({
  createThemeVars: vi.fn(
    () => `
    --font-settings: true;
    --color-seed: red;
    --color-scheme: dark;
    --color-primary: #ff0000;
  `,
  ),
}))

describe('Theme server utils', () => {
  it('applyTheme should parse the CSS variables string and return a React.CSSProperties object', () => {
    const params = {
      colorScheme: 'dark' as const,
      seedColor: 'red',
    }

    const result = applyTheme(params)

    expect(createThemeVars).toHaveBeenCalledWith(params)
    expect(result).toEqual({
      '--font-settings': 'true',
      '--color-seed': 'red',
      '--color-scheme': 'dark',
      '--color-primary': '#ff0000',
    })
  })

  it('applyTheme should handle empty or invalid rules gracefully', () => {
    vi.mocked(createThemeVars).mockReturnValueOnce(`
      --valid-prop: valid-value;
      invalid-rule-without-colon;
      ;
      --another-prop: another:value;
    `)

    const result = applyTheme({
      colorScheme: 'light' as const,
      seedColor: 'blue',
    })

    expect(result).toEqual({
      '--valid-prop': 'valid-value',
      '--another-prop': 'another:value',
    })
  })
})
