import React from 'react'
import {Button} from 'bit-ui-wise'

const Team2 = () => {
  return (
    <div>
      <h1>Im for team 2</h1>
      <Button size="large" variant="primary">Primary</Button>
      <Button size="medium" variant="secondary">Secondary</Button>
      <Button size="small" variant="delete">Delete</Button>
      <Button variant="warning">Warning</Button>
      <Button size="large" variant="send">Send</Button>
      <Button variant="upload">Upload</Button>
      <Button size="medium" variant="save">Save</Button>
      <Button size="small" variant="submit">Submit</Button>
      {/* <Button variant="shuffle">Delete</Button>
      <Button variant="play">Delete</Button>
      <Button variant="forward">Delete</Button>
      <Button variant="rewind">Delete</Button> */}
    </div>
  )
}

export default Team2
