import React from 'react'
import { CardTemplate, Button, Card, CardHeader } from 'bit-ui-wise'
import PropTypes from 'prop-types'




const Team3 = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#9e9e9e'
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
      <Card>
        <CardHeader title='hello' subTitle='hello again'></CardHeader>
      
      </Card>
    </div>
  )
}

export default Team3
