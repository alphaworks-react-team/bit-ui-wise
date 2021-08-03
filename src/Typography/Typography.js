import React from 'react'
import styled from 'styled-components'

const Large = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.fontSize || '3.5em'};
  color: ${(props) => props.fontColor || 'black'};
  font-family: ${(props) => props.fontFamily || 'sans-serif'};
  font-weight: ${(props) => props.fontWeight || '700'};
`

const Medium = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.fontSize || '2.5em'};
  color: ${(props) => props.fontColor || 'green'};
  font-family: ${(props) => props.fontFamily || 'sans-serif'};
  font-weight: ${(props) => props.fontWeight || '400'};

  &:hover {
    color: blue;
  }
`

const Small = styled.h3`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.fontSize || '1.2em'};
  color: ${(props) => props.fontColor || 'orange'};
  font-family: ${(props) => props.fontFamily || 'sans-serif'};
  font-weight: ${(props) => props.fontWeight || '400'};
`

const Typography = (props) => {
  switch (props.variant) {
    case 'large':
      return (
        <Large
          fontSize={props.fontSize}
          fontColor={props.fontColor}
          fontFamily={props.fontFamily}
          fontWeight={props.fontWeight}
        >
          {props.children}
        </Large>
      )
    case 'medium':
      return (
        <Medium
          fontSize={props.fontSize}
          fontColor={props.fontColor}
          fontFamily={props.fontFamily}
          fontWeight={props.fontWeight}
        >
          {props.children}
        </Medium>
      )
    case 'small':
      return (
        <Small
          fontSize={props.fontSize}
          fontColor={props.fontColor}
          fontFamily={props.fontFamily}
          fontWeight={props.fontWeight}
        >
          {props.children}
        </Small>
      )
    default:
      return <Medium>{props.children}</Medium>
  }
}

export default Typography
