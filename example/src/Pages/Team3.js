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
      {/* VERSION 1 */}
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

      {/* VERSION 2 */}
      <Card direction=''>
        <CardHeader title='hello' subTitle='hello again'>
          <Typography variant='header'>this is a header</Typography>
          <Typography variant='sub-header'>this is sub-header</Typography>
        </CardHeader>
        <CardImage img={'https://picsum.photos/400/600'} />
        <CardText bg="green">
          
          <Typography variant="header">this is a header</Typography>
         {/* <Typography variant="sub-header">this is sub-header</Typography>
         <Typography variant="body">blahblah blah body content</Typography>
        */}

        </CardText>
        <CardButton
          buttons={[
            <Button variant={'delete'}>Delete Me!</Button>,
            <Button variant={'primary'}>Click Me!</Button>
          ]}
        />
      </Card>

      {/* VERSION 3 SIDE MODE */}
      <Card direction='row' width={'auto'}>
        <div style={leftSide}>
          <CardHeader title='hello' subTitle='hello again'></CardHeader>

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
      </Card>
    </div>
  )
}

export default Team3
