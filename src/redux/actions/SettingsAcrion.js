import {
  UPDATE_FONT_ALIGN,
  UPDATE_FONT_SIZE,
  UPDATE_INTERVAL,
  UPDATE_LANGUAGE,
  UPDATE_SLOGAN,
  UPDATE_THEME
} from "../ActionTypes"

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

export const updateInterval = interval => ({
  type: UPDATE_INTERVAL,
  interval
})

export const updateFontSize = fontSize => ({
  type: UPDATE_FONT_SIZE,
  fontSize
})

export const updateFontAlign = fontAlign => ({
  type: UPDATE_FONT_ALIGN,
  fontAlign
})
