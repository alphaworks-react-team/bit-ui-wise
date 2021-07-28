import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.css'

import Card from '../Card/Card'

const Button = (props) => {
  const commonStyle = {
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: '600',
    margin: '3px',
    textTransform: 'uppercase'
  }
  const btnStyles = {
    border: 'none',
    color: 'white',
    backgroundColor:
      props.variant === 'primary'
        ? '#3f51b5'
        : props.variant === 'secondary'
        ? '#FF5722'
        : props.variant === 'delete'
        ? '#d91111'
        : props.variant === 'warning'
        ? 'gold'
        : props.variant === 'send'
        ? '#078c22'
        : 'grey',

    padding:
      props.size === 'sm'
        ? '5px 10px'
        : props.size === 'md'
        ? '8px 15px'
        : props.size === 'lrg'
        ? '10px 18px'
        : '7px 15px',

    fontSize:
      props.size === 'sm'
        ? '0.8em'
        : props.size === 'md'
        ? '1em'
        : props.size === 'lrg'
        ? '1.15em'
        : '1.20em'
  }

  const outlineStyles = {
    backgroundColor: 'white',
    color:
      props.variant === 'primary'
        ? '#3f51b5'
        : props.variant === 'secondary'
        ? '#FF5722'
        : props.variant === 'delete'
        ? '#d91111'
        : props.variant === 'warning'
        ? 'gold'
        : props.variant === 'send'
        ? '#078c22'
        : 'grey',
    borderColor:
      props.variant === 'primary'
        ? '#3f51b5'
        : props.variant === 'secondary'
        ? '#FF5722'
        : props.variant === 'delete'
        ? '#d91111'
        : props.variant === 'warning'
        ? 'gold'
        : props.variant === 'send'
        ? '#078c22'
        : 'grey',
    padding:
      props.size === 'sm'
        ? '5px 10px'
        : props.size === 'md'
        ? '8px 15px'
        : props.size === 'lrg'
        ? '10px 18px'
        : '7px 15px',

    fontSize:
      props.size === 'sm'
        ? '0.8em'
        : props.size === 'md'
        ? '1em'
        : props.size === 'lrg'
        ? '1.15em'
        : '1.20em'
  }

  return (
    <div>
      {props.type === 'outlined' ? (
        <button
          className={styles.outlinedBtn}
          style={{ ...outlineStyles, ...commonStyle }}
        >
          {props.children}
        </button>
      ) : (
        <button
          className={styles.bitUiWiseBtn}
          style={{ ...btnStyles, ...commonStyle }}
        >
          {props.children}
        </button>
      )}
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
