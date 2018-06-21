import {createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage
}

const persistReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistReducer)
    let persistor = persistStore(store)
    return {store, persistor}
}