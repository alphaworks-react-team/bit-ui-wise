import React from 'react'
import { Button } from 'bit-ui-wise'

const Team2 = () => {
  return (
    <div>
      <h1>Im for team 2</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button size='sm' variant='primary'>
          Small
        </Button>
        <Button size='md' variant='primary'>
          Medium
        </Button>
        <Button size={123} variant='primary'>
          Large
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button size='sm' variant='primary' type='outlined'>
          Primary
        </Button>
        <Button size='md' variant='secondary' type='outlined'>
          Secondary
        </Button>
        <Button size='lrg' variant='send' type='outlined'>
          Success
        </Button>
      </div>
    </div>
  )
}

export default Team2
