import React from 'react'
import {
  Button,
  Card,
  CardButton,
  CardText,
  CardImage,
  Typography
} from 'bit-ui-wise'
import PropTypes from 'prop-types'

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
        <CardImage imgHeight='500px' bgSize='contain' bgColor='red' />
        <CardText padding='100px'>
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
    </div>
  )
}

export default Team3
