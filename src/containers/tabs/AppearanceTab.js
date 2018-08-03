import {Component} from "react"
import getTheme from "../../theme"
import {hexToRgbA} from "../../utils/colorUtil"
import {FormattedMessage} from "react-intl"
import PreferenceGroup from "../../components/PerferenceGroup"
import PreferenceItem from "../../components/PreferenceItem"
import React from "react"

export default class AppearanceTab extends Component {

    onThemeSelect = (theme) => {
        this.props.updateTheme(theme)
    }

    render() {
        const {theme, updateTheme} = this.props
        if (theme === undefined) {
            updateTheme('light')
        }
        const scheme = getTheme(theme)
        const ThemeBlock = ({titleId, value}) => {
            return (
                <div
                    onClick={() => this.onThemeSelect(value)}
                    style={{
                        margin: 8,
                        display: 'inline-block',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderRadius: 8,
                        padding: 16,
                        paddingBottom: 14,
                        userSelect: 'none',
                        fontSize: '1rem',
                        borderColor: hexToRgbA(scheme.textSecondary, 0.2),
                        color: getTheme(value).textPrimary,
                        backgroundColor: getTheme(value).background,
                    }}>
                    <FormattedMessage id={titleId}/>
                    <div style={{
                        height: 2,
                        marginTop: 2,
                        borderWidth: 0,
                        borderRadius: 2,
                        backgroundColor: value === theme ?
                            scheme.accent : 'transparent'
                    }}/>
                </div>
            )
        }

        return (
            <div>
                <FormattedMessage id={'settings.appearance.theme'}>
                    {text =>
                        <PreferenceGroup title={text}>
                            <PreferenceItem>
                                <div style={{width: '100%'}}>
                                    <ThemeBlock
                                        value={'white'}
                                        titleId={'settings.appearance.theme.white'}/>
                                    <ThemeBlock
                                        value={'light'}
                                        titleId={'settings.appearance.theme.light'}/>
                                    <ThemeBlock
                                        value={'dark'}
                                        titleId={'settings.appearance.theme.dark'}/>
                                    <ThemeBlock
                                        value={'black'}
                                        titleId={'settings.appearance.theme.black'}/>
                                </div>
                            </PreferenceItem>
                        </PreferenceGroup>
                    }
                </FormattedMessage>
            </div>
        )
    }
}
