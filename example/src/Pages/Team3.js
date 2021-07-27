import React from 'react'
import {Card} from 'bit-ui-wise'
import PropTypes from 'prop-types'

const Team3 = () => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    height:"100vh",
    backgroundColor:"#9e9e9e"
  }

  
  return (
    <div style={styles}>
      <Card
        title='hello'
        text='hella lorem'
        img={'https://picsum.photos/400/600'}
        btnOneText={'hello'}
        btnTwoText={'hello'}
        width={'auto'}
      />
    </div>
  )
}





export default Team3
