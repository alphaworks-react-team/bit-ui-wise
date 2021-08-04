import React from 'react'

const CardText = (props) => {
  const styles = {
    textBody: {
      backgroundColor: props.bgColor,
      textAlign: props.textAlign
    }
  }
  return (
    <div className='text-body' style={styles.textBody}>
      {props.children}
    </div>
  )
}


Card.propTypes = {
  textAlign: PropTypes.string,
  bgColor: PropTypes.string,
}
Card.defaultProps = {
  textAlign: 'left',
  bgColor: 'white', //do we need BGC???
}

export default CardText
