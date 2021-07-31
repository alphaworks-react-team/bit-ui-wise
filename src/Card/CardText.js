import React from 'react'

const CardText = (props) => {
  const styles = {
    textBody: {
      background: props.bg || 'white',
      padding: '10px'
    }
  }
  return (
    <div classNams='text-body' style={styles.textBody}>
      {props.children}
    </div>
  )
}

export default CardText
