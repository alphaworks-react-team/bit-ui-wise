import React, { useState } from 'react'
import {
  Button,
  Card,
  CardButton,
  CardText,
  CardImage,
  Typography,
  TextField,
  Modal
} from 'bit-ui-wise'

const Team3 = () => {
  const styles = {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#9e9e9e'
  }

  const [state, setState] = useState(false)

  return (
    <div style={styles}>
      <Button onClick={() => setState(true)}>Open Modal</Button>
      <Modal
        btnSize='sm'
        btnColor='primary'
        btnVariant='outlined'
        // title='Modal Title'
        titleSize='large'
        titleColor='success'
        bodyTextSize='small'
        bodyTextColor='success'
        state={state}
        closeModal={() => setState(false)}
      />
    </div>
  )
}

export default Team3
