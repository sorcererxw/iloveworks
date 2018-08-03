import {Component} from "react"
import {FormattedMessage} from "react-intl"
import PreferenceGroup from "../../components/PerferenceGroup"
import PreferenceItem from "../../components/PreferenceItem"
import React from "react"

export default class ApplicationTab extends Component {
    state = {
        deferredPrompt: undefined
    }

    constructor(props) {
        super(props)
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault()
            // Stash the event so it can be triggered later.
            this.setState({
                deferredPrompt: e
            })
        })
    }

    onAddPwa = () => {
        this.setState.deferredPrompt.prompt()
        // Wait for the user to respond to the prompt
        this.setState.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt')
            } else {
                console.log('User dismissed the A2HS prompt')
            }
        })
    }

    render() {
        return (
            <FormattedMessage id="settings.application">
                {(title) => (
                    <PreferenceGroup title={title}>
                        <PreferenceItem
                            title={'PWA'}
                            actionView={
                                <button onClick={this.onAddPwa}>添加</button>
                            }>
                        </PreferenceItem>
                        <PreferenceItem>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div>Chrome 扩展</div>
                                <div><a>Download</a></div>
                            </div>
                        </PreferenceItem>
                    </PreferenceGroup>
                )}
            </FormattedMessage>
        )
    }
}
