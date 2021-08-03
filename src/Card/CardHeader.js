import React from 'react'

const CardHeader = (props) => {
  const style = {
    main: {
      padding: '10px'
    },

    title: {
      padding: '10px 10px 0px 10px',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subTitle: {
      padding: '0px 10px 10px 10px',
      fontWeight: 'lighter',
      fontSize: '12px'
    }
  }

  return (
    <div styles={style.main}>
      {props.title ? (
        <div className='title' style={style.title}>
          {props.title}
        </div>
      ) : null}
      {props.subTitle ? (
        <div className='subTitle' style={style.subTitle}>
          {props.subTitle}
        </div>
      ) : null}
      {/* {props.children} */}
    </div>
  )
}

export default CardHeader
