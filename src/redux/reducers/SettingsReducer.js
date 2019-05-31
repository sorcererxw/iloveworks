import * as types from '../ActionTypes'

const initialState = {}

export default function SettingsReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    case types.UPDATE_THEME:
      return {
        ...state,
        theme: action.theme
      }
    case types.UPDATE_SLOGAN:
      return {
        ...state,
        slogan: action.slogan
      }
    case types.UPDATE_FONT_SIZE:
      return {
        ...state,
        fontSize: action.fontSize
      }
    case types.UPDATE_FONT_ALIGN:
      return {
        ...state,
        fontAlign: action.fontAlign
      }
    case types.UPDATE_INTERVAL:
      return {
        ...state,
        interval: action.interval
      }
    default:
      return state
  }
}
