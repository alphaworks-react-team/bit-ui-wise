import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const CardButton = (props) => {


// const buttonStyling = {
//   returnStyles: (position) =>{
//     switch(position){
//       case "left":
//         return 'flex-start'
//       case 'center':
//         return 'center'
//       case 'right':
//         return 'flex-end'
//       default:
//         return 'space-evenly'
//     }
//   }
// }

const ButtonStyle = styled.div`
display: flex;
height: 100%;
margin: 10px;
display: flex;
flex-flow:row wrap;
align-content: space-around;
align-items: space-between;
background-color: ${props.bgColor};
`

// this targets the container
 
  const styles = {
    height: '100%',
    margin: '10px',
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    justifyContent:
      props.position === 'left'
        ? 'flex-start'
        : props.position === 'center'
        ? 'center'
        : props.position === 'right'
        ? 'flex-end'
        : 'space-evenly',
    alignContent: 'space-around',
    alignItems: 'space-between',
    backgroundColor: props.bgColor
  } 

  return (
    <div>
      {props.buttons ? (
        <ButtonStyle>
        <div className='buttonGroup' style={styles}>
        {props.buttons.map((item) => item)} 
        </div> 
        </ButtonStyle>
        ) : null}
        </div>
        
        )
      }
      
      
CardButton.propTypes = {
  position: PropTypes.string,
  bgColor: PropTypes.string,
  buttons: PropTypes.arrayOf({
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string
  })
}
CardButton.defaultProps = {
  position: 'space-evenly',
  bgColor: 'blue', //do we need BGC???
  buttons: [
    {
      variant: '',
      color: 'primary',
      size: 'md'
    }
  ] 
}

export default CardButton
