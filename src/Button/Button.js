import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.css'

const Button = (props) => {
  const commonStyle = {
    //padding: '25dp',
    cursor: 'pointer',
    fontSize: "70%",
    borderRadius: '3px',
    border: 'none',
    color: 'white',
    margin: '3px',
    //boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
    textTransform: 'uppercase'
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
        : 'grey',

    width:
      props.size === 'small'
      ? '55px'
      : props.size === 'medium'
      ? '80px'
      : props.size === 'large'
      ? '100px'
      : '80px',
    
    height: 
      props.size === 'small'
      ? '30px'
      : props.size === 'medium'
      ? '35px'
      : props.size === 'large'
      ? '40px'
      : '35px',
  }

  return (
    <div>
      <button className={styles.bitUiWiseBtn} style={{...btnStyles, ...commonStyle}}>
          {props.children}</button>
    </div>
  ) 
}

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string
}
Button.defaultProps = {
  variant: 'primary',
  size: 'medium'
}

export default Button
