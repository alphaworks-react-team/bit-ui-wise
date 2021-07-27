import React from 'react'
import { Card } from 'bit-ui-wise'
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
      <Card
        title='hello'
        subTitle='subtitle'
        img={'https://picsum.photos/400/600'}
        btnOneText={'hello'}
        btnTwoText={'hello'}
        width='300px'
        height='500px'
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        laboriosam explicabo expedita illum voluptates magnam! Quasi harum
        explicabo sed voluptatum eum tenetur, rerum ullam, inventore neque
        labore voluptates distinctio. Est.
      </Card>
    </div>
  )
}

export default Team3
