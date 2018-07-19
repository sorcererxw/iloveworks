import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class AppStoreLogo extends Component {
    static propTypes = {
        actionText: PropTypes.string,
        storeName: PropTypes.string,
        target: PropTypes.string,
        icon: PropTypes.string
    }

    static defaultProps = {
        actionText: 'Get it from',
        storeName: 'Google Play',
        target: 'google.com',
        icon: 'https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
    }

    render() {
        return (
            <a href={this.props.target} target={'_blank'}>
                <div>
                    <img src={this.props.icon}/>
                    <div>{this.props.actionText}</div>
                    <div style={{
                        fontWeight: 'bold'
                    }}>{this.props.storeName}
                    </div>
                </div>
            </a>
        )
    }
}