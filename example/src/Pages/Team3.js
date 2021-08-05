import React from 'react'
import {
  Button,
  Card,
  CardButton,
  CardText,
  CardImage,
  Typography,
  TextField,
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
      <Card>
        <CardImage />
        <CardText>
          <Typography variant='small' fontColor='black'>
            Lorem ipsum dolor sit amet.
          </Typography>
        </CardText>
        <CardButton
          position='left'
          buttons={[
            <Button variant='outlined' size='sm'>
              lorem
            </Button>
          ]}
        ></CardButton>
      </Card>

    <Card>
      
    </Card>

      
    </div>
  )
}

export default Team3
