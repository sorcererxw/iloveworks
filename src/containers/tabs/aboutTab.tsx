import { Component } from "react"
import { getTheme } from "../../theme"
import { FormattedMessage } from "react-intl"
import PreferenceGroup from "../../components/preferenceGroup"
import PreferenceItem from "../../components/preferenceItem"
import packageJson from "../../../package.json"
import React from "react"

interface Props {
  theme: string
}

export default class AboutTab extends Component<Props> {
  render() {
    const { theme } = this.props
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
                   fontWeight: "bold",
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
                   fontWeight: "bold",
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
