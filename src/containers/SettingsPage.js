import React, {Component} from 'react'
import {Icon, Row, Col, Card, Form, Radio, Input, Button, Select} from 'antd'
import {
    updateNightModeAction,
    updateLanguageAction,
    updateAutoNightModeAction,
    updateEffectAction
} from "../actions/index"
import {FormattedMessage, defineMessages, injectIntl, intlShape} from 'react-intl'
import {connect} from 'react-redux'
import {updateAutoNightScheduleAction} from "../actions"

const SelectOption = Select.Option
const TextArea = Input.TextArea
const RadioGroup = Radio.Group
const FormItem = Form.Item

const messages = defineMessages({
    settings: {id: "settings"},
    languageLabel: {id: "settings.language.label"},
    nightModeLabel: {id: "settings.nightmode.label"},
    effectLabel: {id: "settings.effect.label"},
    sloganLabel: {id: "settings.slogan.label"},
    aboutLabel: {id: "settings.about.label"}
})

class SettingsPage extends Component {
    static propTypes = {
        intl: intlShape
    }

    state = {}

    onLanguageChange = (value) => {
        this.props.dispatch(updateLanguageAction(value))
    }

    onNightModeChange = (e) => {
        this.props.dispatch(updateNightModeAction(e.target.value))
    }

    onAutoNightModeChange = (e) => {
        this.props.dispatch(updateAutoNightModeAction(e.target.value))
    }

    onAutoNightScheduleChange = (e) => {
        this.props.dispatch(updateAutoNightScheduleAction(e.target.value))
    }

    onEffectChange = (e) => {
        this.props.dispatch(updateEffectAction(e.target.value))
    }

    render() {
        const {intl, nightMode, autoNightMode, autoNightSchedule, effect} = this.props

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        }

        const settingsCard =
            <Card title={intl.formatMessage(messages.settings)} extra={
                <Icon type={"close"} onClick={() => {
                    this.props.history.goBack()
                }}/>
            }>
                <Form>
                    <FormItem label={intl.formatMessage(messages.languageLabel)}>
                        <Select
                            defaultValue={this.props.language}
                            onChange={this.onLanguageChange}>
                            <SelectOption value="">
                                <FormattedMessage id={'settings.language.option.default'}/>
                            </SelectOption>
                            <SelectOption value="zh_CN">简体中文</SelectOption>
                            <SelectOption value="zh_TW">正體中文</SelectOption>
                            <SelectOption value="en_US">English</SelectOption>
                        </Select>
                    </FormItem>
                    <FormItem label={intl.formatMessage(messages.nightModeLabel)}>
                        <RadioGroup
                            onChange={this.onNightModeChange}
                            value={nightMode}>
                            <Radio style={radioStyle} value={0}>
                                <FormattedMessage id={'settings.nightmode.option.off'}/>
                            </Radio>
                            <Radio style={radioStyle} value={1}>
                                <FormattedMessage id={'settings.nightmode.option.on'}/>
                            </Radio>
                            <Radio style={radioStyle} value={2}>
                                <FormattedMessage id={'settings.nightmode.option.auto'}/>
                                {nightMode !== 2 ? null :
                                    <RadioGroup
                                        onChange={this.onAutoNightModeChange}
                                        value={autoNightMode}>
                                        <Radio style={radioStyle} value={0}>
                                            <FormattedMessage id={'settings.nightmode.option.auto.location'}/>
                                        </Radio>
                                        <Radio style={radioStyle} value={1}>
                                            <FormattedMessage id={'settings.nightmode.option.auto.custom'}/>
                                        </Radio>
                                    </RadioGroup>
                                }</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label={intl.formatMessage(messages.effectLabel)}>
                        <RadioGroup
                            onChange={this.onEffectChange}
                            value={effect}>
                            <Radio style={radioStyle} value={0}>
                                <FormattedMessage id={'settings.effect.option.none'}/>
                            </Radio>
                            <Radio style={radioStyle} value={1}>
                                <FormattedMessage id={'settings.effect.option.type'}/>
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label={intl.formatMessage(messages.sloganLabel)}>
                        <TextArea>
                        </TextArea>
                        <i><FormattedMessage id={'settings.slogan.summary'}/></i>
                        <Button><FormattedMessage id={'settings.slogan.action.save'}/></Button>
                        <Button><FormattedMessage id={'settings.slogan.action.cancel'}/></Button>
                        <Button><FormattedMessage id={'settings.slogan.action.restore'}/></Button>
                    </FormItem>
                    <FormItem label={intl.formatMessage(messages.aboutLabel)}>
                        <div>
                            <a href={"https://github.com/sorcererXW/iloveworks"}>
                                <FormattedMessage id={'settings.about.github'}/>
                            </a>
                        </div>
                    </FormItem>
                </Form>
            </Card>

        const responsiveConfig = {
            leftSpace: {xs: 0, sm: 0, md: 4,},
            content: {xs: 24, sm: 24, md: 12,},
            rightSpace: {xs: 0, sm: 0, md: 8,}
        }

        return (
            <Row>
                <Col {...responsiveConfig.leftSpace}/>
                <Col {...responsiveConfig.content}>
                    {settingsCard}
                </Col>
                <Col  {...responsiveConfig.rightSpace}/>
            </Row>
        )
    }
}


export default connect((state) => {
    return {
        language: state.language,
        nightMode: state.nightMode,
        autoNightMode: state.autoNightMode,
        autoNightSchedule: state.autoNightSchedule,
        effect: state.effect
    }
})(injectIntl(SettingsPage))