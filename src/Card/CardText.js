import React from 'react'

 const CardText = (props) => {

  const styles = {
    textBody:{
      background: 'white',
      border: '2px solid black',

    }
  }
  return (
    <div>
    <div classNams="text-body" style={styles.textBody}>
    <div className="title">
    
    </div>
    {props.children}
    </div>
    </div>
  )
}

export default CardText
