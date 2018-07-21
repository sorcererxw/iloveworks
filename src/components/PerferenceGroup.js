import React, {Component} from 'react'
import {FormattedMessage} from "react-intl"

export default class PreferenceGroup extends Component {
    render() {
        const {title, titleId, children} = this.props
        const titleStyle = {
            paddingTop: 16,
            paddingBottom: 16,
            fontWeight: 'bold',
            fontSize: '1.5rem'
        }

        if (titleId !== undefined) {
            return <div>
                <FormattedMessage id={titleId}>
                    {text => <div style={titleStyle}>{text}</div>}
                </FormattedMessage>
                <div>
                    {children}
                </div>
            </div>
        }
        return (
            <div>
                <div style={titleStyle}>{title}</div>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}