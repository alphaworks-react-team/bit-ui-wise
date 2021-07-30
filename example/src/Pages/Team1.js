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
      <Typography variant='header'>This is some text</Typography>
      <Typography variant='sub-header'>This is some text</Typography>
      <Typography variant='subtitle'>This is some text</Typography>
      <Typography variant='body'>This is some text</Typography>
      <Typography>This is some text</Typography>

      <div style={styles2}>
        <div style={styles}>
          <TextField />
          <TextField placeholder={'im a placeholder'} />
          <TextField
            inputStyle={'outline'}
            value={'im a value'}
            width={'25%'}
          />
          <TextField inputStyle={'filled'} width={'25%'} />
        </div>
      </div>
    </div>
  )
}

export default Team1
