import React from 'react'

const CardImage = (props) => {
  const styles = {
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    image: {
      backgroundColor: props.bgColor || 'white',
      backgroundImage: `url(${props.img})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: props.bgSize ? props.bgSize : 'contain',
      height: props.height ? props.height : '300px',
      width:
        props.imgSize === 'sm'
          ? '275px'
          : props.imgSize === 'md'
          ? '550px'
          : props.imgSize === 'lrg'
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
