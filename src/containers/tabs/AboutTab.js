import {Component} from "react"
import getTheme from "../../theme/index"
import {FormattedMessage} from "react-intl"
import PreferenceGroup from "../../components/PerferenceGroup"
import PreferenceItem from "../../components/PreferenceItem"
import packageJson from "../../../package.json"
import React from "react"

export default class AboutTab extends Component {
    render() {
        const {theme} = this.props
        const scheme = getTheme(theme)
        const about = <FormattedMessage id={'settings.about'}>
            {text =>
                <PreferenceGroup title={text}>
                    <PreferenceItem>
                        <div><span role={'img'} aria-label={'logo'}>💼</span> Version {packageJson.version}</div>
                    </PreferenceItem>
                    <PreferenceItem>
                        <div>
                            <a href={'https://github.com/sorcererXW/iloveworks'}
                               target={'_blank'}
                               style={{
                                   fontWeight: '600',
                                   color: scheme.accent
                               }}>
                                Github
                            </a>
                        </div>
                    </PreferenceItem>
                    <PreferenceItem>
                        <div>
                            <a href={'https://github.com/sorcererXW/iloveworks/releases'}
                               target={'_blank'}
                               style={{
                                   fontWeight: '600',
                                   color: scheme.accent
                               }}>
                                <FormattedMessage id={'settings.about.release_note'}/>
                            </a>
                        </div>
                    </PreferenceItem>
                </PreferenceGroup>
            }
        </FormattedMessage>

        return (
            <div>
                {about}
            </div>
        )
    }
}