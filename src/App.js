import React, {Component} from 'react'
import './App.css'

const slogan = [
    "优秀，\n是一种习惯。",
    "优秀，\n是与生俱来的天赋。",
    "我爱工作，",
    "工作使我快乐。",
    "我徜徉在工作的海洋里，",
    "上司叫我吃饭，\n我充耳不闻，",
    "同事喊我喝水，\n我无动于衷，",
    "老板喊我睡觉,\n我百般推辞。"
]

class App extends Component {

    state = {
        index: 0
    }

    componentDidMount() {
        this.intervals = setInterval(() => {
            let i = this.state.index + 1
            if (i >= slogan.length) i = 0
            this.setState({
                index: i
            })
        }, 1500)
    }

    componentWillUnmount() {
        if (this.intervals !== undefined) {
            clearInterval(this.intervals)
        }
    }

    render() {
        const renderSlogan = () => {
            let s = ""
            if (this.state.index < slogan.length) {
                s = slogan[this.state.index]
            }
            return <div className={"slogan"}>{s}</div>
        }

        return (
            <div>
                <div className={"center"}>
                    {renderSlogan()}
                </div>
            </div>
        )
    }
}

export default App
