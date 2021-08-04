import React from 'react'

const CardText = (props) => {
  const styles = {
    textBody: {
      backgroundColor: props.bgColor || 'white',
      textAlign: props.textAlign || 'left'
    }
  }
  return (
    <div className='text-body' style={styles.textBody}>
      {props.children}
    </div>
  )
}

// ADD PROPTYPES HERE AKIKO
export default CardText
