/* eslint-disable prettier/prettier */
import React from 'react';
// import PropTypes from 'prop-types'
import './card.css';

const Card = (props) => {

  const styles = {
    main: {
      width: '200px',
      // height: "100px",
      backgroundColor: 'white'
    },
    img: {
      backgroundImage: `url(${props.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '150px'
    },
    textBody: {
      height: '100%',
      width: '100%'
    },
    title: {
      fontSize: `${props.titleSize}`, // possible prop
      fontWeight: 'bold',
      margin: '10px' // possible prop
    },
    text: {
      margin: '10px'
    },
    button: {
      // width: '40%',
      width: props.width,
      height: '20px',
      border: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
      margin: '10px',
      padding: "0"
    }
  }
  
  
  return (
    
    <div className='main' style={styles.main}>
      {props.img ? 
      ( <div className='img' style={styles.img}>{}</div>) : null}
      <div className='textBody' style={styles.textBody}>
        {props.title ? (<div className='title' style={styles.title}>
          {props.title}
        </div>) : null}
        {props.text ? (<div className='text' style={styles.text}>
          {props.text}
        </div>) : null}
        
        {props.btnOneText ? (
          <button className='cardButton1' style={styles.button}>
            {props.btnOneText}
          </button>
        ) : null}
        {props.btnTwoText ? (
          <button className='cardButton2' style={styles.button}>
            {props.btnTwoText}
          </button>
        ) : null}
        
      </div>
    </div>
  )
}


export default Card
