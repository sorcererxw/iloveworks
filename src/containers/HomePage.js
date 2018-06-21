import React, {Component} from 'react'
import {Icon, Row, Col} from 'antd'
import ShiftTextComponent from "../components/ShiftTextComponent"
import {injectIntl, defineMessages} from "react-intl"
import {connect} from 'react-redux'

const messages = defineMessages({
    defaultSlogan: {id: 'slogan.default'}
})

class HomePage extends Component {

    state = {
        displayHeader: false
    }

    render() {
        const {sloganList, intl} = this.props

        return (
            <div>
                {this.state.displayHeader ?
                    <div>
                        <Icon
                            type={"setting"}
                            onClick={() => {
                                this.props.history.push("/settings")
                            }}/>
                    </div>
                    : null
                }
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle"
                    style={{height: '100%', width: "100%"}}>
                    <Col/>
                    <Col span={24} style={{height: '100%'}}>
                        <ShiftTextComponent
                            mode={'type'}
                            interval={200}
                            textList={
                                sloganList ? sloganList
                                    : intl.formatMessage(messages.defaultSlogan)}
                        />
                    </Col>
                    <Col/>
                </Row>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        sloganList: state.sloganList
    }
})(injectIntl(HomePage))