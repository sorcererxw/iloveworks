import {Black, Dark, White, Light, ChromeDark} from './themes'

export default function getTheme(theme) {
  if (theme === undefined) return Light
  switch (theme.toLowerCase()) {
    case 'light':
      return Light
    case 'dark':
      return Dark
    case 'white':
      return White
    case 'black':
      return Black
    // case 'chrome-dark':
    //   return ChromeDark
    default:
      return Light
  }
}
