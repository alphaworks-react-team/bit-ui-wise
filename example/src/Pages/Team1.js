import React from 'react'
import { Typography, TextField, practice } from 'bit-ui-wise'

const Team1 = () => {
  return (
    <div>
      <Typography variant='large'>This is some text</Typography>
      <Typography variant='medium'>This is some text</Typography>
      <Typography variant='small'>This is some text</Typography>
      <Typography>This is some text</Typography>

      <TextField />
      <TextField placeholder={'im a placeholder'} />
      <TextField inputStyle={'outline'} value={'im a value'} width={'25%'} />
      <TextField inputStyle={'filled'} value={'im a value'} width={'25%'} />
    </div>
  )
}

export default Team1
