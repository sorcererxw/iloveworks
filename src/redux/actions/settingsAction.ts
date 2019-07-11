import { UPDATE_LANGUAGE, UPDATE_SLOGAN, UPDATE_THEME } from '../actionTypes'
import { AnyAction } from 'redux'

export const updateLanguage = (language: string): AnyAction => ({
  type: UPDATE_LANGUAGE,
  language,
})

export const updateTheme = (theme: string): AnyAction => ({
  type: UPDATE_THEME,
  theme,
})

export const updateSlogan = (slogan: string): AnyAction => ({
  type: UPDATE_SLOGAN,
  slogan,
})
