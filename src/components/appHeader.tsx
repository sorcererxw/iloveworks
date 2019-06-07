import React, { Component, CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 48px 16px;
`

const Title = styled.h1`
  padding: 0;
  margin: 0;
`

class AppHeader extends Component<{
  title?: string | JSX.Element,
  rightExtra?: ReactNode
  leftExtra?: ReactNode
  style?: CSSProperties
}> {
  render() {
    const { title, leftExtra, rightExtra } = this.props
    return (
      <header style={{
        width: '100%',
        ...this.props.style,
      }}>
        <Container>
          {
            leftExtra === undefined ? undefined :
              <div style={{ marginRight: 16, }}>
                {leftExtra}
              </div>
          }
          <Title>{title}</Title>
          <div style={{ flex: 1 }}/>
          {
            rightExtra === undefined ? undefined :
              <div style={{ marginLeft: 16 }}>
                {rightExtra}
              </div>
          }
        </Container>
      </header>
    )
  }
}

export default AppHeader
