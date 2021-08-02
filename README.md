# Component library for react

- [Buttons](#Buttons)
- [Card](#Card)

# Buttons

```jsx
    <Button size="small" variant="primary">Small</Button>
    <Button size="medium" variant="primary">Medium</Button>
    <Button size="large" variant="primary">Large</Button>
```

Props

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

# Card

The card component is designed to take in other components like **Typography** and **Button**. As you import these components in to your card, the content within the card component will flex as needed to the height and width necessary.

```jsx
import CardText from 'bit-ui-wise'
import Typography from 'bit-ui-wise'

class CardText extends Component {
  render() {
    return (
      <CardText>
        <Typography varient='header' varient='sub-header'></Typography>
      </CardText>
    )
  }
}
```

```jsx
import CardButton from 'bit-ui-wise'
import Button from 'bit-ui-wise'

class CardButton extends Component {
  render() {
    return (
      <Button size='small' variant='primary'>
        Small
      </Button>
    )
  }
}
```
## Default Card
The default option for the card component is an empty container wit set styling, that allows the user to add content at their own discretion. 
!(image here)[]
<hr />
When users add their own content, the card will resize to the proper dimensions within itself, giving the content room to grow or shrink.
(image here)[]


# Input

props: type, value, placeholder, onchange, type

| props       |            |          |      |
| ----------- | ---------- | -------- | ---- |
| type        | email      | password | text |
| placeholder | "String"   |          |      |
| value       | "String"   |          |      |
| onChange    | "Function" |          |      |

```jsx
<TextField />
<TextField placeholder={'im a placeholder'} />
<TextField
  inputStyle={'outline'}
  value={'im a value'}
  width={'25%'}
/>
<TextField inputStyle={'filled'} width={'25%'} />
```
