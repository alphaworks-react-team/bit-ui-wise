import React from 'react'
import PropTypes from 'prop-types'

const textField = (props) => {

  const inputStyles = {}
  return (

     <input style={inputStyles} type={props.type}  value={} onChange={}/>

  )
}

TextField.propTypes = {
  title: PropTypes.string.isRequired
}

export default textField
