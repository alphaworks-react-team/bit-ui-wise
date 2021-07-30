import React from 'react'
import {
  CardTemplate,
  Button,
  Card,
  CardHeader,
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

  const leftSide = {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-evenly'
  }

  return (
    <div style={styles}>
      {/* VERSION 1 */}
      {/* <CardTemplate
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
      </CardTemplate> */}

      {/* VERSION 2 */}
      <Card size='sm'>
        <CardImage height='300px' img={'https://via.placeholder.com/150/'} />
        <CardHeader title='hello' subTitle='hello again'>
          <Typography variant='header'>this is a header</Typography>
          <Typography variant='sub-header'>this is sub-header</Typography>
        </CardHeader>
        {/* <CardText bg='green'>
          <Typography variant='header'>Hello</Typography>
          <Typography variant='sub-header'>this</Typography>
          <Typography variant='body'>
            sdadsadjkhasbdhjasvdjhasvdhjasb hjsbakjsbdjkas d Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.
          </Typography>
        </CardText> */}
        {/* <CardButton
          buttons={[
            <Button variant={'delete'}>Delete Me!</Button>,
            <Button variant={'primary'}>Click Me!</Button>
          ]}
        /> */}
      </Card>

      <Card size='md'>
        <CardImage
          size='lrg'
          imgSize='contain'
          // height='800px'
          img={'https://via.placeholder.com/150/'}
        />
        <CardHeader title='hello' subTitle='hello again'>
          <Typography variant='header'>this is a header</Typography>
          <Typography variant='sub-header'>this is sub-header</Typography>
        </CardHeader>
        {/* <CardText bg='green'>
          <Typography variant='header'>Hello</Typography>
          <Typography variant='sub-header'>this</Typography>
          <Typography variant='body'></Typography>
        </CardText> */}
        {/* <CardButton
          buttons={[
            <Button variant={'delete'}>Delete Me!</Button>,
            <Button variant={'primary'}>Click Me!</Button>
          ]}
        /> */}
      </Card>

      <Card size='lrg'>
        <CardHeader title='hello' subTitle='hello again'>
          <Typography variant='header'>this is a header</Typography>
          <Typography variant='sub-header'>this is sub-header</Typography>
        </CardHeader>
        {/* <CardImage img={'https://via.placeholder.com/150/'} /> */}
        <CardText bg='green'>
          <Typography variant='header'>Hello</Typography>
          <Typography variant='sub-header'>this</Typography>
          <Typography variant='body'></Typography>
        </CardText>
        {/* <CardButton
          buttons={[
            <Button variant={'delete'}>Delete Me!</Button>,
            <Button variant={'primary'}>Click Me!</Button>
          ]}
        /> */}
      </Card>

      {/* VERSION 3 SIDE MODE */}
      {/* <Card direction='row'>
        <div style={leftSide}>
          <CardHeader title='hello' subTitle='hello again'></CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            harum molestias fugit voluptates, architecto repellat sequi placeat
            perspiciatis impedit deleniti quidem aspernatur aliquid saepe id
            dolorum laboriosam minima! Accusantium, dolorum!
          </CardText>
          <CardButton
            buttons={[
              <Button size='small' variant={'delete'}>
                Delete Me!
              </Button>,
              <Button size='small' variant={'primary'}>
                Click Me!
              </Button>
            ]}
          />
        </div>
        <div>
          <CardImage img={'https://picsum.photos/400/600'} />
        </div>
      </Card> */}
    </div>
  )
}

export default Team3
