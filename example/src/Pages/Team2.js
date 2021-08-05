import React from 'react'
import { Button } from 'bit-ui-wise'


const Team2 = () => {

  return (
    <div>
      <h1>Im for team 2</h1>
      <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
        <Button disabled variant='text' size='sm'>
          disabled
        </Button>
      </div>
      <Button variant='text' size='sm' color='primary'>
        small
      </Button>
      <Button variant='text' size='md' color='secondary'>
        medium
      </Button>
      <Button variant='text' size='lrg' color='success'>
        Large
      </Button>
      <Button>default</Button>
      <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
        <Button variant='outlined' size='sm' color='orange'>
          outlined
        </Button>
        <Button variant='outlined' size='md' color='secondary'>
          outlined
        </Button>
        <Button variant='outlined' size='lrg' color='delete'>
          outlined
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
        <Button color='delete' outlined>
          delete
        </Button>
        <Button color='warning' variant='outlined'>
          warning
        </Button>
        <Button color='success'>success</Button>
        <Button color='lightblue'>own color</Button>
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
