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
    backgroundColor: props.bgColor,
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

Card.propTypes = {
  position: PropTypes.string,
  bgColor: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.shapes({
    variant:PropTypes.string,
    color:PropTypes.string,
    size:PropTypes.string
  }))
}
Card.defaultProps = {
  position: 'space-evenly',
  bgColor: 'white', //do we need BGC???
  buttons:[{
    variant: '',
    color: 'primary',
    size: 'md'
  }]
}

export default CardButton
