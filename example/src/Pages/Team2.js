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
      <StyledButton onClick={toggleDisabled} size="lrg" color="primary">Primary</StyledButton>
      <StyledButton size="lrg" color="brown">Brown</StyledButton>
      <StyledButton size="md" color="secondary" disabled={disable}>Primary</StyledButton>
      <StyledButton size="sm" color="send">outlined</StyledButton>
      <StyledButton size="md" color="primary" outlined>outlined</StyledButton>
      <StyledButton size="lrg" variant="outlined" disabled={disable}>outlined</StyledButton>
      <StyledButton color="warning"size="md" variant="outlined">outlined</StyledButton>
      <StyledButton onClick={() => setCount(count + 1)} size="lrg" variant="outlined">outlined</StyledButton>
      <StyledButton onClick={() => setCount(count + 1)} >no props</StyledButton>

      </div>

    </div>
  )
}

export default Team2
