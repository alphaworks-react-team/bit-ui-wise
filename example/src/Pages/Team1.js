import React from 'react'
import { Typography, TextField, practice } from 'bit-ui-wise'

const Team1 = () => {
  return (
    <div>
      <Typography variant='large'>This is some text</Typography>
      <Typography variant='medium'>This is some text</Typography>
      <Typography variant='small'>This is some text</Typography>
      <Typography
        variant='small'
        fontSize='1em'
        fontFamily='Times New Roman'
        fontColor='orange'
        fontWeight='700'
      >
        This is some text
      </Typography>

      <TextField variant='standard' />
      <p></p>
      <TextField variant='filled' />
      <p></p>
      <TextField variant='outlined' />
    </div>
  )
}

export default Team1
