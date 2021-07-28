# Component library for react

- [Buttons](#Buttons)

# Buttons

```jsx
    <Button size="small" variant="primary">Small</Button>
    <Button size="medium" variant="primary">Medium</Button>
    <Button size="large" variant="primary">Large</Button>
```

Props

```jsx

import CardText from 'bit-ui-wise'
import Typography from 'bit-ui-wise'

// import 'bit-ui-wise/dist/index.css'

class CardText tends Component {
  render() {
    return <CardText>
    <Typography></Typography>
    </CardText>
  }
}
```
**'size'** has available options: 'sm' for small, 'md' for medium, 'rgl' for large.\
**'variant'** options: 'primary', 'secondary', 'warning', 'delete', 'send'.\
**'type'** optinos: 'outlined', 'contained'.

_If no props are passed, the default styling will be size 'md', variant 'primary', and type 'contained'._

## Props

|          |           |           |         |        |      |
| -------- | --------- | --------- | ------- | ------ | ---- |
| size:    | sm        | md        | rgl     |        |      |
| variant: | primary   | secondary | warning | delete | send |
| type     | oputlined | contained |         |        |      |
