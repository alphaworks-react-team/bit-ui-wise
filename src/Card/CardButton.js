import React from 'react'
import PropTypes from 'prop-types'

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
    backgroundColor: props.bgColor || 'white'
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

CardButton.propTypes = {
  position: PropTypes.string,
  bgColor: PropTypes.string,
  buttons: PropTypes.arrayOf({
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string
  })
  // buttons: PropTypes.arrayOf(PropTypes.shapes({
  //   variant:PropTypes.string,
  //   color:PropTypes.string,
  //   size:PropTypes.string
  // })) this gave me errors
}
CardButton.defaultProps = {
  position: 'space-evenly',
  bgColor: 'white', //do we need BGC???
  buttons: [
    {
      variant: '',
      color: 'primary',
      size: 'md'
    }
  ] 
}

export default CardButton
