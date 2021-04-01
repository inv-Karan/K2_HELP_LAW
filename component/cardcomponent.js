import React from 'react'
import { withStyles, Grid } from '@material-ui/core'

const CardComponent = (props) => {
  let { classes, onPageChange, label, imgSrc, sub, bookmark } = props
  return <Grid
    sm={2}
    item className={[classes.card, classes.clickableCard]}
    onClick={() => onPageChange()} >
    <div className={classes.labelStyle} >
      {label}
    </div>
    {sub}
    <img src={imgSrc} />
    {bookmark}
  </Grid>
}

const STYLES = {
  card: {
    width: "100%",
    height: '139px',
    borderRadius: '20px',
    backgroundColor: '#0070f3',
    margin: 10,
    padding: 10
  },
  labelStyle: {
    padding: '10px 15px',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '16px',
    color: '#ffffff',
    "&:hover": {
      color: "rgba(0, 0, 0, 1)"
    },
  },
  clickableCard: {
    cursor: 'pointer',
    "&:hover": {
      background: "rgba(255, 255, 255, 1)"
    },
  }
}

export default withStyles(STYLES)(CardComponent)