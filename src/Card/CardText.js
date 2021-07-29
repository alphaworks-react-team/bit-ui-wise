import React from 'react'

const CardText = (props) => {
  const styles = {
    textBody: {
      background: 'white',
      border: '2px solid black'
    }
  }
  return (
    <div>
      <div classNams='text-body' style={styles.textBody}>
      {props.title ? ( 
        <div className='title'>
      {props.title}
      </div>
      ) : null}
       {props.subtitle ? (
        <div className='subtitle'>
        {props.subtitle}
      </div>
       ): null}
       {props.desc ?(
        <div className='desc'>
        {props.desc}
      </div>
       ) : null}  
      </div>
      </div>
  )
}

export default CardText
