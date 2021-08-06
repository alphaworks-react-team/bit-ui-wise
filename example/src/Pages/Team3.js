import React from 'react'
import {
  Button,
  Card,
  CardButton,
  CardText,
  CardImage,
  Typography,
  TextField
} from 'bit-ui-wise'

const Team3 = () => {
  const styles = {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#9e9e9e'
  }

  return (
    <div style={styles}>
      <Card size='sm'>
        <CardImage />
        <CardText>
          <Typography variant='small' fontColor='black'>
            Lorem ipsum dolor sit amet.
          </Typography>
        </CardText>
        <CardButton
          position='right'
          buttons={[
            <Button size='sm' color='warning'>
              lorem
            </Button>,
            <Button variant='outlined' size='sm'>
              lorem
            </Button>
          ]}
        ></CardButton>
      </Card>

      <Card size='md'>
        <CardText>
          <Typography variant='small' color='black'>
            Login
          </Typography>
        </CardText>
        <CardText textAlign='center'>
          <TextField
            style={{ boxSizing: 'border-box' }}
            variant='outlined'
            width='80%'
            placeholder='username'
          ></TextField>
        </CardText>
        <CardText textAlign='center'>
          <TextField
            style={{ boxSizing: 'border-box' }}
            variant='outlined'
            width='80%'
            placeholder='password'
            type='password'
          ></TextField>
        </CardText>
        <CardButton
          position=''
          buttons={[
            <Button size='sm' color='primary'>
              Login
            </Button>,
            <Button size='sm' color='primary'>
              Sign Up
            </Button>
          ]}
        ></CardButton>
      </Card>
    </div>
  )
}

export default Team3
