import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import { BorderColor } from '@material-ui/icons'

const CardComponent = (props) => {
  let { classes} = props
  return <Grid
    item className={[classes.card,classes.clickableCard]}
    >
    {props.children}
  </Grid>
}

const STYLES = {
  card: {
    paddingTop: 5,
    margin: 10,
    background: '#227DF2',
    borderRadius: '8px',  
  },
  clickableCard: {
    cursor: 'pointer',
    // "&:hover": {
    //   background: "rgba(255, 255, 255, 1)"
    // },
  }
}

export default withStyles(STYLES)(CardComponent)