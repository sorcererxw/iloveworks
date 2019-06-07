import React, { Component, ReactNode } from 'react'
import { getTheme } from '../theme'
import { hexToRgbA } from '../utils/colorUtil'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

const Container = styled.div`
  padding: 16px 0;
  margin-bottom: 16px;
  border: 0 solid;
  border-bottom-width: 1px;
`

interface Props {
  title?: string,
  titleId?: string,
  actionView?: ReactNode
  theme?: string
}

export default class PreferenceItem extends Component<Props> {
  render(): ReactNode {
    const { title, titleId, actionView } = this.props
    const itemView = (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          {
            titleId ?
              <FormattedMessage id={titleId}/> :
              <span>{title}</span>
          }
        </div>
        <div style={{ flex: 2 }}>
          <div>{actionView}</div>
        </div>
      </div>
    )

    return (
      <Container style={{
        borderColor: hexToRgbA(getTheme(this.props.theme).textSecondary, 0.2),
      }}>
        {itemView}
        {this.props.children}
      </Container>
    )
  }
}
