import React from 'react'
import {Button, StyledButton} from 'bit-ui-wise'
import {useState} from 'react'


const Team2 = () => {
  const [count, setCount] = useState(0);
  const [disable, setDisabled] = useState(false)

  const toggleDisabled = () => {
    setDisabled(!disable)
  }

  return (
    <div>
      <h1>Im for team 2</h1>
      <div style={{display: 'flex', alignItems: 'center'}}>
      <StyledButton onClick={toggleDisabled} size="large" variant="primary">Primary</StyledButton>
      <StyledButton size="medium" variant="secondary" disabled={disable}>Primary</StyledButton>
      <StyledButton size="small" variant="send">outlined</StyledButton>
      <StyledButton size="medium" variant="primary" outlined>outlined</StyledButton>
      <StyledButton size="large" kind="outlined" variant="send" disabled={disable}>outlined</StyledButton>
      <StyledButton variant="warning"size="medium" kind="outlined">outlined</StyledButton>
      <StyledButton onClick={() => setCount(count + 1)} size="large" kind="outlined">outlined</StyledButton>
      <StyledButton onClick={() => setCount(count + 1)} >no props</StyledButton>

      </div>

    </div>
  )
}

export default Team2
