import {Component} from "react"
import {defineMessages, FormattedMessage} from "react-intl"
import autosize from "autosize"
import getTheme from "../../theme"
import PreferenceGroup from "../../components/PerferenceGroup"
import PreferenceItem from "../../components/PreferenceItem"
import {MdArrowDropDown, MdArrowDropUp} from "react-icons/md"
import ReactMarkdown from "react-markdown"
import ShiftTextComponent from "../../components/ShiftTextComponent"
import React from "react"

export default class SloganTab extends Component {
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

    if (theEvent.type === 'paste') {
      key = theEvent.clipboardData.getData('text/plain')
    } else {
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

    const customTab = (
      <PreferenceGroup titleId={"settings.slogan.custom"}>
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
    )
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
      </div>
    )
  }
}
