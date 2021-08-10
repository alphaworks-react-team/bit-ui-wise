import React, { useEffect } from 'react'
import Button from './../Button/Button'
import Typography from './../Typography/Typography'

const Modal = (props) => {
  if (!props.state) {
    return null
  }
  const { modalContainer, modalContent, modalHeader, modalBody, modalFooter } =
    {
      modalContainer: {
        position: 'fixed',
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      modalContent: {
        width: '500px',
        backgroundColor: 'white',
        boxShadow: ' 5px 5px 5px black',
        borderRadius: '5px'
      },
      modalHeader: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid black'
      },
      modalBody: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between'
      },
      modalFooter: {}
    }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.closeModal()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return (
    <div style={modalContainer} onClick={props.closeModal}>
      <div style={modalContent} onClick={(e) => e.stopPropagation()}>
        {props.title ? (
          <div style={modalHeader}>
            <Typography variant={props.titleSize} fontColor={props.titleColor}>
              {props.title}
            </Typography>
            <Button
              size={props.btnSize}
              color={props.btnColor}
              variant={props.btnVariant}
              style={{ height: '28px' }}
              onClick={props.closeModal}
            >
              X
            </Button>
          </div>
        ) : null}
        <div style={modalBody}>
          <Typography
            variant={props.bodyTextSize}
            fontColor={props.bodyTextColor}
          >
            This Modal is Awesome lorem lorem Lorem ipsum dolor sit amet, Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quia, facilis
            laborum. Delectus accusamus vitae rerum eos voluptas consectetur id,
            ullam eum soluta omnis totam vero laboriosam ex, incidunt labore
            quo.
          </Typography>
          {!props.title ? (
            <Button
              size={props.btnSize}
              style={{ height: '28px' }}
              onClick={props.closeModal}
            >
              X
            </Button>
          ) : null}
        </div>
        <div style={modalFooter}></div>
      </div>
    </div>
  )
}

export default Modal
