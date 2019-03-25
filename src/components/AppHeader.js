import React, {Component} from 'react'
import PropTypes from 'prop-types'
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

export default class AppHeader extends Component {
    static propTypes = {
        leftExtra: PropTypes.object,
        rightExtra: PropTypes.object
    }

    render() {
        const {title, leftExtra, rightExtra} = this.props
        return (
            <header style={{
                width: '100%',
                ...this.props.style
            }}>
                <Container>
                    {
                        leftExtra === undefined ? undefined :
                            <div style={{marginRight: 16,}}>
                                {leftExtra}
                            </div>
                    }
                    <Title>{title}</Title>
                    <div style={{flex: 1}}/>
                    {
                        rightExtra === undefined ? undefined :
                            <div style={{marginLeft: 16}}>
                                {rightExtra}
                            </div>
                    }
                </Container>
            </header>
        )
    }
}