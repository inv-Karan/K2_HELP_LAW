import React from 'react'
import { withStyles } from '@material-ui/core'

const PageFrame = (props) => {
  let { classes } = props
  return <>
    <div className={'mainContainer'}>
      <div className={classes.whitePaper}>
        {props.children}
      </div>
    </div>
  </>
}
const STYLES = {
  frame: {

  },
  whitePaper: {
    height: '100%'
  }
}
export default withStyles(STYLES)(PageFrame)