import React from 'react'
// import PropTypes from 'prop-types'
import styling from './card.css'

const CardTemplate = (props) => {
  const styles = {
    main: {
      width: `${props.width || '300px'}`,
      height: `${props.height}`,
      backgroundColor: 'white',
      boxShadow: '3px 3px 5px black'
    },
    img: {
      backgroundImage: `url(${props.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '300px'
    },
    textBody: {
      width: 'auto',
      margin: '15px',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start'
    },
    header: {
      marginBottom: '10px'
    },
    title: {
      fontSize: `${props.titleSize || '20px'}`, 
      fontWeight: 'bold'
    },
    buttonGroup: {
      width: '100%',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-evenly',
      alignContent: 'space-around',
      alignItems: 'space-between'
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
        <div className='header' style={styles.header}>
          {props.title ? (
            <div className='title' style={styles.title}>
              {props.title}
            </div>
          ) : null}
          {props.subTitle ? (
            <div className='subTitle'>{props.subTitle}</div>
          ) : null}
        </div>
        {props.children ? (
          <div className='text' style={{ marginBottom: '10px' }}>
            {props.children}
          </div>
        ) : null}
        {props.buttons ? (
          <div className={styling.ButtonGroup} style={styles.buttonGroup}>
            {props.buttons.map((item) => item)}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CardTemplate
