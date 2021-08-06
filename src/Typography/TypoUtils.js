const typoStyles = {
  fontColor: (fontColor) => {
    switch (fontColor) {
      case 'primary':
        return '#007BFF'
      case 'secondary':
        return '#6C757D'
      case 'success':
        return '#28A744'
      case 'danger':
        return '#DC3545'
      case 'warning':
        return '#FFC106'
      case 'info':
        return '#17A2B8'
      case 'light':
        return '#F8F9FA'
      case 'dark':
        return '#343A40'
      case 'white':
        return '#FFFFFF'
    }
  }
}

export default typoStyles
