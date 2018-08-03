import React, {Component} from 'react'
import ShiftTextComponent from "../components/ShiftTextComponent"
import './HomePage.css'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import getTheme from "../theme"
import {defineMessages, injectIntl} from "react-intl"
import AppHeader from "../components/AppHeader"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {MdSettings} from 'react-icons/md'

class HomePage extends Component {
    state = {
        idle: false
    }

    handleIconMouseEnter = () => {
    }

    handleIconMouseLeave = () => {
    }

    getSlogan = () => {
        let slogan = ''
        if (this.props.slogan === undefined
            || this.props.slogan == null
            || this.props.slogan.trim().length === 0) {
            const messages = defineMessages({
                defaultSlogan: {
                    id: 'slogan.default'
                }
            })
            const {intl} = this.props
            slogan = intl.formatMessage(messages.defaultSlogan)
        } else {
            slogan = this.props.slogan
        }
        return slogan.split('\n')
            .filter(item => item !== undefined && item != null)
            .map(item => item.trim())
            .filter(item => item.length > 0)
    }

    mouseCountdown = undefined

    handleMouseMove = () => {
        if (this.state.idle) {
            this.setState({
                idle: false
            })
        }
        if (this.mouseCountdown !== undefined) {
            window.clearTimeout(this.mouseCountdown)
            this.mouseCountdown = undefined
        }
        this.mouseCountdown = window.setTimeout(
            () => this.setState({
                idle: true
            }), 2000)
    }

    componentWillUnmount() {
        if (this.mouseCountdown !== undefined) {
            window.clearTimeout(this.mouseCountdown)
            this.mouseCountdown = undefined
        }
    }

    render() {
        const {theme} = this.props
        const palette = getTheme(theme)

        const settingsIcon = (
            <Link to={`/settings`}>
                <h1><MdSettings
                    style={{
                        color: palette.textSecondary,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}/></h1>
            </Link>
        )
        return (
            <div style={{
                background: palette.background,
                cursor: this.state.idle ? 'none' : 'default'
            }}
                 onMouseMove={this.handleMouseMove}
                 className={"home-root"}>
                <ReactCSSTransitionGroup
                    transitionLeaveTimeout={500}
                    transitionEnterTimeout={300}
                    transitionName="fade">
                    {this.state.idle ? undefined :
                        <AppHeader
                            style={{position: 'absolute', top: 0,}}
                            rightExtra={settingsIcon}/>
                    }
                </ReactCSSTransitionGroup>
                <main style={{
                    boxSizing: 'border-box',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ShiftTextComponent
                        textAlign={'center'}
                        fontColor={palette.textPrimary}
                        fontSize={72}
                        slogan={this.getSlogan()}
                    />
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

export default connect(mapStateToProps)(injectIntl(HomePage))