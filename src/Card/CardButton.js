import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const buttonStyling = {
  returnStyles: (position) => {
    switch (position) {
      case 'left':
        return 'flex-start'
      case 'center':
        return 'center'
      case 'right':
        return 'flex-end'
      default:
        return 'space-evenly'
    }
  }
}

const CardButton = (props) => {
  const ButtonStyle = styled.div`
    display: flex;
    // height: 100%;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    align-content: space-around;
    align-items: space-between;
    background-color: ${props.bgColor};
    justify-content: ${(props) => buttonStyling.returnStyles(props.position)};
  `
  return (
    <ButtonStyle position={props.position} bgColor={props.bgColor}>
      {props.buttons ? <div>{props.buttons.map((item) => item)}</div> : null}
    </ButtonStyle>
  )
}

CardButton.propTypes = {
  position: PropTypes.string,
  bgColor: PropTypes.string,
  buttons: PropTypes.arrayOf({
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string
  })
}
CardButton.defaultProps = {
  position: 'space-evenly',
  bgColor: 'white',
  buttons: [
    {
      variant: '',
      color: 'primary',
      size: 'md'
    }
  ]
}

export default CardButton
