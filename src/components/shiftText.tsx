import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { ColorProperty, TextAlignProperty } from 'csstype'
import DisplaySlogan from './displaySlogan'

interface Props {
  slogan?: string[]
  interval: number
  fontColor: ColorProperty
  fontSize: number
  textAlign: TextAlignProperty
}

class ShiftText extends Component<Props> {
  static defaultProps = {
    fontSize: 64,
    fontColor: '#000',
    textAlign: 'left',
    slogan: [],
    interval: 3,
  }

  index = 0

  state = {
    displayText: '',
  }

  updateIndex = () => {
    const slogan = this.props.slogan
    if (slogan === undefined) {
      this.setState({
        displayText: '',
      })
    } else {
      if (this.index >= slogan.length * 2) {
        this.index = 0
      }
      if (this.index % 2 === 1) {
        this.setState({
          displayText: '',
        })
        setTimeout(() => this.updateIndex(), this.props.interval * 1000 * 0.2)
      } else {
        this.setState({
          displayText: slogan[this.index / 2],
        })
      }
      this.index++
    }
  }

  timer: number | undefined = undefined

  componentDidMount() {
    this.updateIndex()
    this.timer = setInterval(this.updateIndex, this.props.interval * 1000)
  }

  componentWillUnmount() {
    if (this.timer !== undefined) {
      clearInterval(this.timer)
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
        <ReactCSSTransitionGroup
          transitionLeaveTimeout={this.props.interval * 1000 * 0.2}
          transitionEnterTimeout={this.props.interval * 1000 * 0.2}
          transitionName="fade"
        >
          <DisplaySlogan displayText={this.state.displayText} />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default ShiftText
