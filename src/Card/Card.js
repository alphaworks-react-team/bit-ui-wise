import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = (props) => {

  const Styling = styled.h1`
    min-height: 150px;
    height: ${props.height};
    background-color: ${props.bgColor};
    box-shadow:3px 3px 5px black;
    display: flex;
    flex-direction: ${props.direction === 'row' ?  props.direction : 'column'};
  `

  const styles = {
    minWidth:
      props.size === 'sm'
        ? '275px'
        : props.size === 'md'
        ? '550px'
        : props.size === 'lrg'
        ? '825px'
        : '100%',
    maxWidth:
      props.size === 'sm'
        ? '275px'
        : props.size === 'md'
        ? '550px'
        : props.size === 'lrg'
        ? '825px'
        : '100%',
    minHeight: `150px`,
    height: `${props.height}`,
    backgroundColor: props.bgColor,
    boxShadow: '3px 3px 5px black',
    display: 'flex',
    flexDirection: props.direction === 'row' ? props.direction : 'column',
  }
  return <Styling>{props.children}</Styling>

  //<div style={styles}>{props.children}</div>
}

Card.propTypes = {
  height: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.string,
  direction: PropTypes.string
}
Card.defaultProps = {
  height: '',
  bgColor: 'white', 
  size: 'sm',
  direction: 'column',
}


export default Card
