import React from 'react'
import styled from 'styled-components'
import typoStyles from './TypoUtils'

const returnTypography = (fontColor, fontFamily) => {
  return ` 
  margin: 0;
  padding: 0;
  font-family: ${fontFamily || 'sans-serif'};
  `
}

const Large = styled.h1`
  ${(props) => returnTypography(props.fontColor, props.fontFamily)};
  color: ${(props) => typoStyles.fontColor(props.fontColor || 'dark')};
  font-size: ${(props) => props.fontSize || '3.5em'};
  font-weight: ${(props) => props.fontWeight || '700'};
`

const Medium = styled.h1`
  ${(props) => returnTypography(props.fontColor, props.fontFamily)};
  color: ${(props) => typoStyles.fontColor(props.fontColor || 'dark')};
  font-size: ${(props) => props.fontSize || '2.5em'};
  font-weight: ${(props) => props.fontWeight || '400'};

  // &:hover {
  //   color: blue;
  }
`

const Small = styled.h1`
  ${(props) => returnTypography(props.fontColor, props.fontFamily)};
  color: ${(props) => typoStyles.fontColor(props.fontColor || 'dark')};
  font-size: ${(props) => props.fontSize || '1.2em'};
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
