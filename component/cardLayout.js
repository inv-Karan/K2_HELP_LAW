import React from 'react'
import { withStyles, Card } from '@material-ui/core'
import Color from '../styles/colors'

const CardLayout = (props) => {
  let { classes, children } = props
  return <>
    <Card className={classes.card}>{children}</Card>
  </>
}
const STYLES = {
  card: {
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    border: `solid 1px ${Color.darkgray}`,
    boxShadow: 'none'
  }
}
export default withStyles(STYLES)(CardLayout)