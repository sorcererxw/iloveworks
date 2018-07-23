import React, {Component} from 'react'

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import HomePage from "./containers/HomePage"
import SettingsPage from "./containers/SettingsPage"

import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faCog, faAdjust, faAngleLeft, faTimes, faBars, faAngleDown,
    faAngleRight, faStopwatch, faAlignLeft,
    faAlignRight, faAlignCenter, faFont,
} from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux'

import {getLocale} from './locale'

import {addLocaleData, FormattedMessage, IntlProvider} from "react-intl"
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
import {Helmet} from "react-helmet"
import getTheme from "./theme"

addLocaleData([...en, ...zh])

library.add(faCog, faAdjust, faTimes, faBars,
    faAngleDown, faAngleRight, faAngleLeft,
    faStopwatch, faFont,
    faAlignLeft, faAlignRight, faAlignCenter)

class App extends Component {
    render() {
        const {theme} = this.props
        const scheme = getTheme(theme)
        return (
            <IntlProvider
                locale={navigator.language}
                messages={getLocale(this.props.language)}>
                <BrowserRouter>
                    <div>
                        <FormattedMessage id={"appName"}>
                            {appName =>
                                <Helmet>
                                    <meta charSet="utf-8"/>
                                    <title>{appName}</title>
                                    <meta name="theme-color" content={scheme.background}/>
                                </Helmet>
                            }
                        </FormattedMessage>
                        <Switch>
                            <Route exact path={`/`} component={HomePage}/>
                            <Route path={`/settings`} component={SettingsPage}/>
                            <Route render={() => <Redirect to={`/`}/>}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </IntlProvider>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.settings.language,
        theme: state.settings.theme
    }
}

export default connect(mapStateToProps, null)(App)
