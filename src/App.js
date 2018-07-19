import React, {Component} from 'react'

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import HomePage from "./containers/HomePage"
import SettingsPage from "./containers/SettingsPage"

import {library} from '@fortawesome/fontawesome-svg-core'
import {faEllipsisV, faCog, faAdjust, faAngleLeft, faTimes, faBars} from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux'

import {getLocale} from './locale'

import {addLocaleData, IntlProvider} from "react-intl"
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'

addLocaleData([...en, ...zh])

library.add(faEllipsisV, faCog, faAdjust, faAngleLeft, faTimes, faBars)

class App extends Component {
    render() {
        return (
            <IntlProvider
                locale={navigator.language}
                messages={getLocale(this.props.language)}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/settings" component={SettingsPage}/>
                        <Route render={() => <Redirect to={'/'}/>}/>
                    </Switch>
                </BrowserRouter>
            </IntlProvider>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.settings.language
    }
}

export default connect(mapStateToProps, null)(App)
