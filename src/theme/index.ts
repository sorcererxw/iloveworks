import { Black, Dark, White, Light, ChromeDark } from './themes'
import { ColorProperty } from 'csstype'

export interface Theme {
  primary: ColorProperty,
  primaryDark: ColorProperty,
  background: ColorProperty,
  accent: ColorProperty,
  textPrimary: ColorProperty,
  textSecondary: ColorProperty,
}

export function getTheme(theme?: string): Theme {
  switch (theme ? theme.toLowerCase() : '') {
    case 'light':
      return Light
    case 'dark':
      return Dark
    case 'white':
      return White
    case 'black':
      return Black
    case 'chrome-dark':
      return ChromeDark
    default:
      return Light
  }
}
