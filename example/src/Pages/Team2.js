import React from 'react'
import {Button} from 'bit-ui-wise'
import {StyledButton} from 'bit-ui-wise'


const Team2 = () => {
  return (
    <div>
      <h1>Im for team 2</h1>
      <div style={{display: 'flex', alignItems: 'center'}}>
      <StyledButton size="large" variant="primary">Primary</StyledButton>
      <StyledButton size="medium" variant="secondary">Primary</StyledButton>
      <StyledButton size="small" variant="send" type="contained">outlined</StyledButton>
      <StyledButton size="medium" variant="primary" type="outlined">outlined</StyledButton>
      <StyledButton size="large" type="outlined" variant="send">outlined</StyledButton>
      <StyledButton variant="primary"size="medium" type="outlined">outlined</StyledButton>
      <StyledButton size="large" type="outlined">outlined</StyledButton>
      <Button>original</Button>


      </div>

    </div>
  )
}

export default Team2
