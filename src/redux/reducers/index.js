import {combineReducers} from 'redux'

import SettingsReducer from './SettingsReducer'

const rootReducer = combineReducers({
    settings: SettingsReducer
})

export default rootReducer