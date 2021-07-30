import React from 'react'
import styles from './input.module.css'

const TextField = (props) => {
  const standardStyle = {
    width: props.width || '100%',
    height: '35px',
    backgroundColor: props.inputStyle === 'filled' ? '#424242' : 'none',
    color: props.inputStyle === 'filled' ? 'white' : 'black',
    border: props.inputStyle === 'outline' ? '2px solid lightgrey' : 'none',
    borderBottom:
      props.inputStyle === 'filled' ? 'null' : '2px solid lightgrey',
    outline: 'none',
    borderRadius: props.inputStyle !== undefined ? '5px' : '0px',
    paddingLeft: '8px',
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.438)'
  }

  return (
    <input
      className={styles.teamOne}
      style={standardStyle}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default TextField
