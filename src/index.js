import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './utils/registerServiceWorker'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import reducers from "./reducers/SettingsReducer"
import {createStore} from "redux"
import {PersistGate} from 'redux-persist/integration/react'

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'))

registerServiceWorker()
