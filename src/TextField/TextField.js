import React from 'react'
import styles from './input.module.css'

const TextField = (props) => {
  const standardStyle = {
    width: props.width || '100%',
    height: '35px',
    backgroundColor: 'none',
    color: 'black',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    outline: 'none'
  }

  const filledStyle = {
    width: props.width || '100%',
    height: '35px',
    color: 'white',
    backgroundColor: 'lightgrey',
    borderTopRightRadius: '3px',
    borderTopLeftRadius: '3px',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: '2px solid white',
    outline: 'none'
  }

  const outlineStyle = {
    width: props.width || '100%',
    height: '35px',
    color: 'white',
    backgroundColor: 'none',
    borderRadius: '3px',
    border: '2px solid black',
    outline: 'none'
  }

  const showStyles = () => {
    if (props.inputStyle === 'outline') {
      return outlineStyle
    } else if (props.inputStyle === 'filled') {
      return filledStyle
    } else {
      return standardStyle
    }
  }

  return (
    <input
      className={styles.teamOne}
      style={showStyles()}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}

export default TextField
