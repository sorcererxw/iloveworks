import React, { Component } from 'react'
import {
  Link,
  Route,
  Switch,
  NavLink,
  Redirect,
  RouteComponentProps,
  match as Match,
} from 'react-router-dom'
import { FormattedMessage, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import {
  updateLanguage,
  updateTheme,
  updateSlogan,
} from '../redux/actions/settingsAction'
import { getTheme } from '../theme'
import { hexToRgbA } from '../utils/colorUtil'
import { Helmet } from 'react-helmet'
import { MdClose, MdMoreVert } from 'react-icons/md'
import { AppearanceTab, AboutTab, SloganTab, LanguageTab } from './tabs'
import styled from 'styled-components'
import { Dispatch } from 'redux'
import AppHeader from '../components/appHeader'
import { Default, Mobile, Tablet } from '../components/responsive'

const Root = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
`

const Sider = styled.div`
  padding: 16px;
  border: 0 solid;
  border-right-width: 1px;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .selected {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    box-sizing: border-box;
    border-right-width: 0;
    flex-direction: row;
    width: 100%;
    height: auto;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 0 !important;
    }
  }
`

const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 8px 32px 8px 16px;
  margin-bottom: 16px;
  margin-right: 8px;
  font-size: 1rem;
  white-space: pre;
  font-weight: 500;

  :hover {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.active {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 8px 16px 8px 16px;
    margin-right: 8px;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`

interface Props {
  theme: string
}

const mapStateToProps = (state: any) => ({
  language: state.settings.language,
  theme: state.settings.theme,
  slogan: state.settings.slogan,
  interval: state.settings.interval,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateLanguage: (language: string) => dispatch(updateLanguage(language)),
  updateTheme: (theme: string) => dispatch(updateTheme(theme)),
  updateSlogan: (slogan: string) => dispatch(updateSlogan(slogan)),
})

class SettingsPage extends Component<RouteComponentProps & Props> {
  state = {
    showMenu: true,
  }

  render() {
    const { match, theme } = this.props
    const palette = getTheme(theme)

    const meta = (
      <FormattedMessage id='settings'>
        {name =>
          <Helmet>
            <title>{name}</title>
          </Helmet>
        }
      </FormattedMessage>
    )

    const renderRedirect = ((m: Match<any>) =>
        () => <Redirect to={`${m.url}/appearance`}/>
    )(match)

    const content = (
      <ContentContainer>
        <Switch>
          <Route exact path={`${match.url}/slogan`}
                 component={connect(mapStateToProps, mapDispatchToProps)(injectIntl(SloganTab))}/>
          <Route exact path={`${match.url}/language`}
                 component={connect(mapStateToProps, mapDispatchToProps)(LanguageTab)}/>
          <Route exact path={`${match.url}/appearance`}
                 component={connect(mapStateToProps, mapDispatchToProps)(AppearanceTab)}/>
          <Route exact path={`${match.url}/about`}
                 component={connect(mapStateToProps, mapDispatchToProps)(AboutTab)}/>
          <Route render={renderRedirect}/>
        </Switch>
      </ContentContainer>
    )

    const links = ['appearance', 'slogan', 'language', 'about']

    const closeIcon = (
      <Link to={'/'}>
        <MdClose style={{
          color: palette.textPrimary,
          fontSize: '2em',
          verticalAlign: 'middle',
        }}/>
      </Link>
    )

    const moreIcon = (
      <MdMoreVert
        style={{
          color: palette.textPrimary,
          fontSize: '2em',
          verticalAlign: 'middle',
        }}
        onClick={
          (
            (page, showMenu) => () => page.setState({ showMenu })
          )(this, !this.state.showMenu)
        }/>
    )

    const navItems = links.map((link, key) => (
      <NavItem
        key={key}
        activeClassName={'selected'}
        activeStyle={{ color: palette.textPrimary }}
        style={{ color: palette.textSecondary }}
        to={`${match.url}/${link}`}>
        <FormattedMessage id={`settings.${link}`}/>
      </NavItem>
    ))

    const desktopView = (
      <Default>
        <main style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Sider
            style={{
              borderColor: hexToRgbA(palette.textSecondary, 0.2),
            }}>
            {navItems}
          </Sider>
          {content}
        </main>
      </Default>
    )

    const tabletView = (
      <Tablet>
        <main style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Sider
            style={{
              borderColor: hexToRgbA(palette.textSecondary, 0.2),
            }}>
            {navItems}
          </Sider>
          {content}
        </main>
      </Tablet>
    )
    const mobileView = (
      <Mobile>
        <main style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {
            this.state.showMenu ?
              <Sider
                style={{
                  borderColor: hexToRgbA(palette.textSecondary, 0.2),
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                {navItems}
              </Sider> : undefined
          }
          {content}
        </main>
      </Mobile>
    )
    return (
      <Root style={{
        backgroundColor: palette.background,
        color: palette.textPrimary,
      }}>
        {meta}
        <FormattedMessage id='settings'>
          {title => [
            <Default key={0}><AppHeader title={title} rightExtra={closeIcon}/></Default>,
            <Tablet key={1}><AppHeader title={title} leftExtra={closeIcon}/></Tablet>,
            <Mobile key={2}><AppHeader title={title} leftExtra={closeIcon}
                                       rightExtra={moreIcon}/></Mobile>,
          ]}
        </FormattedMessage>
        {desktopView}
        {tabletView}
        {mobileView}
      </Root>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
