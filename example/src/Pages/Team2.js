import React from 'react'
import { Button } from 'bit-ui-wise'


const Team2 = () => {

  return (
    <div>
      <h1>Im for team 2</h1>
      <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
      <Button size='sm' color='primary'>
        small
      </Button>
      <Button size='md' color='secondary'>
        medium
      </Button>
      <Button size='lrg' color='success'>
        Large
      </Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
      <Button size='md' color='primary'>
        button
      </Button>
      <Button size='md' color='secondary'>
        button
      </Button>
      <Button size='md' color='success'>
        button
      </Button>
      <Button size='md' color='warning'>
        button
      </Button>
      <Button size='md' color='delete'>
        button
      </Button>
      <Button size='md' color='violet'>
        button
      </Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
        <Button variant='outlined' size='sm' color='primary'>
          small
        </Button>
        <Button variant='outlined' size='md' color='secondary'>
          medium
        </Button>
        <Button variant='outlined' size='lrg' color='success'>
          large
        </Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
      <Button variant='text' size='sm' color='primary'>
        small
      </Button>
      <Button variant='text' size='md' color='secondary'>
        medium
      </Button>
      <Button variant='text' size='lrg' color='success'>
        Large
      </Button>
      </div>

      {/* <div>
        <Card>
          <CardText>
            <Typography>Card Header</Typography>
          </CardText>
          <button>
            <Button size='md' color='success'>
              medium
            </Button>
          </button>
        </Card>
      </div> */}
      {/* {/* <div>
        <CardButton>
          <Typography varient='header'>CardButton</Typography>
          <Button size='md' color='success'>
            medium
          </Button>
        </CardButton>
      </div> */}
    </div>
  )
}

export default Team2
