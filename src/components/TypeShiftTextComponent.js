import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TypeShiftTextComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayText: ''
    }
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    this.textList = this.props.textList ? this.props.textList : defaultProps.textList
    this.textIndex = -1
    this.charIndex = -1
    this.indexGrow = true
    this.setState({
      displayText: ''
    })

    this.intervals = setInterval(
      this.update,
      this.props.interval ? this.props.interval : 1000
    )
  }

  update() {
    if (this.waiting) {
      this.waiting--
      return
    }
    const textList = this.textList
    if (textList === undefined || textList.length === 0) {
      this.setState({
        displayText: ''
      })
      return
    }
    const mode = this.props.mode
    const getNextTextIndex = ((textList, currentIndex) => {
      if (isNaN(currentIndex)) return 0
      if (currentIndex < 0) return 0
      if (currentIndex >= textList.length - 1) return 0
      return currentIndex + 1
    })
    if (mode === 'type') {
      if (this.textIndex < 0 || isNaN(this.textIndex) || this.textIndex >= textList.length)
        this.textIndex = 0
      const currentText = textList[this.textIndex]
      if (this.indexGrow) {
        if (this.charIndex + 1 === currentText.length) {
          this.indexGrow = false
          this.setState({
            displayText: currentText
          })
          this.waiting = 3
        } else {
          this.charIndex++
          this.setState({
            displayText: currentText.substring(0, this.charIndex)
          })
        }
      } else {
        if (this.charIndex === 0) {
          this.indexGrow = true
          this.textIndex = getNextTextIndex(textList, this.textIndex)
          this.setState({
            displayText: ''
          })
          this.waiting = 1
        } else {
          this.charIndex--
          this.setState({
            displayText: currentText.substring(0, this.charIndex)
          })
        }
      }
    } else {
      const nextTextIndex = getNextTextIndex(textList, this.textIndex)
      const text = textList[nextTextIndex]
      this.setState({
        textIndex: nextTextIndex,
        displayText: text
      })
    }
  }

  componentWillUnmount() {
    if (this.intervals !== undefined) {
      clearInterval(this.intervals)
    }
  }

  render() {
    if (this.state.displayText === undefined
      || this.state.displayText == null
      || this.state.displayText.length === 0) return null
    const arr = this.state.displayText.split('|').filter(item => {
      return item !== undefined && item != null && item.length > 0
    })
    const displayList = []
    let iteratorKey = 0
    for (let i = 0; i < arr.length; i++) {
      if (i > 0) displayList.push(<br key={iteratorKey++}/>)
      displayList.push(
        <b key={iteratorKey++} style={styles.slogan}>
          {arr[i]}
        </b>
      )
    }
    return (
      <div>
        {displayList}
      </div>
    )
  }
}

TypeShiftTextComponent.propTypes = {
  interval: PropTypes.number,
  textList: PropTypes.arrayOf(PropTypes.string),
  mode: PropTypes.oneOf(['none', 'type', 'fade'])
}

const defaultProps = {
  mode: 'none',
  textList: [],
  interval: 1000
}

TypeShiftTextComponent.defaultProps = defaultProps

const styles = {}
styles.slogan = {
  fontSize: 64,
  fontWeight: 600,
  textAlign: 'center',
  userSelect: 'none',
  color: '#111111',
}

export default TypeShiftTextComponent
