import {Component} from "react"
import getTheme from "../../theme"
import PreferenceGroup from "../../components/PerferenceGroup"
import PreferenceItem from "../../components/PreferenceItem"
import {FormattedMessage} from "react-intl"
import React from "react"

export default class LanguageTab extends Component {
    onSelect = (e) => {
        this.props.updateLanguage(e.target.value)
    }

    render() {
        const {theme} = this.props
        const scheme = getTheme(theme)
        return (
            <PreferenceGroup titleId={'settings.language'}>
                <PreferenceItem>
                    <select className={'setting-select'}
                            style={{
                                backgroundColor: scheme.primary,
                                color: scheme.textPrimary
                            }}
                            value={this.props.language}
                            onChange={this.onSelect}>
                        <FormattedMessage id={'settings.language.default'}>
                            {text => <option value="">{text}</option>}
                        </FormattedMessage>
                        <option value="zh-Hans">简体中文</option>
                        <option value="zh-Hant">正體中文</option>
                        <option value="en-US">English</option>
                    </select>
                </PreferenceItem>
            </PreferenceGroup>
        )
    }
}
