import React from 'react'

const CardButton = (props) => {
  const styles = {
    height: '100%',
    margin: '10px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent:
      props.position === 'left'
        ? 'flex-start'
        : props.position === 'center'
        ? 'center'
        : props.position === 'right'
        ? 'flex-end'
        : 'space-evenly',
    alignContent: 'space-around',
    alignItems: 'space-between',
    backgroundColor: props.bgColor || 'white',
  }
  return (
    <div>
      {props.buttons ? (
        <div className='buttonGroup' style={styles}>
          {props.buttons.map((item) => item)}
        </div>
      ) : null}
    </div>
  )
}

// ADD PROPTYPES HERE AKIKO
export default CardButton
