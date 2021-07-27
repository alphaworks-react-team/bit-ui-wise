import React from 'react'
import {
  CardTemplate,
  Button,
  Card,
  CardHeader,
  CardButton,
  CardText,
  CardImage
} from 'bit-ui-wise'
import PropTypes from 'prop-types'

const Team3 = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#9e9e9e'
  }

  const leftSide = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  }

  return (
    <div style={styles}>
      <CardTemplate
        title='hello'
        subTitle='subtitle'
        img={'https://picsum.photos/400/600'}
        // width='400px'
        // height='600px'
        buttons={[
          <Button variant={'delete'}>Click Me!</Button>,
          <Button variant={'primary'}>Delete Me!</Button>
        ]}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        nostrum alias, cum enim excepturi odit explicabo neque fugiat inventore
        ad
      </CardTemplate>

      <Card direction=''>
        <div>
          <CardHeader title='hello' subTitle='hello again'></CardHeader>
        </div>
        <CardImage img={'https://picsum.photos/400/600'} />
        <div>
          <CardText
            title='hello'
            subtitle='this is a subtitle'
            desc='orem Ipsum is simply dummy text of the printing and typesetting industry.'
          ></CardText>
        </div>
        <CardButton
          buttons={[
            <Button variant={'delete'}>Delete Me!</Button>,
            <Button variant={'primary'}>Click Me!</Button>
          ]}
        />
      </Card>
    </div>
  )
}

export default Team3
