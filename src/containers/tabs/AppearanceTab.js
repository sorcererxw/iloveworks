import {Component} from "react"
import getTheme from "../../theme"
import {hexToRgbA} from "../../utils/colorUtil"
import {FormattedMessage} from "react-intl"
import PreferenceGroup from "../../components/PerferenceGroup"
import PreferenceItem from "../../components/PreferenceItem"
import React from "react"
import styled from 'styled-components'

const ThemeBlockContainer = styled.div`
  margin: 8px;
  display: inline-block;
  border: 1px solid;
  border-radius: 8px;
  padding: 16px 16px 14px;
  user-select: none;
  cursor: pointer;
  font-size: 1rem;
`

const ThemeBlockSelection = styled.div`
  height: 2px;
  margin-top: 2px;
  border-width: 0;
  border-radius: 2px;
`

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
        <ThemeBlockContainer
          onClick={() => this.onThemeSelect(value)}
          style={{
            borderColor: hexToRgbA(scheme.textSecondary, 0.2),
            color: getTheme(value).textPrimary,
            backgroundColor: getTheme(value).background,
          }}>
          <FormattedMessage id={titleId}/>
          <ThemeBlockSelection style={{
            backgroundColor: value === theme ? scheme.accent : 'transparent'
          }}/>
        </ThemeBlockContainer>
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
