import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'
import styled from 'styled-components'
import {css} from 'styled-components'
import Button from './Button'
import returnPadding from './utils'
import returnFontSize from './utils2'

// const returnPadding = (size) => {
//     if (size === "sm") return "5px 10px";
//     else if (size === "lrg") return "10px 18px"
//     else return "8px 15px"
// }

// const returnPadding = (size) => {
//     switch (size) {
//         case "sm":
//             return "5px 10px";
//         case "md":
//             return "8px 15px"
//         case "lrg":
//             return "10px 18px"
//         default:
//             return "8px 15px"
//     }
// }

const StyledButton = styled.button`
    box-shadow: 0 1px 5px rgba(0,0,0,0.5);
    cursor: pointer;
    border-radius: 4px;
    font-weight: 600;
    margin: 3px;
    text-transform: uppercase;

    padding: ${props => returnPadding(props.size)};

    font-size: ${props => returnFontSize(props.size)};

    background-color: ${props => props.color === 'primary'
    && props.variant !== 'outlined' ? "#3f51b5"
    : props.color === 'secondary'
    && props.variant !== 'outlined' ? "#FF5722"
    : props.color === 'delete'
    && props.variant !== 'outlined' ? '#d91111'
    : props.color === 'warning'
    && props.variant !== 'outlined' ? 'gold'
    : props.color === 'send'
    && props.variant !== 'outlined' ? '#078c22'
    : props.variant === "outlined"
    ? "white"
    : props.color
    };

    color: ${props => props.color === 'primary'
    && props.variant === 'outlined' ? "#3f51b5"
    : props.color === 'secondary'
    && props.variant === 'outlined' ? "#FF5722"
    : props.color === 'delete'
    && props.variant === 'outlined' ? '#d91111'
    : props.color === 'warning'
    && props.variant === 'outlined' ? 'gold'
    : props.color === 'send'
    && props.variant === 'outlined' ? '#078c22'
    : "white"
    };

    outline: none;

    border: ${props => props.variant === 'outlined' &&
    props.color === 'primary'
    ? '1px solid #3f51b5'
    : props.variant === "outlined" && props.color === 'secondary'
    ? '1px solid #FF5722'
    : props.variant === "outlined" && props.color === 'delete'
    ? '1px solid #d91111'
    : props.variant === "outlined" && props.color === 'warning'
    ? '1px solid gold'
    : props.variant === "outlined" && props.color === 'send'
    ? '1px solid #078c22'
    : 'none'
    }; 

    ${props => props.disabled && css`
        background-color: lightgrey;
        cursor: auto;
    `}
    

    &:hover {
        transition: all 0.3s ease;
        transform: translateY(-1px);
        box-shadow: ${props => props.variant === 'outlined'
        ? 'inset 0 0 7px rgba(0,0,0,0.10), 2px 3px 5px rgba(0,0,0,0.25)'
        : 'inset 0 0 20px rgba(0,0,0,0.18), 2px 3px 5px rgba(0,0,0,0.25)'
    };
}
`

StyledButton.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string
}
StyledButton.defaultProps = {
    variant: '',
    color: 'primary',
    size: 'md'
}


export default StyledButton