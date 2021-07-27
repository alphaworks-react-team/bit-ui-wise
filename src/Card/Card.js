/* eslint-disable prettier/prettier */
import React from 'react'


const Card = (props) => {
  const styles = {
    width: `${props.width || '200px'}`,
    // height: `${props.height}`,
    height: `${props.height}`,
    backgroundColor: 'white',
    boxShadow: '3px 3px 5px black'
  }

  return (

    <div style={styles}>
    {props.children}
    </div>
    )
}

export default Card
