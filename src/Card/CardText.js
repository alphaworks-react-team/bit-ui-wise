import React from 'react'

const CardText = (props) => {
  const styles = {
    textBody: {
      backgroundColor: props.bgColor || 'white',
      padding: '10px'
    }
  }
  return (
    <div className='text-body' style={styles.textBody}>
      {props.children}
    </div>
  )
}

export default CardText
