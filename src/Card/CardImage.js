import React from 'react'
import PropTypes from 'prop-types'

const CardImage = (props) => {
  const styles = {
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    image: {
      backgroundColor: props.bgColor,
      backgroundImage: `url(${props.img})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: props.bgSize,
      height: props.imgHeight,
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

// ADD PROPTYPES HERE SEENA!!!! DONT MESS UP I AM WATCHING YOU !!!!
CardImage.propTypes = {
  bgColor: PropTypes.string,
  img: PropTypes.string,
  bgSize: PropTypes.string,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string
}

CardImage.defaultProps = {
  bgColor: 'white',
  bgSize: 'cover',
  img: 'https://picsum.photos/1000',
  imgHeight: '150px',
  imgSize: '100%'
}

export default CardImage
