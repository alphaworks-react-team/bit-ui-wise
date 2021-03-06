import React from 'react'

const Card = (props) => {
  const styles = {
    minWidth:
      props.size === 'sm'
        ? '275px'
        : props.size === 'md'
        ? '550px'
        : props.size === 'lrg'
        ? '825px'
        : '100%',
    maxWidth:
      props.size === 'sm'
        ? '275px'
        : props.size === 'md'
        ? '550px'
        : props.size === 'lrg'
        ? '825px'
        : '100%',
    // width: `${props.width || '300px'}`,
    minHeight: `150px`,
    height: `${props.height}`,
    backgroundColor: props.bgColor || 'white',
    boxShadow: '3px 3px 5px black',
    // borderRadius: '15px',
    display: 'flex',
    flexDirection: props.direction === 'row' ? props.direction : 'column'
  }

  return <div style={styles}>{props.children}</div>
}

export default Card
