import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class ShiftTextComponent extends Component {
  static propTypes = {
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    textAlign: PropTypes.oneOf(['center', 'left', 'right']),
    slogan: PropTypes.array,
    interval: PropTypes.number,
  }

  static defaultProps = {
    fontSize: 64,
    fontColor: '#000',
    textAlign: 'left',
    slogan: [],
    interval: 3,
  }

  index = 0

  state = {
    displayText: ""
  }

  updateIndex = () => {
    const slogan = this.props.slogan
    if (slogan === undefined) {
      this.setState({
        displayText: ""
      })
    } else {
      if (this.index >= 2 * slogan.length) {
        this.index = 0
      }
      if (this.index % 2 === 1) {
        this.setState({
          displayText: ''
        })
        setTimeout(() => this.updateIndex(), this.props.interval * 1000 * 0.2)
      } else {
        this.setState({
          displayText: slogan[this.index / 2]
        })
      }
      this.index++
    }
  }

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
    const split = this.state.displayText ?
      this.state.displayText.split("|") : []
    const display = []
    let idx = 0
    for (let i = 0; i < split.length; i++) {
      if (i > 0) display.push(<br/>)
      display.push(
        <ReactMarkdown
          key={idx++}
          renderers={{'paragraph': 'span'}}
          allowedTypes={[
            'root', 'paragraph', 'emphasis',
            'strong', 'delete', 'link', 'linkReference',
            'text'
          ]}
          source={split[i]}/>
      )
    }
    return (
      <div style={{
        userSelect: 'none',
        textAlign: this.props.textAlign,
        fontSize: this.props.fontSize,
        color: this.props.fontColor
      }}>
        <ReactCSSTransitionGroup
          transitionLeaveTimeout={this.props.interval * 1000 * 0.2}
          transitionEnterTimeout={this.props.interval * 1000 * 0.2}
          transitionName="fade">
          {display}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default ShiftTextComponent
