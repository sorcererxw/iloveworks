import React, { Component } from 'react'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import HomePage from './containers/homePage'
import SettingsPage from './containers/settingsPage'

import { connect } from 'react-redux'

import { getLocale } from './locale'

import { addLocaleData, FormattedMessage, IntlProvider } from 'react-intl'
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
import { Helmet } from 'react-helmet'

import { getTheme } from './theme'
import { getQueryParamsFromUrl } from './utils/urlUtil'

addLocaleData([...en, ...zh])

interface Props {
  theme: string
  language: string
}

class App extends Component<Props> {
  render() {
    const theme = this.props.theme
    const scheme = getTheme(theme)

    const meta = (
      <FormattedMessage id={'appName'}>
        {appName => (
          <Helmet>
            <meta charSet='utf-8' />
            <title>{appName}</title>
            <meta name='theme-color' content={scheme.background} />
          </Helmet>
        )}
      </FormattedMessage>
    )

    const route = (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/settings'} component={SettingsPage} />
          <Route render={(() => () => <Redirect to={'/'} />)()} />
        </Switch>
      </BrowserRouter>
    )

    return (
      <IntlProvider locale={navigator.language} messages={getLocale(this.props.language)}>
        <div>
          {meta}
          {route}
        </div>
      </IntlProvider>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    language: getQueryParamsFromUrl('lang') || state.settings.language,
    theme: state.settings.theme,
  }
}

export default connect(
  mapStateToProps,
  null,
)(App)
