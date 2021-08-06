import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
    background-color: ${(props) => props.bgColor} ;
    text-align: ${(props) => props.textAlign};
    padding: ${(props) => props.padding};
`

const CardText = (props) => {
  
  return (
    <Div 
    bgColor={props.bgColor}
    padding={props.padding}
    textAlign={props.textAlign}
    >
      {props.children}
    </Div>
  )
}


CardText.propTypes = {
  textAlign: PropTypes.string,
  bgColor: PropTypes.string,
  padding: PropTypes.string,
}
CardText.defaultProps = {
  textAlign: 'left',
  bgColor: 'white', 
  padding: '10px'
}

export default CardText