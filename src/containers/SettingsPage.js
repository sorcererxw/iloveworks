import React, {Component} from 'react'
import './SettingsPage.css'
import {Link, Route, Switch, NavLink, Redirect} from "react-router-dom"
import {FormattedMessage, injectIntl} from "react-intl"
import {connect} from "react-redux"
import {updateLanguage, updateTheme, updateSlogan, updateInterval} from "../redux/actions/SettingsAcrion"
import getTheme from '../theme'
import {hexToRgbA} from '../utils/colorUtil'
import {Helmet} from "react-helmet"
import AppHeader from "../components/AppHeader"
import Responsive from 'react-responsive'
import {MdClose, MdMoreVert} from 'react-icons/md'
import LanguageTab from "./tabs/LanguageTab"
import SloganTab from "./tabs/SloganTab"
import AppearanceTab from "./tabs/AppearanceTab"
import ApplicationTab from "./tabs/ApplicationTab"
import AboutTab from "./tabs/AboutTab"

const Mobile = props => <Responsive {...props} maxWidth={425}/>
const Tablet = props => <Responsive {...props} minWidth={426} maxWidth={768}/>
const Default = props => <Responsive {...props} minWidth={769}/>

class SettingsPage extends Component {
    state = {
        showMenu: true,
    }

    render() {
        const {match, theme} = this.props
        const palette = getTheme(theme)

        const meta = (
            <FormattedMessage id="settings">
                {name =>
                    <Helmet>
                        <title>{name}</title>
                    </Helmet>
                }
            </FormattedMessage>
        )

        const content = (
            <div style={{
                width: '100%',
                padding: '0 16px 0 16px',
                display: 'flex',
                boxSizing: 'border-box',
                flexDirection: 'column'
            }}>
                <Switch>
                    <Route exact path={`${match.url}/slogan`}
                           component={connect(mapStateToProps, mapDispatchToProps)(injectIntl(SloganTab))}/>
                    <Route exact path={`${match.url}/language`}
                           component={connect(mapStateToProps, mapDispatchToProps)(LanguageTab)}/>
                    <Route exact path={`${match.url}/appearance`}
                           component={connect(mapStateToProps, mapDispatchToProps)(AppearanceTab)}/>
                    <Route exact path={`${match.url}/application`}
                           component={connect(mapStateToProps, mapDispatchToProps)(ApplicationTab)}/>
                    <Route exact path={`${match.url}/about`}
                           component={connect(mapStateToProps, mapDispatchToProps)(AboutTab)}/>
                    <Route render={() => <Redirect to={`${match.url}/appearance`}/>}/>
                </Switch>
            </div>
        )

        const links = ['appearance', 'slogan', 'language', 'about']

        const closeIcon = (
            <Link to={`/`}>
                <MdClose style={{
                    color: palette.textPrimary,
                    fontSize: '2em',
                    verticalAlign: 'middle'
                }}/>
            </Link>
        )

        const moreIcon = (
            <MdMoreVert
                style={{
                    color: palette.textPrimary,
                    fontSize: '2em',
                    verticalAlign: 'middle'
                }}
                onClick={() => this.setState({showMenu: !this.state.showMenu})}/>
        )

        return (
            <div style={{
                backgroundColor: palette.background,
                color: palette.textPrimary
            }} className={"setting-root"}>
                {meta}
                <FormattedMessage id="settings">
                    {title => [
                        <Default key={0}><AppHeader title={title} rightExtra={closeIcon}/></Default>,
                        <Tablet key={1}><AppHeader title={title} leftExtra={closeIcon}/></Tablet>,
                        <Mobile key={2}><AppHeader title={title} leftExtra={closeIcon} rightExtra={moreIcon}/></Mobile>,
                    ]}
                </FormattedMessage>
                <Default>
                    <main style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <nav className={"setting-nav"}
                             style={{
                                 borderColor: hexToRgbA(palette.textSecondary, 0.2),
                             }}>
                            {
                                links.map((link, key) => (
                                    <NavLink
                                        key={key}
                                        activeClassName={'selected'}
                                        activeStyle={{color: palette.textPrimary}}
                                        style={{color: palette.textSecondary}}
                                        to={`${match.url}/${link}`}>
                                        <FormattedMessage id={`settings.${link}`}/>
                                    </NavLink>
                                ))
                            }
                        </nav>
                        {content}
                    </main>
                </Default>
                <Tablet>
                    <main style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <nav className={"setting-nav"}
                             style={{
                                 borderColor: hexToRgbA(palette.textSecondary, 0.2),
                             }}>
                            {
                                links.map((link, key) => (
                                    <NavLink
                                        key={key}
                                        activeClassName={'selected'}
                                        activeStyle={{color: palette.textPrimary}}
                                        style={{color: palette.textSecondary}}
                                        to={`${match.url}/${link}`}>
                                        <FormattedMessage id={`settings.${link}`}/>
                                    </NavLink>
                                ))
                            }
                        </nav>
                        {content}
                    </main>
                </Tablet>
                <Mobile>
                    <main style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {
                            this.state.showMenu ?
                                <nav className={"setting-nav"}
                                     style={{
                                         borderColor: hexToRgbA(palette.textSecondary, 0.2),
                                         width: '100%',
                                         display: 'flex',
                                         flexDirection: 'column'
                                     }}>
                                    {
                                        links.map((link, key) => (
                                            <NavLink
                                                key={key}
                                                activeClassName={'selected'}
                                                activeStyle={{color: palette.textPrimary}}
                                                style={{color: palette.textSecondary}}
                                                to={`${match.url}/${link}`}>
                                                <FormattedMessage id={`settings.${link}`}/>
                                            </NavLink>
                                        ))
                                    }
                                </nav> : undefined
                        }
                        {content}
                    </main>
                </Mobile>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.settings.language,
        theme: state.settings.theme,
        slogan: state.settings.slogan,
        interval: state.settings.interval
    }
}

const mapDispatchToProps = dispatch => ({
    updateLanguage: language => dispatch(updateLanguage(language)),
    updateTheme: theme => dispatch(updateTheme(theme)),
    updateSlogan: slogan => dispatch(updateSlogan(slogan)),
    updateInterval: interval => dispatch(updateInterval(interval))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)