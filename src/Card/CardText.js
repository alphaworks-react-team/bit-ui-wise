import React from 'react'
import PropTypes from 'prop-types'

const CardText = (props) => {
  const styles = {
    textBody: {
      backgroundColor: props.bgColor,
      textAlign: props.textAlign,
      padding: props.padding,
    }
  }
  return (
    <div className='text-body' style={styles.textBody}>
      {props.children}
    </div>
  )
}


CardText.propTypes = {
  textAlign: PropTypes.string,
  bgColor: PropTypes.string,
  padding: PropTypes.string,
}
CardText.defaultProps = {
  textAlign: 'left',
  bgColor: 'white', //do we need BGC???
  padding: '10px'
}

export default CardText
