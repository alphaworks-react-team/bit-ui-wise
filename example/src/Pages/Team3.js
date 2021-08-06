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
      {/* Card with img/buttons/description*/}
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

      {/* Login Card */}
      <Card size='md'>
        <CardText>
          <Typography variant='small' fontWeight='bold' fontColor='black'>
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

      <Card size='md'>
        <Card>
          <CardText>
            <Typography variant='medium' fontWeight='bold' fontColor='black'>
              Product Name
            </Typography>
          </CardText>
        </Card>
        <Card direction='row'>
          <CardImage imgWidth='sm' imgHeight='auto' />
          <CardText>
            <CardText>
              <Typography variant='small' fontWeight='bold' fontColor='black'>
                Description:
              </Typography>
            </CardText>
            <CardText>
              <Typography variant='small' fontColor='black'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                illum veniam autem maiores distinctio, nihil nobis libero
                repellendus id quaerat atque, totam consectetur soluta quisquam,
                nostrum corporis! Rem, nam cumque.
              </Typography>
            </CardText>
            <CardText textAlign='right'>
              <Typography variant='small' fontWeight='bold' fontColor='black'>
                $5.99
              </Typography>
            </CardText>
            <CardButton
              position='center'
              buttons={[
                <Button size='sm' color='primary'>
                  Add to Cart
                </Button>
              ]}
            ></CardButton>
          </CardText>
        </Card>
      </Card>
    </div>
  )
}

export default Team3
