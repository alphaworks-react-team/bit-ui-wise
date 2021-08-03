import React from 'react'
import { Typography, TextField } from 'bit-ui-wise'

const Team1 = () => {
  const styles = {
    display: 'flex',
    marginTop: '20px',
    flexDirection: 'column',
    height: '300px',
    justifyContent: 'space-between',
    width: '50vw'
  }

  const styles2 = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <div>
      <Typography variant='large'>This is some text</Typography>
      <Typography variant='medium'>This is some text</Typography>
      <Typography variant='small'>This is some text</Typography>
      <Typography
        variant='small'
        fontSize='5em'
        fontFamily='Papyrus'
        fontColor='rgb(75,153,180)'
        fontWeight='700'
      >
        AVATAR
      </Typography>

      <TextField variant='standard' width='75%' type='password' />
      <p></p>
      <TextField variant='filled' width='50%' placeholder='world' />
      <p></p>
      <TextField variant='outlined' width='25%' type='password' type='number' />
      <p></p>
      <TextField />
    </div>
  )
}

export default Team1
