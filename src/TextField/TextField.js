import React from 'react'
import styled from 'styled-components'

const returnProps = (propsObject) => {
  return {
    onChange: propsObject.onChange,
    name: propsObject.name,
    type: propsObject.type,
    placeholder: propsObject.placeholder,
    value: propsObject.value,
    width: propsObject.width,
    height: propsObject.height,
    bgColor: propsObject.bgColor,
    fontColor: propsObject.fontColor
  }
}
const colors = {
  darkGrey: 'rgb(48, 48, 48)',
  darkGreyThirty: 'rgb(48, 48, 48, 0.3)',
  darkGreyEighty: 'rgb(48, 48, 48, 0.8)',
  lightGrey: 'rgb(128, 128, 128)',
  almostBlack: 'rgb(9, 11, 12)',
  almostWhite: 'rgb(247, 247, 243)'
}
const styles = {
  width: `100%`,
  height: `2rem`,
  border: `2px solid ${colors.darkGrey}`,
  borderBottom: `2px solid ${colors.darkGreyThirty}`,
  hoverBorder: `2px solid ${colors.darkGrey}`,
  borderBottomHover: `2px solid ${colors.almostBlack}`,
  borderTopRadius: `0.25rem`,
  backgroundColor: `${colors.lightGrey}`
}
const returnThings = (width, height, bgColor, fontColor, borderBottom) => {
  return `
  width: ${width || styles.width};
  height: ${height || styles.height};
  background-color: ${bgColor || 'none'};
  color: ${fontColor || colors.almostBlack} ;
  border-bottom: ${borderBottom || styles.borderBottom};
 `
}
const StandardStyle = styled.input`
  ${(props) =>
    returnThings(
      props.width,
      props.height,
      props.bgColor,
      props.fontColor,
      props.borderBottom
    )};
  border-top: none;
  border-right: none;
  border-left: none;
  margin: 0;
  padding: 0;
  outline: none;
  &:hover {
    border-bottom: ${(props) =>
      props.borderBottomHover || styles.borderBottomHover};
  }
`
const FilledStyle = styled(StandardStyle)`
  background-color: ${(props) => props.bgColor || colors.darkGreyThirty};
  color: ${(props) => props.fontColor || colors.almostWhite};
  border-top-right-radius: ${styles.borderTopRadius};
  border-top-left-radius: ${styles.borderTopRadius};
  &:hover {
    background-color: ${colors.lightGrey};
    border-bottom: ${styles.borderBottom};
    transition: all 0.5s ease;
  }
`
const OutlinedStyle = styled(StandardStyle)`
  background-color: ${(props) => props.bgColor || 'none'};
  color: ${(props) => props.fontColor || colors.almostWhite};
  border-top-right-radius: ${styles.borderTopRadius};
  border-top-left-radius: ${styles.borderTopRadius};
  border: ${styles.borderBottom};
  &:hover {
    border: ${styles.borderBottomHover};
  }
`
const TextField = (props) => {
  console.log({ props })
  switch (props.variant) {
    case 'standard':
      return (
        <StandardStyle {...returnProps(props)}>{props.children}</StandardStyle>
      )
    case 'filled':
      return <FilledStyle {...returnProps(props)}>{props.children}</FilledStyle>
    case 'outlined':
      return (
        <OutlinedStyle {...returnProps(props)}>{props.children}</OutlinedStyle>
      )
    default:
      return (
        <StandardStyle {...returnProps(props)}>{props.children}</StandardStyle>
      )
  }
}
export default TextField
