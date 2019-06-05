import zhHans from "./zh-Hans"
import zhHant from "./zh-Hant"
import enUS from "./en-US"

export function mergeLanguage(...languages) {
  const output = {}
  for (let lang of languages) {
    for (let key in lang) {
      output[key + ''] = lang[key + '']
    }
  }
  return output
}

export function getLocale(language) {
  let target = undefined
  if (language !== undefined && language != null && language.length > 0) {
    target = language
  } else {
    target = navigator.userLanguage || navigator.language
  }
  let result = {}
  switch (target.toLocaleLowerCase()) {
    case 'zh':
    case 'zh-hans':
    case 'zh-cn':
      result = zhHans
      break
    case 'zh-hk':
    case 'zh-tw':
    case 'zh-mo':
    case 'zh-sg':
    case 'zh-hant':
      result = mergeLanguage(zhHans, zhHant)
      break
    default:
      result = enUS
  }
  return mergeLanguage(enUS, result)
}
