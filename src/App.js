import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import SettingsPage from "./containers/SettingsPage"
import HomePage from "./containers/HomePage"
import NotFoundPage from "./containers/NotFoundPage"
import {AnimatedSwitch} from 'react-router-transition'
import {connect} from "react-redux"
import {addLocaleData, IntlProvider} from 'react-intl'
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
import {getLocale} from "./locales"
import {BrowserRouter} from 'react-router-dom'

addLocaleData([...en, ...zh])

class App extends Component {
    render() {
        return (
            <IntlProvider {...getLocale(this.props.language)}>
                <BrowserRouter>
                    <AnimatedSwitch
                        atEnter={{opacity: 0}}
                        atLeave={{opacity: 0}}
                        atActive={{opacity: 1}}>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/settings" component={SettingsPage}/>
                        <Route component={NotFoundPage}/>
                    </AnimatedSwitch>
                </BrowserRouter>
            </IntlProvider>
        )
    }
}

export default connect((state) => {
    return {
        nightMode: state.nightMode,
        language: state.language
    }
})(App)

