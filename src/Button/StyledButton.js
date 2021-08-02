import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'
import styled from 'styled-components'
import {css} from 'styled-components'
import Button from './Button'
// import {returnPadding} from './utils'


// const returnPadding = (size) => {
//     if (size === "small") return "5px 10px";
//     else if (size === "large") return "10px 18px"
//     else return "8px 15px"
// }

// const returnPadding = (size) => {
//     switch (size) {
//         case "small":
//             return "5px 10px";
//         case "medium":
//             return "8px 15px"
//         case "large":
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

    padding: ${props => props.size === "small"
    ? "5px 10px"
    : props.size ==="medium" 
    ? "8px 15px"
    : props.size === "large"
    ? "10px 18px"
    : "8px 15px"
    };

    background-color: ${props => props.variant === 'primary'
    && props.type !== 'outlined' ? "#3f51b5"
    : props.variant === 'secondary'
    && props.type !== 'outlined' ? "#FF5722"
    : props.variant === 'delete'
    && props.type !== 'outlined' ? '#d91111'
    : props.variant === 'warning'
    && props.type !== 'outlined' ? 'gold'
    : props.variant === 'send'
    && props.type !== 'outlined' ? '#078c22'
    : props.type === "outlined"
    ? "white"
    : '#3f51b5'
    };

    border: ${props => props.type !== 'outlined'
    && 'none'
    }; 
    
    border-color: ${props => props.type === "outlined" &&
    props.variant === 'primary'
    ? '#3f51b5'
    : props.type === "outlined" && props.variant === 'secondary'
    ? '#FF5722'
    : props.type === "outlined" && props.variant === 'delete'
    ? '#d91111'
    : props.type === "outlined" && props.variant === 'warning'
    ? 'gold'
    : props.type === "outlined" && props.variant === 'send'
    ? '#078c22'
    : 'none'
};


    &:hover {
        transition: all 0.3s ease;
        transform: translateY(-1px);
        box-shadow: ${props => props.type === 'outlined'
        ? 'inset 0 0 7px rgba(0,0,0,0.10), 2px 3px 5px rgba(0,0,0,0.25)'
        : 'inset 0 0 20px rgba(0,0,0,0.18), 2px 3px 5px rgba(0,0,0,0.25)'
    };
}
`

export default StyledButton