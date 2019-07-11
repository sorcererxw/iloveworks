import React, { Component } from 'react'
import { getTheme } from '../../theme'
import PreferenceGroup from '../../components/preferenceGroup'
import PreferenceItem from '../../components/preferenceItem'
import { FormattedMessage } from 'react-intl'
import { AnyAction } from 'redux'
import styled from 'styled-components'

const Select = styled.select`
  font-size: 100%;
  border-radius: 4px;
  font-family: sans-serif;
  line-height: 1.2rem;
  align-items: center;
  padding: 2px;
  display: inline-block;
  text-align: start;
  height: auto;
  border-color: rgb(169, 169, 169);

  :focus {
    outline-style: none;
  }
`

interface Props {
  theme: string
  language: string

  updateLanguage(theme: string): AnyAction
}

export default class LanguageTab extends Component<Props> {
  onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.updateLanguage(e.target.value)
  }

  render() {
    const scheme = getTheme(this.props.theme)
    return (
      <PreferenceGroup titleId={'settings.language'}>
        <PreferenceItem>
          <Select
            style={{
              backgroundColor: scheme.primary,
              color: scheme.textPrimary,
            }}
            value={this.props.language}
            onChange={this.onSelect}
          >
            <FormattedMessage id={'settings.language.default'}>
              {text => <option value="">{text}</option>}
            </FormattedMessage>
            <option value="zh-Hans">简体中文</option>
            <option value="zh-Hant">正體中文</option>
            <option value="en-US">English</option>
          </Select>
        </PreferenceItem>
      </PreferenceGroup>
    )
  }
}
