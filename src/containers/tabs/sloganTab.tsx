import { Component } from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import { getTheme } from '../../theme'
import PreferenceGroup from '../../components/preferenceGroup'
import PreferenceItem from '../../components/preferenceItem'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import React from 'react'
import { InjectedIntl } from 'react-intl'
import { AnyAction } from 'redux'

interface Props {
  theme: string
  interval: number
  slogan: string
  intl: InjectedIntl
  updateSlogan: (theme: string) => AnyAction
  updateInterval: (theme: number) => AnyAction
}

interface State {
  text: string,
  showSyntax: boolean,
  fontSize: number,
  interval: number
}

export default class SloganTab extends Component<Props, State> {
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
      const { intl } = this.props
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
    const autosize = require('autosize')
    autosize(textarea)
  }

  // @ts-ignore
  onTextChange = (e) => {
    const text = e.target.value
    if (text === undefined) {
      this.setState({ text: '' })
    } else {
      this.setState({ text: text })
    }
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

  render() {
    const { theme } = this.props
    const scheme = getTheme(theme)
    // 渲染好界面后更新输入框大小
    window.requestAnimationFrame(() => this.updateTextareaSize())

    const customTab = (
      <PreferenceGroup titleId={'settings.slogan.custom'}>
        <PreferenceItem>
          <div>
            <textarea
              onChange={this.onTextChange}
              value={this.state.text}
              ref={'textarea'}
              onKeyUp={this.updateTextareaSize}
              className={'slogan-textarea'}
              spellCheck={false}
              style={{
                backgroundColor: scheme.primary,
                color: scheme.textPrimary
              }}
            />
            <div style={{
              paddingRight: 16,
              paddingLeft: 16,
              userSelect: 'none',
              color: scheme.textSecondary,
              fontSize: '0.8rem'
            }}>
              <div
                onClick={() => this.setState({ showSyntax: !this.state.showSyntax })}
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                <FormattedMessage id={'settings.slogan.syntax'}/>
                {
                  this.state.showSyntax ?
                    <MdArrowDropUp style={{
                      verticalAlign: 'middle',
                      marginLeft: 4,
                      fontSize: '1rem'
                    }}/>
                    : <MdArrowDropDown style={{
                      verticalAlign: 'middle',
                      marginLeft: 4,
                      fontSize: '1rem'
                    }}/>
                }
              </div>
              {this.state.showSyntax ?
                <div>
                  <FormattedMessage id={'settings.slogan.syntax.summary'}>
                    {
                      (text: string | JSX.Element) => {
                        if (typeof text !== 'string') {
                          return null
                        }
                        return <ReactMarkdown
                          renderers={{ 'paragraph': 'div' }}
                          source={text}/>
                      }
                    }
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
            <div style={{ flex: 1 }}/>
            <div className={'button-bar'}>
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
    )

    return (
      <div>
        {customTab}
      </div>
    )
  }
}
