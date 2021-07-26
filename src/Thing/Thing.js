import React from 'react'
import PropTypes from 'prop-types'

const Thing = (props) => {
  return <h1>This is an example: {props.text}</h1>
}

Thing.propTypes = {
  text: PropTypes.string.isRequired
}

export default Thing
