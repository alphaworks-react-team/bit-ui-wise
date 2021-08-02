import React from 'react'
import { Typography, TextField, practice } from 'bit-ui-wise'

const Team1 = () => {
  const styles = {
    display: 'flex',
    width: '100%',
    minHeight: '10vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey'
  }
  return (
    <div>
      <nav style={styles}>
        <Typography variant='subtitle'>I Got This</Typography>
      </nav>

      <Typography variant='sub-header'>This is some text</Typography>
      <Typography variant='subtitle'>This is some text</Typography>
      <Typography variant='body'>This is some text</Typography>
      <Typography>This is some text</Typography>

      <TextField />
      <TextField placeholder={'im a placeholder'} />
      <TextField inputStyle={'outline'} value={'im a value'} width={'25%'} />
      <TextField inputStyle={'filled'} value={'im a value'} width={'25%'} />
    </div>
  )
}

export default Team1
