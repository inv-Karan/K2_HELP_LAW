import React from 'react'
import { withStyles, Button } from '@material-ui/core'

const ButtonComponent = (props) => {
  let { text, classes, onClick, styles, image, customClass, type } = props
  return <>
    <Button
      className={customClass ? customClass : 'primaryBtn'}
      onClick={onClick}
      type = { type || 'button'}
    >
      {image && <img style={{ marginRight: '10px' }} src={image} />}
      {text}
    </Button>
  </>
}
const STYLES = {

}
export default withStyles(STYLES)(ButtonComponent)