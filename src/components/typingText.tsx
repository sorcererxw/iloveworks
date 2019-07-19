import React, { Component } from 'react'
import { ColorProperty, TextAlignProperty } from 'csstype'
import DisplaySlogan from './displaySlogan'

interface Props {
  slogan?: string[]
  interval: number
  fontColor: ColorProperty
  fontSize: number
  textAlign: TextAlignProperty
}

class TypingText extends Component<Props> {
  static defaultProps = {
    fontSize: 64,
    fontColor: '#000',
    textAlign: 'left',
    slogan: [],
    interval: 3,
  }

  targetText = ''
  index = 0
  timer: number | undefined = undefined

  state = {
    displayText: '',
  }

  updateIndex = () => {
    const slogan = this.props.slogan
    if (slogan === undefined) {
      this.setState({
        displayText: '',
      })
      this.targetText = ''
      return
    }
    if (this.state.displayText === this.targetText) {
      if (this.targetText.length > 0) {
        this.targetText = ''
      } else {
        this.targetText = slogan[this.index++ % slogan.length]
      }
    }

    let text = this.state.displayText
    if (this.targetText.length > text.length && this.targetText.startsWith(text)) {
      text = this.targetText.slice(0, text.length + 1)
    } else {
      text = text.slice(0, text.length - 1)
    }

    this.setState({
      displayText: text,
    })
    console.log({
      display: this.state.displayText,
      target: this.targetText,
    })

    if (this.targetText === text) {
      this.timer = setTimeout(
        () => this.updateIndex(),
        this.props.interval * 1000,
      )
      console.log('wait more')
    } else {
      this.timer = setTimeout(
        () => this.updateIndex(),
        this.props.interval * 200 * 0.2,
      )
    }
  }

  componentDidMount() {
    this.updateIndex()
  }

  componentWillUnmount() {
    if (this.timer !== undefined) {
      clearTimeout(this.timer)
    }
  }

  render() {
    return (
      <div
        style={{
          userSelect: 'none',
          textAlign: this.props.textAlign,
          fontSize: this.props.fontSize,
          color: this.props.fontColor,
        }}
      >
        <DisplaySlogan showCursor={true} displayText={this.state.displayText}/>
      </div>
    )
  }
}

export default TypingText
