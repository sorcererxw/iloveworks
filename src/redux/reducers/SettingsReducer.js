import * as types from '../ActionTypes'

const initialState = {
    language: navigator.language
}

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
        default:
    }
    return state
}