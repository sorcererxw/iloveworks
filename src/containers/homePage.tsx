import React, { Component } from 'react'
import ShiftTextComponent from '../components/shiftTextComponent'
import './homePage.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTheme } from '../theme'
import { InjectedIntl, defineMessages, injectIntl } from 'react-intl'
import AppHeader from '../components/appHeader'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { MdSettings } from 'react-icons/md'
import styled from 'styled-components'
import { getQueryParamsFromUrl } from '../utils/urlUtil'

const Root = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
`

interface Props {
  slogan: string
  intl: InjectedIntl
  theme: string
}

interface State {
  idle: boolean
}

class HomePage extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      idle: true,
    }
  }

  getSlogan = (): string[] => {
    let slogan = this.props.slogan
    if (!this.props.slogan || this.props.slogan.trim().length === 0) {
      const messages = defineMessages({
        defaultSlogan: {
          id: 'slogan.default',
        },
      })
      const { intl } = this.props
      slogan = intl.formatMessage(messages.defaultSlogan)
    }

    return slogan.split('\n')
      .map(item => item.trim())
      .filter(item => item.length > 0)
  }

  mouseCountdown: number | undefined = undefined

  handleMouseMove = () => {
    if (this.state.idle) {
      this.setState({
        idle: false,
      })
    }
    if (this.mouseCountdown !== undefined) {
      window.clearTimeout(this.mouseCountdown)
      this.mouseCountdown = undefined
    }
    this.mouseCountdown = window.setTimeout(
      () => this.setState({
        idle: true,
      }), 2000)
  }

  componentWillUnmount() {
    if (this.mouseCountdown !== undefined) {
      window.clearTimeout(this.mouseCountdown)
      this.mouseCountdown = undefined
    }
  }

  render() {
    const palette = getTheme(this.props.theme)

    const settingsIcon = (
      <Link to={'/settings'}>
        <h1><MdSettings
          style={{
            color: palette.textSecondary,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}/></h1>
      </Link>
    )
    return (
      <Root
        style={{
          background: palette.background,
          cursor: this.state.idle ? 'none' : 'default',
        }}
        onMouseMove={this.handleMouseMove}>
        <ReactCSSTransitionGroup
          transitionLeaveTimeout={500}
          transitionEnterTimeout={300}
          transitionName='fade'>
          {this.state.idle ? undefined :
            <AppHeader
              style={{ position: 'absolute', top: 0, }}
              rightExtra={settingsIcon}/>
          }
        </ReactCSSTransitionGroup>
        <main style={{
          boxSizing: 'border-box',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ShiftTextComponent
            textAlign={'center'}
            fontColor={palette.textPrimary}
            fontSize={72}
            slogan={this.getSlogan()}
          />
        </main>
      </Root>
    )
  }
}

const mapStateToProps = (state: any) => {
  let slogan = getQueryParamsFromUrl('slogan')
  if (slogan) {
    slogan = slogan.replace('||', '\n')
  }

  return {
    language: state.settings.language,
    theme: getQueryParamsFromUrl('theme') || state.settings.theme,
    slogan: slogan || state.settings.slogan,
  }
}

export default connect(mapStateToProps)(injectIntl(HomePage))
