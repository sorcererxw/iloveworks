import React, {Component} from 'react'
import './SettingsPage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link, Route, Switch, NavLink, Redirect} from "react-router-dom"
import {defineMessages, FormattedMessage, injectIntl} from "react-intl"
import {connect} from "react-redux"
import {updateLanguage, updateTheme, updateSlogan, updateInterval} from "../redux/actions/SettingsAcrion"
import getTheme from '../theme'
import {hexToRgbA} from '../utils/colorUtil'
import autosize from 'autosize'
import ReactMarkdown from 'react-markdown'
import ShiftTextComponent from "../components/ShiftTextComponent"
import PreferenceItem from "../components/PreferenceItem"
import PreferenceGroup from "../components/PerferenceGroup"
import {Helmet} from "react-helmet"
import packageJson from '../../package.json'

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
                            style={{
                                backgroundColor: scheme.primary,
                                color: scheme.textPrimary
                            }}
                            value={this.props.language}
                            onChange={this.onSelect}>
                        <FormattedMessage id={'settings.language.default'}>
                            {text => <option value="">{text}</option>}
                        </FormattedMessage>
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
        const {theme} = this.props
        const scheme = getTheme(theme)
        const about = <FormattedMessage id={'settings.about'}>
            {text =>
                <PreferenceGroup title={text}>
                    <PreferenceItem>
                        <div><span role={'img'} aria-label={'logo'}>💼</span> Version {packageJson.version}</div>
                    </PreferenceItem>
                    <PreferenceItem>
                        <div>
                            <a href={'https://github.com/sorcererXW/iloveworks'}
                               target={'_blank'}
                               style={{
                                   fontWeight: '600',
                                   color: scheme.accent
                               }}>
                                Github
                            </a>
                        </div>
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
                {/*{release}*/}
            </div>
        )
    }
}

class AppearanceTab extends Component {

    onThemeSelect = (theme) => {
        this.props.updateTheme(theme)
    }

    render() {
        const {theme, updateTheme} = this.props
        if (theme === undefined) {
            updateTheme('light')
        }
        const scheme = getTheme(theme)
        const ThemeBlock = ({titleId, value}) => {
            return (
                <div
                    onClick={() => this.onThemeSelect(value)}
                    style={{
                        margin: 8,
                        display: 'inline-block',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderRadius: 8,
                        padding: 16,
                        paddingBottom: 14,
                        userSelect: 'none',
                        fontSize: '1rem',
                        borderColor: hexToRgbA(scheme.textSecondary, 0.2),
                        color: getTheme(value).textPrimary,
                        backgroundColor: getTheme(value).background,
                    }}>
                    <FormattedMessage id={titleId}/>
                    <div style={{
                        height: 2,
                        marginTop: 2,
                        borderWidth: 0,
                        borderRadius: 2,
                        backgroundColor: value === theme ?
                            scheme.accent : 'transparent'
                    }}/>
                </div>
            )
        }

        return (
            <div>
                <FormattedMessage id={'settings.appearance.theme'}>
                    {text =>
                        <PreferenceGroup title={text}>
                            <PreferenceItem>
                                <div style={{width: '100%'}}>
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
            </div>
        )
    }
}

class SloganTab extends Component {
    state = {
        text: '',
        showSyntax: false,
        fontSize: 72,
        interval: 2
    }
    messages = defineMessages({
        saveSuccess: {
            id: 'action.save.success'
        }
    })

