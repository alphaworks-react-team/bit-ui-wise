import React from 'react'

const CardImage = (props) => {
  const styles = {
    backgroundImage: `url(${props.img})`,
    backgroundSize: 
    props.bgS === 'contain' 
    ? 'contain': 
    'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '300px',
    width: '300px'
  }
  return <div className='img' style={styles}></div>
}



export default CardImage
