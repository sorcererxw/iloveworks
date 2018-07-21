import {applyMiddleware, createStore} from 'redux'
import * as actionCreators from './actions/SettingsAcrion'
import logger from 'redux-logger'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/index'

const middlewares = [logger]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({actionCreators})

const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const defaultState = {
    settings:[{
        theme:'dark'
    }]
}

export default function configureStore(initialState) {
    return createStoreWithMiddleware(persistedReducer, defaultState, enhancer)
}