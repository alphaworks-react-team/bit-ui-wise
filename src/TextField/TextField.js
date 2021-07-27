import React from 'react'


const TextField = (props) => {
  const inputStyles = {
    width: props.width || '100%'
  }

  return (
    <input
      style={inputStyles}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}

    />
  )
}



export default TextField
