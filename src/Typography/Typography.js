import React from 'react'

const Text = (props) => {
  const header = {
    fontSize: '46px',
    fontFamily: 'Sans-serif',
    fontWeight: '700'
  }
  const supportHeader = {
    fontSize: '46px',
    fontFamily: 'Sans-serif',
    fontWeight: '700',
    color: 'grey'
  }
  const subtitle = {
    fontSize: '30px',
    fontFamily: 'Sans-serif',
    fontWeight: '500'
  }
  const body = {
    fontSize: '18px'
  }
  switch (props.variant) {
    case 'header':
      return <h1 style={header}>{props.children}</h1>
    case 'sub-header':
      return <h1 style={supportHeader}>{props.children}</h1>
    case 'subtitle':
      return <h3 style={subtitle}>{props.children}</h3>
    case 'body':
      return <p style={body}>{props.children}</p>
    default:
      return <p>{props.children}</p>
  }
}

export default Text
