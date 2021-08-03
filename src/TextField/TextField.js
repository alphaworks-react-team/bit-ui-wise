import React from 'react'
import styled from 'styled-components'

const StandardStyle = styled.input`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '35px'};
  background-color: ${(props) => props.bgColor || 'none'};
  color: ${(props) => props.fontColor || 'black'};
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 3px solid rgb(0, 0, 0, 0.3);
  outline: none;

    &:hover {
      border-bottom: 3px solid rgb(0, 0, 0);
      transition: all 0.5s ease;
`

const FilledStyle = styled.input`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '35px'};
  background-color: ${(props) => props.bgColor || 'rgb(128,128,128,0.8)'};
  color: ${(props) => props.fontColor || 'white'};
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 3px solid rgb(0, 0, 0, 0.3);
  outline: none;

      &:hover {
      background-color: rgb(128,128,128);
      border-bottom: 3px solid rgb(0,0,0);
      transition: all 0.5s ease;
`

const OutlinedStyle = styled.input`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '35px'};
  background-color: ${(props) => props.bgColor || 'none'};
  color: ${(props) => props.fontColor || 'black'};
  border-radius: 3px;
  border: 3px solid rgb(128, 128, 128);
  outline: none;

      &:hover {
      border: 3px solid rgb(0,0,0);
      transition: all 0.5s ease;
`

const TextField = (props) => {
  switch (props.variant) {
    case 'standard':
      return (
        <StandardStyle
          width={props.width}
          height={props.height}
          bgColor={props.bgColor}
          fontColor={props.fontColor}
        >
          {props.children}
        </StandardStyle>
      )
    case 'filled':
      return (
        <FilledStyle
          width={props.width}
          height={props.height}
          bgColor={props.bgColor}
          fontColor={props.fontColor}
        >
          {props.children}
        </FilledStyle>
      )
    case 'outlined':
      return (
        <OutlinedStyle
          width={props.width}
          height={props.height}
          bgColor={props.bgColor}
          fontColor={props.fontColor}
        >
          {props.children}
        </OutlinedStyle>
      )
    default:
      return <StandardStyle>{props.children}</StandardStyle>
  }
}

export default TextField
