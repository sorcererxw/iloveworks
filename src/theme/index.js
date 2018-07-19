import {Black, Dark, White, Light} from './themes'

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
        default:
            return Light
    }
}