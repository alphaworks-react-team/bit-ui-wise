import React from 'react'

const CardText = (props) => {
  const styles = {
    textBody: {
      background: 'white',
      border: '2px solid black'
    }
  }
  return (
   
      <div classNams='text-body' style={styles.textBody}>
        {props.children}
      </div>
  )
}

export default CardText
