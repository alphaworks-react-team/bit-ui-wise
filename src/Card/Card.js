/* eslint-disable prettier/prettier */
import React from 'react'

const Card = (props) => {
  const styles = {
    width: `${props.width || '300px'}`,
    minHeight: `150px`,
    height: `${props.height}`,
    backgroundColor: 'white',
    boxShadow: '3px 3px 5px black',
    display: 'flex',
    flexDirection: props.direction === 'row' ? 'row' : 'column'
  }

  return <div style={styles}>{props.children}</div>
}

export default Card
