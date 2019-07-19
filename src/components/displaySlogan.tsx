import React from 'react'
import ReactMarkdown from 'react-markdown'
import TypingCursor from './typingCursor'

class DisplaySlogan extends React.Component<{
  displayText: string,
  showCursor?: boolean
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
        display.push(<br key={i * 2 - 1}/>)
      }
      const markdown = <ReactMarkdown
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
      />
      if (i === split.length - 1 && this.props.showCursor) {
        display.push(
          <span style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            {markdown}
            <TypingCursor/>
          </span>,
        )
      } else {
        display.push(
          <span>{markdown}</span>,
        )
      }
    }
    if (display.length === 0 && this.props.showCursor) {
      display.push(<span><TypingCursor/></span>)
    }
    return <div>{display}</div>
  }
}

export default DisplaySlogan
