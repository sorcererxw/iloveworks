import {UPDATE_LANGUAGE, UPDATE_SLOGAN, UPDATE_THEME} from "../ActionTypes"

export const updateLanguage = language => ({
    type: UPDATE_LANGUAGE,
    language
})

export const updateTheme = theme => ({
    type: UPDATE_THEME,
    theme
})

export const updateSlogan = slogan => ({
    type: UPDATE_SLOGAN,
    slogan
})