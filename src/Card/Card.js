import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {
  const styles = {
    minWidth:
      props.size === 'sm'
        ? '275px'
        : props.size === 'md'
        ? '550px'
        : props.size === 'lrg'
        ? '825px'
        : '100%',
    maxWidth:
      props.size === 'sm'
        ? '275px'
        : props.size === 'md'
        ? '550px'
        : props.size === 'lrg'
        ? '825px'
        : '100%',
    minHeight: `150px`,
    height: `${props.height}`,
    backgroundColor: props.bgColor,
    boxShadow: '3px 3px 5px black',
    display: 'flex',
    flexDirection: props.direction === 'row' ? props.direction : 'column',
  }
  return <div style={styles}>{props.children}</div>
}

Card.propTypes = {
  height: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.string,
  direction: PropTypes.string
}
Card.defaultProps = {
  height: '',
  bgColor: 'white', 
  size: 'sm',
  direction: 'column',
}


export default Card
