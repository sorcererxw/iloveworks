import React, {Component} from 'react'
import {FormattedMessage} from "react-intl"
import styled from 'styled-components'

const Title = styled.div`
  padding: 16px 0;
  font-weight: bold;
  font-size: 1.5rem;
`

export default class PreferenceGroup extends Component {
  render() {
    const {title, titleId, children} = this.props

    if (titleId !== undefined) {
      return (
        <div>
          <FormattedMessage id={titleId}>
            {text => <Title>{text}</Title>}
          </FormattedMessage>
          <div>
            {children}
          </div>
        </div>
      )
    }
    return (
      <div>
        <Title>{title}</Title>
        <div>
          {children}
        </div>
      </div>
    )
  }
}
