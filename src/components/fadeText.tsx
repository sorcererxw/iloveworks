import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { ColorProperty, TextAlignProperty } from 'csstype'
import DisplaySlogan from './displaySlogan'

interface Props {
  slogan?: string[]
  interval: number
  textColor: ColorProperty
  fontSize: number
  textAlign: TextAlignProperty
}

class FadeText extends Component<Props> {
  static defaultProps = {
    fontSize: 64,
    fontColor: '#000',
    textAlign: 'left',
    slogan: [],
    interval: 3,
  }

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
      return
    }
    const mod = this.index % (slogan.length * 2)
    if (mod % 2 === 1) {
      this.setState({
        displayText: '',
      })
    } else {
      this.setState({
        displayText: slogan[mod / 2],
      })
    }
    this.index++
    if (this.state.displayText.length === 0) {
      this.timer = setTimeout(() => this.updateIndex(), this.props.interval * 1000 * 0.2)
    } else {
      this.timer = setTimeout(() => this.updateIndex(), this.props.interval * 1000)
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
    console.log(this.state.displayText)
    return (
      <div
        style={{
          userSelect: 'none',
          textAlign: this.props.textAlign,
          fontSize: this.props.fontSize,
          color: this.props.textColor,
        }}
      >
        <ReactCSSTransitionGroup
          transitionLeaveTimeout={this.props.interval * 1000 * 0.2}
          transitionEnterTimeout={this.props.interval * 1000 * 0.2}
          transitionName='fade'
        >
          <DisplaySlogan
            textColor={this.props.textColor}
            key={this.index}
            displayText={this.state.displayText}
          />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default FadeText
