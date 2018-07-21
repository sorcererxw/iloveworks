import React, {Component} from 'react'
import getTheme from "../theme"
import {hexToRgbA} from "../utils/colorUtil"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es"
import {FormattedMessage} from "react-intl"

export default class PreferenceItem extends Component {
    render() {
        const {title, titleId, iconName, actionView} = this.props
        let itemView = <div style={{
            display: 'flex'
        }}>
            <div style={{flex: 1}}>
                {
                    iconName ?
                        <FontAwesomeIcon style={{
                            marginRight: 16
                        }} icon={iconName}/> : undefined
                }
                {
                    titleId ?
                        <FormattedMessage id={titleId}/> :
                        <span>{title}</span>
                }
            </div>
            <div style={{flex: 2}}>
                <div>{actionView}</div>
            </div>
        </div>

        return (
            <div style={{
                paddingTop: 16,
                paddingBottom: 16,
                marginBottom: 16,
                borderStyle: 'solid',
                borderWidth: 0,
                borderBottomWidth: 1,
                borderColor: hexToRgbA(getTheme(this.props.theme).textSecondary, 0.2)
            }}>
                {itemView}
                {this.props.children}
            </div>
        )
    }
}