import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`
const Image = styled.div`
  background-color: ${(props) => props.bgColor};
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${(props) => props.bgSize};
  height: ${(props) => props.imgHeight};
  width: ${(props) =>
    props.imgWidth === 'sm'
      ? '275px'
      : props.imgWidth === 'md'
      ? '550px'
      : props.imgWidth === 'lrg'
      ? '825px'
      : '100%'};
`

const CardImage = (props) => {
  return (
    <ImageContainer>
      <Image
        bgColor={props.bgColor}
        bgSize={props.bgSize}
        imgWidth={props.imgWidth}
        imgHeight={props.imgHeight}
        img={props.img}
      />
    </ImageContainer>
  )
}

// ADD PROPTYPES HERE SEENA!!!! DONT MESS UP I AM WATCHING YOU !!!!
CardImage.propTypes = {
  bgColor: PropTypes.string,
  img: PropTypes.string,
  bgSize: PropTypes.string,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string
}

CardImage.defaultProps = {
  bgColor: 'white',
  bgSize: 'cover',
  img: 'https://picsum.photos/1000',
  imgHeight: '150px',
  imgWidth: '100%'
}

export default CardImage
