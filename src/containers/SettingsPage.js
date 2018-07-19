import React, {Component} from 'react'
import './SettingsPage.css'
// import style from './SettingsPage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link, Route, Switch, NavLink} from "react-router-dom"
import {defineMessages, FormattedMessage, injectIntl} from "react-intl"
import {connect} from "react-redux"
import {updateLanguage, updateTheme, updateSlogan} from "../redux/actions/SettingsAcrion"
import getTheme from '../theme'
import {hexToRgbA} from '../utils/colorUtil'
import autosize from 'autosize'

class PreferenceGroup extends Component {
    render() {
        const {title, titleId, children} = this.props
        if (titleId !== undefined) {
            return <div>
                <FormattedMessage id={titleId}>
                    {text => <div className={"tab-title"}>{text}</div>}
                </FormattedMessage>
                <div>
                    {children}
                </div>
            </div>
        }
        return (
            <div>
                <div className={"tab-title"}>{title}</div>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

class PreferenceItem extends Component {
    render() {
        return (
            <div className={"preference-item"}
                 style={{
                     borderColor: hexToRgbA(getTheme(this.props.theme).textSecondary, 0.2)
                 }}>
                {this.props.children}
            </div>
        )
    }
}

class LanguageTab extends Component {
    onSelect = (e) => {
        this.props.updateLanguage(e.target.value)
    }

    render() {
        const {theme} = this.props
        const scheme = getTheme(theme)
        return (
            <PreferenceGroup titleId={'settings.language'}>
                <PreferenceItem>
                    <select className={'setting-select'}
                            onChange={this.onSelect}
                            style={{
                                backgroundColor: scheme.primary,
                                color: scheme.textPrimary
                            }}
                            value={this.props.language || ""}>
                        <option value="">Default</option>
                        <option value="zh-Hans">简体中文</option>
                        <option value="zh-Hant">正體中文</option>
                        <option value="en-US">English</option>
                    </select>
                </PreferenceItem>
            </PreferenceGroup>
        )
    }
}

class AboutTab extends Component {
    render() {
        const about = <FormattedMessage id={'settings.about'}>
            {text =>
                <PreferenceGroup title={text}>
                    <PreferenceItem>
                        <div>Version 2.0 Build 49</div>
                    </PreferenceItem>
                    <PreferenceItem>
                        <div>Github</div>
                    </PreferenceItem>
                </PreferenceGroup>
            }
        </FormattedMessage>

        const release = <FormattedMessage id={'settings.about.release_note'}>
            {text =>
                <PreferenceGroup title={text}>
                    <PreferenceItem>
                        <div>Github</div>
                    </PreferenceItem>
                </PreferenceGroup>
            }
        </FormattedMessage>

        return (
            <div>
                {about}
                {release}
            </div>
        )
    }
}

class AppearanceTab extends Component {

    onSelect = (theme) => {
        this.props.updateTheme(theme)
    }

    render() {
        const {theme} = this.props
        const palette = getTheme(theme)
        const ThemeBlock = ({titleId, value}) => (
            <div className={'theme-block'}
                 onClick={() => this.onSelect(value)}
                 style={{
                     borderColor: hexToRgbA(palette.textSecondary, 0.2),
                     color: getTheme(value).textPrimary,
                     backgroundColor: getTheme(value).background
                 }}>
                <FormattedMessage id={titleId}/>
            </div>
        )

        return (
            <FormattedMessage id={'settings.appearance.theme'}>
                {text =>
                    <PreferenceGroup title={text}>
                        <PreferenceItem>
                            <div className={'theme-block-group'}>
                                <ThemeBlock
                                    value={'white'}
                                    titleId={'settings.appearance.theme.white'}/>
                                <ThemeBlock
                                    value={'light'}
                                    titleId={'settings.appearance.theme.light'}/>
                                <ThemeBlock
                                    value={'dark'}
                                    titleId={'settings.appearance.theme.dark'}/>
                                <ThemeBlock
                                    value={'black'}
                                    titleId={'settings.appearance.theme.black'}/>
                            </div>
                        </PreferenceItem>
                    </PreferenceGroup>
                }
            </FormattedMessage>

        )
    }
}

class SloganTab extends Component {
    state = {
        text: ''
    }

    componentDidMount() {
        this.setSlogan()
    }

    setSlogan = () => {
        if (this.props.slogan === undefined || this.props.slogan == null || this.props.slogan.trim().length === 0) {
            const messages = defineMessages({
                defaultSlogan: {
                    id: 'slogan.default'
                }
            })
            const {intl} = this.props
            this.setState({
                text: intl.formatMessage(messages.defaultSlogan)
            })
        } else {
            this.setState({
                text: this.props.slogan
            })
        }
    }

    updateTextareaSize = () => {
        const textarea = this.refs.textarea
        autosize(textarea)
    }

    onTextChange = (e) => {
        const text = e.target.value
        if (text === undefined) this.setState({text: ''})
        else {
            this.setState({text: text})
        }
    }

    onSave = () => {
        this.props.updateSlogan(this.state.text)
        this.setSlogan()
    }

    onReset = () => {
        this.props.updateSlogan('')
        this.setSlogan()
    }

    render() {
        const {theme} = this.props
        const scheme = getTheme(theme)
        // 渲染好界面后更新输入框大小
        window.requestAnimationFrame(() => this.updateTextareaSize())
        return (
            <PreferenceGroup titleId={"settings.slogan"}>
                <PreferenceItem>
                    <div>
                        <textarea
                            onChange={this.onTextChange}
                            value={this.state.text}
                            ref={"textarea"}
                            onKeyUp={this.updateTextareaSize}
                            className={'slogan-textarea'}
                            spellCheck="false"
                            style={{
                                backgroundColor: scheme.primary,
                                color: scheme.textPrimary
                            }}/>
                    </div>
                    <div className={"button-bar "}>
                        <button onClick={this.onSave}
                                style={{
                                    backgroundColor: scheme.primary,
                                    color: scheme.textPrimary
                                }}>
                            Save
                        </button>
                        <button onClick={this.onReset}
                                style={{
                                    backgroundColor: scheme.primary,
                                    color: scheme.textPrimary
                                }}>
                            Reset
                        </button>
                    </div>
                </PreferenceItem>
            </PreferenceGroup>
        )
    }
}

class ApplicationTab extends Component {
    render() {
        return (
            <FormattedMessage id="settings.application">
                {(title) => (
                    <PreferenceGroup title={title}>
                        <PreferenceItem>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div>Chrome 扩展</div>
                                <div><a>Download</a></div>
                            </div>
                        </PreferenceItem>
                    </PreferenceGroup>
                )}
            </FormattedMessage>
        )
    }
}

class SettingsPage extends Component {
    render() {
        const {match, theme} = this.props
        const palette = getTheme(theme)

        return (
            <div style={{
                backgroundColor: palette.background,
                color: palette.textPrimary
            }} className={"setting-root"}>
                <header className={"setting-header"}
                        style={{
                            borderColor: hexToRgbA(palette.textSecondary, 0.2),
                        }}>
                    <div className={"setting-header-title"}>
                        <FormattedMessage id="settings"/>
                    </div>
                    <div style={{flex: 1}}/>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={"times"} color={palette.textPrimary} size={'lg'}/>
                    </Link>
                </header>
                <main className={"setting-main"}>
                    <nav className={"setting-nav"}
                         style={{
                             borderColor: hexToRgbA(palette.textSecondary, 0.2),
                         }}>
                        <NavLink activeClassName={'selected'}
                                 activeStyle={{color: palette.textPrimary}}
                                 style={{color: palette.textSecondary}}
                                 to={`${match.url}/appearance`}>
                            <FormattedMessage id="settings.appearance"/>
                        </NavLink>
                        <NavLink activeClassName={'selected'}
                                 activeStyle={{color: palette.textPrimary}}
                                 style={{color: palette.textSecondary}}
                                 to={`${match.url}/slogan`}>
                            <FormattedMessage id="settings.slogan"/>
                        </NavLink>
                        <NavLink activeClassName={'selected'}
                                 activeStyle={{color: palette.textPrimary}}
                                 style={{color: palette.textSecondary}}
                                 to={`${match.url}/language`}>
                            <FormattedMessage id="settings.language"/>
                        </NavLink>
                        <NavLink activeClassName={'selected'}
                                 activeStyle={{color: palette.textPrimary}}
                                 style={{color: palette.textSecondary}}
                                 to={`${match.url}/application`}>
                            <FormattedMessage id="settings.application"/>
                        </NavLink>
                        <NavLink activeClassName={'selected'}
                                 activeStyle={{color: palette.textPrimary}}
                                 style={{color: palette.textSecondary}}
                                 to={`${match.url}/about`}>
                            <FormattedMessage id="settings.about"/>
                        </NavLink>
                    </nav>
                    <div className={"form"}>
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
                            <Route render={() => <div/>}/>
                        </Switch>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.settings.language,
        theme: state.settings.theme,
        slogan: state.settings.slogan
    }
}

const mapDispatchToProps = dispatch => ({
    updateLanguage: language => dispatch(updateLanguage(language)),
    updateTheme: theme => dispatch(updateTheme(theme)),
    updateSlogan: slogan => dispatch(updateSlogan(slogan))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)