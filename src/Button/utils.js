const teamStyles = {
  returnPadding: (size) => {
    switch (size) {
      case 'sm':
        return '5px 10px'
      case 'md':
        return '8px 15px'
      case 'lrg':
        return '10px 18px'
      default:
        return '8px 15px'
    }
  },

  returnFontSize: (size) => {
    switch (size) {
      case 'sm':
        return '0.8em'
      case 'md':
        return '1em'
      case 'lrg':
        return '1.15em'
      default:
        return '1em'
    }
  },

  returnBgColor: (color, variant) => {
    if (color === 'primary' && variant !== 'outlined' && variant !== 'text') {
      return '#3f51b5'
    } else if (
      color === 'secondary' &&
      variant !== 'outlined' &&
      variant !== 'text'
    ) {
      return '#FF5722'
    } else if (
      color === 'delete' &&
      variant !== 'outlined' &&
      variant !== 'text'
    ) {
      return '#d91111'
    } else if (
      color === 'warning' &&
      variant !== 'outlined' &&
      variant !== 'text'
    ) {
      return 'gold'
    } else if (
      color === 'success' &&
      variant !== 'outlined' &&
      variant !== 'text'
    ) {
      return '#078c22'
    } else if (variant === 'outlined' || variant === 'text') {
      return 'white'
    } else {
      return color
    }
  },

  returnColor: (color, variant) => {
    if (color === 'primary' && (variant === 'outlined' || variant === 'text')) {
      return '#3f51b5'
    } else if (
      color === 'secondary' &&
      (variant === 'outlined' || variant === 'text')
    ) {
      return '#FF5722'
    } else if (
      color === 'delete' &&
      (variant === 'outlined' || variant === 'text')
    ) {
      return '#d91111'
    } else if (
      color === 'warning' &&
      (variant === 'outlined' || variant === 'text')
    ) {
      return 'gold'
    } else if (
      color === 'success' &&
      (variant === 'outlined' || variant === 'text')
    ) {
      return '#078c22'
    } else if (variant === 'outlined' || variant === 'text') {
      return color
    } else {
      return 'white'
    }
  },

  returnBorder: (color, variant) => {
    if (color === 'primary' && variant === 'outlined') {
      return '1px solid #3f51b5'
    } else if (color === 'secondary' && variant === 'outlined') {
      return '1px solid #FF5722'
    } else if (color === 'alert' && variant === 'outlined') {
      return '1px solid #d91111'
    } else if (color === 'warning' && variant === 'outlined') {
      return '1px solid gold'
    } else if (color === 'success' && variant === 'outlined') {
      return '1px solid #078c22'
    } else if (variant === 'outlined') {
      return `1px solid ${color}`
    } else {
      return 'none'
    }
  }
}

export default teamStyles
