/* eslint-disable prettier/prettier */
import React from 'react'
// import PropTypes from 'prop-types'
import './card.css'

const Card = (props) => {
  const styles = {
    main: {
      width: `${props.width || '200px'}`,
      maxHeight: '100%',
      // height: `${props.height}`,
      height: `${props.height}`,
      backgroundColor: 'white',
      boxShadow: '3px 3px 5px black'
    },
    img: {
      backgroundImage: `url(${props.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '50%'
    },
    textBody: {
      height: '50%',
      width: 'auto',
      margin: '0 15px 0 15px',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start'
    },
    title: {
      fontSize: `${props.titleSize || '20px'}`, // possible prop
      fontWeight: 'bold'
      // margin: '10px' // possible prop
    },
    button: {
      // width: '40%',
      width: 'auto',
      height: '20px',
      border: 'none',
      backgroundColor: 'white',
      cursor: 'pointer'
      // margin: '10px',
      // paddingRight: '0'
    },
    buttonGroup: {
      width: '100%',
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'flex-start'
    }
  }

  return (
    <div className='main' style={styles.main}>
      {props.img ? (
        <div className='img' style={styles.img}>
          {}
        </div>
      ) : null}
      <div className='textBody' style={styles.textBody}>
        <div className='header'>
          {props.title ? (
            <div className='title' style={styles.title}>
              {props.title}
            </div>
          ) : null}
          {props.subTitle ? (
            <div className='subTitle'>{props.subTitle}</div>
          ) : null}
        </div>
        {props.children ? <div className='text'>{props.children}</div> : null}
        <div className='buttonGroup' style={styles.buttonGroup}>
          {props.btnOneText ? (
            <button className='cardButton' style={styles.button}>
              {props.btnOneText}
            </button>
          ) : null}
          {props.btnTwoText ? (
            <button className='cardButton' style={styles.button}>
              {props.btnTwoText}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Card
