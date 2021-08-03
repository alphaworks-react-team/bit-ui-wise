import React from 'react'
import {Button} from 'bit-ui-wise'
import {useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Team2 = () => {
  const [count, setCount] = useState(0);
  const [disable, setDisabled] = useState(false)

  const toggleDisabled = () => {
    setDisabled(!disable)
  }

  return (
    <div>
      <h1>Im for team 2</h1>
      <div style={{display: 'flex', alignItems: 'center', margin: '20px'}}>
      <Button disabled size="sm">disabled</Button>
      </div>
      <Button size="md" color="secondary">medium</Button>
      <Button size="lrg" color="delete">Large</Button>
      <Button>default</Button>
      <div style={{display: 'flex', alignItems: 'center', margin: '20px'}}>
      <Button variant="outlined" size="sm" color="primary">outlined</Button>
      <Button variant="outlined" size="md" color="secondary">outlined</Button>
      <Button variant="outlined" size="lrg" color="send">outlined</Button>
      </div>
      <div style={{display: 'flex', alignItems: 'center', margin: '20px'}}>
      <Button color="delete" outlined>delete</Button>
      <Button color="warning" variant="outlined">warning</Button>
      <Button color="send">send</Button>
      <Button color="lightblue">own color</Button>
      </div>
    </div>
  )
}

export default Team2
