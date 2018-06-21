import {
    UPDATE_AUTO_NIGHT_MODE,
    UPDATE_AUTO_NIGHT_SCHEDULE, UPDATE_EFFECT,
    UPDATE_LANGUAGE,
    UPDATE_NIGHT_MODE
} from "../constants/ActionTypes"

export const updateNightModeAction = value => ({type: UPDATE_NIGHT_MODE, value})
export const updateLanguageAction = value => ({type: UPDATE_LANGUAGE, value})
export const updateAutoNightModeAction = value => ({type: UPDATE_AUTO_NIGHT_MODE, value})
export const updateAutoNightScheduleAction = value => ({type: UPDATE_AUTO_NIGHT_SCHEDULE, value})
export const updateEffectAction = value => ({type: UPDATE_EFFECT, value})