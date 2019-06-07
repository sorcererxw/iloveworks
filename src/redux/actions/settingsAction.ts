import {
  UPDATE_FONT_ALIGN,
  UPDATE_FONT_SIZE,
  UPDATE_INTERVAL,
  UPDATE_LANGUAGE,
  UPDATE_SLOGAN,
  UPDATE_THEME
} from '../actionTypes'
import { AnyAction } from 'redux'

export const updateLanguage = (language: string): AnyAction => ({
  type: UPDATE_LANGUAGE,
  language
})

export const updateTheme = (theme: string): AnyAction => ({
  type: UPDATE_THEME,
  theme
})

export const updateSlogan = (slogan: string): AnyAction => ({
  type: UPDATE_SLOGAN,
  slogan
})

export const updateInterval = (interval: number): AnyAction => ({
  type: UPDATE_INTERVAL,
  interval
})

export const updateFontSize = (fontSize: number): AnyAction => ({
  type: UPDATE_FONT_SIZE,
  fontSize
})

export const updateFontAlign = (fontAlign: string): AnyAction => ({
  type: UPDATE_FONT_ALIGN,
  fontAlign
})
