import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'
const Button = (props) => {
//   const styles = {
//     // primary: {
//     //   backgroundColor: '#3f51b5',
//     // },
//     // secondary: {
//     //   backgroundColor: `#FF5722`,
//     // }
//   }
  const commonStyle = {
    fontSize: "100%",
    borderRadius: '3px',
    border: 'none',
    height: '50px',
    width: '100px',
    color: 'white'
  }
  const btnStyles = {
    backgroundColor:
      props.variant === 'primary'
        ? '#3f51b5'
        : props.variant === 'secondary'
        ? '#FF5722'
        : props.variant === 'delete'
        ? '#d91111'
        : props.variant === 'warning'
        ? '#f0d53e'
        : props.variant === 'send'
        ? '#078c22'
        : 'grey'
  }
  return (
    <div>
      <button style={{...btnStyles, ...commonStyle}}>
          {props.children}</button>
      {/* <button
        style={
          props.type === 'primary'
            ? Object.assign(styles.primary, commonStyle)
            : Object.assign(styles.secondary, commonStyle)
        }
      >
        {props.text}
      </button> */}
    </div>
  )
}

Button.propTypes = {
  variant: PropTypes.string
}
Button.defaultProps = {
  variant: 'primary',
}

export default Button
