import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
                <div style={{
                    boxSizing: 'border-box',
                    height: 64,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 48,
                    paddingBottom: 48,
                    paddingLeft: 16,
                    paddingRight: 16,
                }}>
                    {
                        leftExtra === undefined ? undefined :
                            <div style={{marginRight: 16,}}>
                                {leftExtra}
                            </div>
                    }
                    <h1 style={{
                        padding: 0,
                        margin: 0,
                    }}>{title}</h1>
                    <div style={{flex: 1}}/>
                    {
                        rightExtra === undefined ? undefined :
                            <div style={{marginLeft: 16}}>
                                {rightExtra}
                            </div>
                    }
                </div>
            </header>
        )
    }
}