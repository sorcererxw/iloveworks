import React, { Component } from 'react'
import { getTheme } from '../../theme'
import { hexToRgbA } from '../../utils/colorUtil'
import { FormattedMessage } from 'react-intl'
import PreferenceGroup from '../../components/preferenceGroup'
import PreferenceItem from '../../components/preferenceItem'
import styled from 'styled-components'
import { AnyAction } from 'redux'

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

interface Props {
  theme?: string

  updateTheme(theme: string): AnyAction
}

class AppearanceTab extends Component<Props> {
  render() {
    const { theme, updateTheme } = this.props
    if (theme === undefined) {
      updateTheme('light')
    }
    const scheme = getTheme(theme)
    const themeBlock = (titleId: string, value: string) => {
      return (
        <ThemeBlockContainer
          onClick={((handle, v) => () => handle(v))(updateTheme, value)}
          style={{
            borderColor: hexToRgbA(scheme.textSecondary, 0.2),
            color: getTheme(value).textPrimary,
            backgroundColor: getTheme(value).background,
          }}
        >
          <FormattedMessage id={titleId} />
          <ThemeBlockSelection
            style={{
              backgroundColor: value === theme ? scheme.accent : 'transparent',
            }}
          />
        </ThemeBlockContainer>
      )
    }

    return (
      <div>
        <FormattedMessage id={'settings.appearance.theme'}>
          {text => (
            <PreferenceGroup title={text}>
              <PreferenceItem>
                <div style={{ width: '100%' }}>
                  {themeBlock('settings.appearance.theme.white', 'white')}
                  {themeBlock('settings.appearance.theme.light', 'light')}
                  {themeBlock('settings.appearance.theme.dark', 'dark')}
                  {themeBlock('settings.appearance.theme.black', 'black')}
                  {themeBlock('settings.appearance.theme.chrome-dark', 'chrome-dark')}
                  {themeBlock('settings.appearance.theme.jike-yellow', 'jike-yellow')}
                </div>
              </PreferenceItem>
            </PreferenceGroup>
          )}
        </FormattedMessage>
      </div>
    )
  }
}

export default AppearanceTab
