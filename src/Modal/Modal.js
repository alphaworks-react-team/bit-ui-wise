import React from 'react'

const Modal = (props) => {
  const modalStyles = {
    display: !props.toggleState ? 'flex' : 'none'
    // height: !props.toggleState ? '' : ''
  }

  return <div style={modalStyles}>{props.children}</div>
}

export default Modal
