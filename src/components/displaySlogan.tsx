import React from 'react'
import ReactMarkdown from 'react-markdown'

class DisplaySlogan extends React.Component<{
  displayText: string
}> {
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    const split = this.props.displayText ? this.props.displayText.split('|') : []
    const display = []
    for (let i = 0; i < split.length; i++) {
      if (i > 0) {
        display.push(<br key={i * 2 - 1} />)
      }
      display.push(
        <ReactMarkdown
          key={i * 2}
          renderers={{ paragraph: 'span' }}
          allowedTypes={[
            'root',
            'paragraph',
            'emphasis',
            'strong',
            'delete',
            'link',
            'linkReference',
            'text',
          ]}
          source={split[i]}
        />,
      )
    }
    return display
  }
}

export default DisplaySlogan
