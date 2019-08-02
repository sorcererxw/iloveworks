import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'
import { ColorProperty } from 'csstype'

interface Props {
  color: ColorProperty
}

const Cursor = styled.span`
  border-color: ${props => props.color};
  color: ${props => props.color};
  border-width: 0;
  border-right-width: 0.15em;
  height: 100%;
  width: 0.2em;
  border-style: solid;
  margin-right: -0.4em;
  padding-left: 0.1em;
  padding-right: 0.1em;
`

class TypingCursor extends Component<Props> {
  timer: number | undefined = undefined

  state = {
    display: false,
  }

  updateCursor() {
    this.setState({
      display: !this.state.display,
    })
    this.timer = setTimeout(() => this.updateCursor(), 1000)
  }

  componentDidMount() {
    this.updateCursor()
  }

  componentWillUnmount() {
    if (this.timer !== undefined) {
      clearTimeout(this.timer)
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionLeaveTimeout={500}
        transitionEnterTimeout={500}
        transitionName='fade'
      >
        {
          this.state.display ? <Cursor color={this.props.color}/> : null
        }
      </ReactCSSTransitionGroup>
    )
  }
}

export default TypingCursor
