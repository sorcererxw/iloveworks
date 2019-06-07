import zhHans from './zhHans'
import zhHant from './zhHant'
import enUS from './enUS'
import I18n from './i18n'

export function getLocale(language: string): I18n {
  let target = undefined
  if (language !== undefined && language != null && language.length > 0) {
    target = language
  } else {
    // @ts-ignore
    target = navigator.userLanguage || navigator.language
  }
  switch (target.toLocaleLowerCase()) {
    case 'zh':
    case 'zh-hans':
    case 'zh-cn':
      return zhHans
    case 'zh-hk':
    case 'zh-tw':
    case 'zh-mo':
    case 'zh-sg':
    case 'zh-hant':
      return zhHant
    default:
      return enUS
  }
}
