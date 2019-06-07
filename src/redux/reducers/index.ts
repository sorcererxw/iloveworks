import { combineReducers } from 'redux'

import { SettingsReducer } from './settingsReducer'

const rootReducer = combineReducers({
  settings: SettingsReducer
})

export default rootReducer
