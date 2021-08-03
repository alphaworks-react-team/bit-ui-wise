import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'
import styled from 'styled-components'
import {css} from 'styled-components'
import Button from './Button'
//import returnPadding from './utils'


// const returnPadding = (size) => {
//     if (size === "small") return "5px 10px";
//     else if (size === "large") return "10px 18px"
//     else return "8px 15px"
// }

const returnPadding = (size) => {
    switch (size) {
        case "small":
            return "5px 10px";
        case "medium":
            return "8px 15px"
        case "large":
            return "10px 18px"
        default:
            return "8px 15px"
    }
}

const StyledButton = styled.button`
    box-shadow: 0 1px 5px rgba(0,0,0,0.5);
    cursor: pointer;
    border-radius: 4px;
    font-weight: 600;
    margin: 3px;
    text-transform: uppercase;

    padding: ${props => returnPadding(props.size)};

    background-color: ${props => props.variant === 'primary'
    && props.kind !== 'outlined' ? "#3f51b5"
    : props.variant === 'secondary'
    && props.kind !== 'outlined' ? "#FF5722"
    : props.variant === 'delete'
    && props.kind !== 'outlined' ? '#d91111'
    : props.variant === 'warning'
    && props.kind !== 'outlined' ? 'gold'
    : props.variant === 'send'
    && props.kind !== 'outlined' ? '#078c22'
    : props.kind === "outlined"
    ? "white"
    : '#3f51b5'
    };

    color: ${props => props.variant === 'primary'
    && props.kind === 'outlined' ? "#3f51b5"
    : props.variant === 'secondary'
    && props.kind === 'outlined' ? "#FF5722"
    : props.variant === 'delete'
    && props.kind === 'outlined' ? '#d91111'
    : props.variant === 'warning'
    && props.kind === 'outlined' ? 'gold'
    : props.variant === 'send'
    && props.kind === 'outlined' ? '#078c22'
    : "white"
    };

    outline: none;

    border: ${props => props.kind === 'outlined' &&
    props.variant === 'primary'
    ? '1px solid #3f51b5'
    : props.kind === "outlined" && props.variant === 'secondary'
    ? '1px solid #FF5722'
    : props.kind === "outlined" && props.variant === 'delete'
    ? '1px solid #d91111'
    : props.kind === "outlined" && props.variant === 'warning'
    ? '1px solid gold'
    : props.kind === "outlined" && props.variant === 'send'
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
        box-shadow: ${props => props.kind === 'outlined'
        ? 'inset 0 0 7px rgba(0,0,0,0.10), 2px 3px 5px rgba(0,0,0,0.25)'
        : 'inset 0 0 20px rgba(0,0,0,0.18), 2px 3px 5px rgba(0,0,0,0.25)'
    };
}
`

StyledButton.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string
}
StyledButton.defaultProps = {
    variant: 'primary',
    size: 'medium'
}


export default StyledButton