import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './utils/registerServiceWorker'
import configureStore from "./redux/configureStore"
import {Provider} from "react-redux"
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from "redux-persist"
import {BrowserRouter} from "react-router-dom"

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root'))

registerServiceWorker()
