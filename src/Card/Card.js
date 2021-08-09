import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-width: ${(props) =>
    props.size === 'sm'
      ? '275px'
      : props.size === 'md'
      ? '550px'
      : props.size === 'lrg'
      ? '825px'
      : '100%'};
  max-width: ${(props) =>
    props.size === 'sm'
      ? '275px'
      : props.size === 'md'
      ? '550px'
      : props.size === 'lrg'
      ? '825px'
      : '100%'};
  min-height: 150px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  box-shadow: 3px 3px 5px black;
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'row' ? props.direction : 'column'};
`

const Card = (props) => {
  return (
    <Wrapper
      direction={props.direction}
      size={props.size}
      height={props.height}
      bgColor={props.bgColor}
    >
      {props.children}
    </Wrapper>
  )
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
  size: '100%',
  direction: 'column'
}

export default Card
