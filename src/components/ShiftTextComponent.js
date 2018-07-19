import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ShiftTextComponent extends Component {
    static propTypes = {
        fontSize: PropTypes.number,
        fontColor: PropTypes.string,
        textAlign: PropTypes.oneOf(['center', 'left', 'right']),
        slogan: PropTypes.array
    }

    static defaultProps = {
        fontSize: 64,
        fontColor: '#000',
        textAlign: 'left',
        slogan: []
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
        this.timer = setInterval(this.updateIndex, 1000)
    }

    componentWillUnmount() {
        if (this.timer !== undefined) {
            clearInterval(this.timer)
        }
    }

    render() {
        const split = this.state.displayText.split("|")
        const display = []
        let idx = 0
        for (let i = 0; i < split.length; i++) {
            if (i > 0) {
                display.push(<br key={idx++}/>)
            }
            display.push(<span key={idx++}>{split[i]}</span>)
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