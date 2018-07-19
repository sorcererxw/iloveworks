import zhHans from "./zh-Hans"
import zhHant from "./zh-Hant"
import enUS from "./en-US"

export function mergeLangugae(...languages) {
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
        target = navigator.language
    }
    let result = {}
    switch (target) {
        case 'zh-Hans':
        case 'zh-CN':
            result = zhHans
            break
        case 'zh-HK':
        case 'zh-TW':
        case 'zh-MO':
        case 'zh-SG':
        case 'zh-Hant':
            result = zhHant
            break
        default:
            result = enUS
    }
    return mergeLangugae(enUS, result)
}