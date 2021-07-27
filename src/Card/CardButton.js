import React from 'react'

const CardButton = (props) => {
  const styles = {
    height: '100%',
    margin: '10px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    alignItems: 'space-between'
    // minHeight: {minHeight: "51px" ? minHeight: '125px' :  null}
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

export default CardButton
