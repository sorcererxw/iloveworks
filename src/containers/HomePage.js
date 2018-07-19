import React, {Component} from 'react'
import ShiftTextComponent from "../components/ShiftTextComponent"
import './HomePage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import getTheme from "../theme"
import {defineMessages, injectIntl} from "react-intl"

class HomePage extends Component {
    state = {
        displayMouse: true
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
        if (!this.state.displayMouse) {
            this.setState({
                displayMouse: true
            })
        }
        if (this.mouseCountdown !== undefined) {
            window.clearTimeout(this.mouseCountdown)
            this.mouseCountdown = undefined
        }
        this.mouseCountdown = window.setTimeout(
            () => this.setState({
                displayMouse: false
            }), 2000)
    }

    render() {
        const {theme} = this.props
        const palette = getTheme(theme)
        return (
            <div style={{
                background: palette.background,
                cursor: this.state.displayMouse ? 'default' : 'none'
            }}
                 onMouseMove={this.handleMouseMove}
                 className={"root"}>
                <header className={"home-header"} style={{
                    borderColor: palette.textSecondary
                }}>
                    <div className={"header-container"}>
                        <div style={{flex: 1}}/>
                        <Link to={'/settings'}>
                            <FontAwesomeIcon
                                className={"icon"}
                                onMouseEnter={this.handleIconMouseEnter}
                                onMouseLeave={this.handleIconMouseLeave}
                                color={palette.textSecondary}
                                size={'2x'}
                                icon={"cog"}/>
                        </Link>
                    </div>
                </header>
                <main className={"home-main"}>
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