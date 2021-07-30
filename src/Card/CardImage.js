import React from 'react'

const CardImage = (props) => {
  const styles = {
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    image: {
      backgroundImage: `url(${props.img})`,
      backgroundSize: props.imgSize === 'contain' ? 'contain' : 'cover',
      backgroundRepeat: 'no-repeat',
      height: props.height ? props.height : '300px',
      width:
        props.size === 'sm'
          ? '275px'
          : props.size === 'md'
          ? '550px'
          : props.size === 'lrg'
          ? '825px'
          : '100%'
    }
  }
  return (
    <div className='imgContainer' style={styles.imageContainer}>
      <div className='img' style={styles.image}></div>
    </div>
  )
}

export default CardImage
