import {
    UPDATE_AUTO_NIGHT_MODE,
    UPDATE_AUTO_NIGHT_SCHEDULE, UPDATE_EFFECT,
    UPDATE_LANGUAGE,
    UPDATE_NIGHT_MODE
} from "../constants/ActionTypes"

const settingsReducer = (state = {
    nightMode: 0,
    language: '',
    autoNightMode: 0,
    autoNightSchedule: undefined,
    effect: 0
}, action) => {
    switch (action.type) {
        case UPDATE_NIGHT_MODE:
            return {nightMode: action.value ? action.value : 0}
        case UPDATE_AUTO_NIGHT_MODE:
            return {
                nightMode: 2,
                autoNightMode: action.value ? action.value : 0
            }
        case UPDATE_AUTO_NIGHT_SCHEDULE:
            return {
                autoNightSchedule: action.value ? action.value : 0
            }
        case UPDATE_LANGUAGE:
            return {language: action.value ? action.value : ''}
        case UPDATE_EFFECT:
            return {effect: action.value ? action.value : 0}
        default:
            return state
    }
}

export default settingsReducer