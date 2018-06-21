import zh_TW from "./zh_TW"
import en_US from "./en_US"
import zh_CN from "./zh_CN"

const merge = (...locales) => {
    console.log(locales)
    if (locales === undefined || locales.length === undefined) return undefined
    const result = {}
    for (let locale of locales) {
        for (let item in locale) {
            if (locale.hasOwnProperty(item)) {
                result[item] = locale[item]
            }
        }
    }
    return result
}

export const getLocale = (language) => {
    let locale = language
    if (language === undefined || language === '') {
        locale = navigator.language
    }
    switch (locale) {
        case 'zh_TW':
            return {
                locale: 'zh',
                messages: merge(en_US, zh_CN, zh_TW)
            }
        case 'zh_CN':
            return {
                locale: 'zh',
                messages: merge(en_US, zh_CN)
            }
        case 'en_US':
            return {
                locale: 'en',
                messages: merge(en_US)
            }
        default:
            return {
                locale: 'en',
                messages: merge(en_US)
            }
    }
}