    componentDidMount() {
        this.setSlogan()
        this.setState({
            interval: this.props.interval
        })
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

    onIntervalChange = (e) => {
        const s = e.target.value
        if (s === undefined) return
        let k = 0
        for (let i = 0; i < s.length; i++) {
            if (s[i] >= '0' && s[i] <= '9') {
                k = k * 10 + (s[i] - '0')
            }
        }
        this.props.updateInterval(k)
    }

    onSave = () => {
        this.props.updateSlogan(this.state.text)
        alert(this.props.intl.formatMessage(this.messages.saveSuccess))
        this.setSlogan()
    }

    onReset = () => {
        this.props.updateSlogan('')
        this.setSlogan()
    }

    validateNumberInput = (e) => {
        let key
        const theEvent = e || window.event

        // Handle paste
        if (theEvent.type === 'paste') {
            key = theEvent.clipboardData.getData('text/plain')
        } else {
            // Handle key press
            key = theEvent.keyCode || theEvent.which
            key = String.fromCharCode(key)
        }
        const regex = /[0-9]|\./
        if (!regex.test(key)) {
            theEvent.returnValue = false
            if (theEvent.preventDefault) theEvent.preventDefault()
        }
    }

    render() {
        const {theme} = this.props
        const scheme = getTheme(theme)
        // 渲染好界面后更新输入框大小
        window.requestAnimationFrame(() => this.updateTextareaSize())

        const customTab = <PreferenceGroup titleId={"settings.slogan.custom"}>
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
                    <div style={{
                        paddingRight: 16,
                        paddingLeft: 16,
                        userSelect: 'none',
                        color: scheme.textSecondary,
                        fontSize: '0.8rem'
                    }}>
                        <div onClick={() => this.setState({showSyntax: !this.state.showSyntax})}
                             style={{display: 'inline-block'}}>
                            <FormattedMessage id={'settings.slogan.syntax'}/>
                            <FontAwesomeIcon icon={this.state.showSyntax ? "angle-down" : "angle-right"}
                                             style={{marginLeft: 8}}/>
                        </div>
                        {this.state.showSyntax ?
                            <div>
                                <FormattedMessage id={'settings.slogan.syntax.summary'}>
                                    {(text) => <ReactMarkdown
                                        renderers={{'paragraph': 'div'}}
                                        source={text}/>}
                                </FormattedMessage>
                            </div> : undefined
                        }
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style={{flex: 1}}/>
                    <div className={"button-bar"}>
                        <button onClick={this.onReset}
                                style={{
                                    backgroundColor: scheme.primary,
                                    color: scheme.textPrimary
                                }}>
                            <FormattedMessage id={'action.reset'}/>
                        </button>
                        <button onClick={this.onSave}
                                style={{
                                    backgroundColor: scheme.primary,
                                    color: scheme.textPrimary
                                }}>
                            <FormattedMessage id={'action.save'}/>
                        </button>
                    </div>
                </div>
            </PreferenceItem>
        </PreferenceGroup>
        const otherTab = <PreferenceGroup title={"其他设置"}>
            <PreferenceItem
                title={"时间间隔"}
                iconName={'stopwatch'}
                actionView={
                    <div>
                        <input
                            className={'setting-input'}
                            value={this.props.interval}
                            onKeyPress={this.validateNumberInput}
                            style={{
                                borderColor: scheme.textSecondary,
                                color: scheme.textPrimary,
                                backgroundColor: scheme.primary,
                                width: '3rem',
                                textAlign: 'center',
                                marginRight: 8,
                            }}
                            onChange={this.onIntervalChange}/>
                        <span>秒</span>
                    </div>
                }/>
            <PreferenceItem title={"字体大小"} iconName={'font'}/>
            <PreferenceItem title={"文本对齐"} iconName={'align-center'} actionView={
                <div>
                    <div style={{display: 'inline-block'}}>
                        <input type="radio" id="left" value="left"/>
                        <span>Left</span>
                    </div>
                    <div style={{display: 'inline-block'}}>
                        <input type="radio" id="center" value="center"/>
                        <span>Center</span>
                    </div>
                    <div style={{display: 'inline-block'}}>
                        <input type="radio" id="right" value="right"/>
                        <span>Right</span>
                    </div>
                </div>
            }/>
        </PreferenceGroup>
        const previewTab = <PreferenceGroup title={'效果预览'}>
            <PreferenceItem>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    minHeight: 5 * this.state.fontSize
                }}>
                    <ShiftTextComponent
                        textAlign={'center'}
                        fontColor={scheme.textPrimary}
                        fontSize={this.state.fontSize}
                        interval={this.state.interval}
                        slogan={this.state.text.split('\n')}/>
                </div>
            </PreferenceItem>
        </PreferenceGroup>

        return (
            <div>
                {customTab}
                {/*{otherTab}*/}
                {/*{previewTab}*/}
            </div>
        )
    }
}

class ApplicationTab extends Component {
    state = {
        deferredPrompt: undefined
    }

    constructor(props) {
        super(props)
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault()
            // Stash the event so it can be triggered later.
            this.setState({
                deferredPrompt: e
            })
        })
    }

    onAddPwa = () => {
        this.setState.deferredPrompt.prompt()
        // Wait for the user to respond to the prompt
        this.setState.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt')
            } else {
                console.log('User dismissed the A2HS prompt')
            }
        })
    }

    render() {
        return (
            <FormattedMessage id="settings.application">
                {(title) => (
                    <PreferenceGroup title={title}>
                        <PreferenceItem
                            title={'PWA'}
                            actionView={
                                <button onClick={this.onAddPwa}>添加</button>
                            }>
                        </PreferenceItem>
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
                <FormattedMessage id="settings">
                    {name =>
                        <Helmet>
                            <title>{name}</title>
                        </Helmet>
                    }
                </FormattedMessage>
                <header className={"setting-header"}
                        style={{
                            borderColor: hexToRgbA(palette.textSecondary, 0.2),
                        }}>
                    <div className={"setting-header-title"}>
                        <FormattedMessage id="settings"/>
                    </div>
                    <div style={{flex: 1}}/>
                    <Link to={`/`}>
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
                        {/*<NavLink activeClassName={'selected'}*/}
                        {/*activeStyle={{color: palette.textPrimary}}*/}
                        {/*style={{color: palette.textSecondary}}*/}
                        {/*to={`${match.url}/application`}>*/}
                        {/*<FormattedMessage id="settings.application"/>*/}
                        {/*</NavLink>*/}
                        <NavLink activeClassName={'selected'}
                                 activeStyle={{color: palette.textPrimary}}
                                 style={{color: palette.textSecondary}}
                                 to={`${match.url}/about`}>
                            <FormattedMessage id="settings.about"/>
                        </NavLink>
                    </nav>
                    <div className={"settings-content"}>
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
                </main>
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