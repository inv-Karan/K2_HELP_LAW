import React from 'react'
import { withStyles } from '@material-ui/core'

const Container = (props) => {
  let { children, classes } = props
  return <div className={classes.container}>{children}</div>
}
const STYLES = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '90px',
    minHeight: '100vh'
  }
}
export default withStyles(STYLES)(Container)