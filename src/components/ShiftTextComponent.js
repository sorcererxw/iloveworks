import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

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
    interval: 2,
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
      if (this.index >= slogan.length) {
        this.index = 0
      }
      this.setState({
        displayText: slogan[this.index]
      })
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
    return <div style={{
      userSelect: 'none',
      textAlign: this.props.textAlign,
      fontSize: this.props.fontSize,
      color: this.props.fontColor
    }}>{display}</div>
  }
}

export default ShiftTextComponent
