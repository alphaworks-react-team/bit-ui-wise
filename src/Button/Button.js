import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { css } from 'styled-components'
import teamStyles from './utils'

const Button = styled.button`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  margin: 3px;
  text-transform: uppercase;

  padding: ${(props) => teamStyles.returnPadding(props.size)};

  font-size: ${(props) => teamStyles.returnFontSize(props.size)};

  background-color: ${(props) =>
    teamStyles.returnBgColor(props.color, props.variant)};

  color: ${(props) => teamStyles.returnColor(props.color, props.variant)};

  border: ${(props) => teamStyles.returnBorder(props.color, props.variant)};

  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-1px);
    box-shadow: ${(props) =>
      props.variant === 'outlined'
        ? 'inset 0 0 7px rgba(0,0,0,0.10), 2px 3px 5px rgba(0,0,0,0.25)'
        : 'inset 0 0 20px rgba(0,0,0,0.18), 2px 3px 5px rgba(0,0,0,0.25)'};
  }

  ${(props) =>
    props.variant === 'text' &&
    css`
      color: ${(props) => teamStyles.returnColor(props.color, props.variant)};
      box-shadow: none;
      &:hover {
        transform: none;
        /* opacity: 0.1;
        background: ${(props) =>
          teamStyles.returnColor(props.color, props.variant)};  */
        background: rgba(0, 0, 0, 0.1);
    `};

  ${(props) =>
    props.disabled &&
    css`
      background-color: lightgrey;
      cursor: auto;
      box-shadow: none;
      &:hover {
        transform: none;
        box-shadow: none;
      }
    `};
`

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
}
Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'md'
}

export default Button
