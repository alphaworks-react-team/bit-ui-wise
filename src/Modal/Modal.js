import React, { useState } from 'react'
import Button from './../Button/Button'

const Modal = () => {
  const [toggleModal, setToggleModal] = useState(false)

  return (
    <div>
      <Button>Show Modal</Button>
    </div>
  )
}

export default Modal
