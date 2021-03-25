import React from 'react'
import { withStyles, Grid } from '@material-ui/core'

const CardComponent = (props) => {
  let { classes, onPageChange, label, imgSrc } = props
  return <Grid
    sm={2}
    item className={[classes.card, classes.clickableCard]}
    onClick={() => onPageChange()} >
    <div className={classes.labelStyle} >
      {label}
    </div>
    <img src={imgSrc} />
  </Grid>
}

const STYLES = {
  card: {
    width: "100%",
    height: '139px',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10
  },
  labelStyle: {
    padding: '10px 15px',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '16px'
  },
  clickableCard: {
    cursor: 'pointer',
    "&:hover": {
      background: "rgba(46,139,87,1)"
    },
  }
}

export default withStyles(STYLES)(CardComponent)