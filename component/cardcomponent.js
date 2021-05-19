import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import { BorderColor } from '@material-ui/icons'

const CardComponent = (props) => {
  let { classes, onPageChange, label, imgSrc, sub, bookmark } = props
  return <Grid
    sm={2}
    item className={[classes.card,classes.clickableCard]}
    onClick={() => onPageChange()} >
      <div style={{backgroundColor: 'white',paddingTop: 10,
    paddingBottom: 0,borderRadius: '7px',
    height: '100%'}}>
    <div className={classes.labelStyle} >
      {label}
    </div>
    <p className={classes.subStyle}>
      {sub}
    </p>
    <img src={imgSrc} />
    {bookmark}
    </div>
  </Grid>
}

const STYLES = {
  card: {
    paddingTop: 5,
    margin: 10,
    background: '#227DF2',
    borderRadius: '8px',
    
  },
  labelStyle: {
  
    fontfamily: 'Public Sans',
    fontstyle: 'normal',
    fontweight: 600,
    fontsize: '18px',
    lineheight: '21px',
    padding:'0px 10px',
    color: '#227df2',

  },
  subStyle: {
    fontfamily: 'Public Sans',
    fontstyle: 'normal',
    fontweight: 'normal',
    fontsize: '13px',
    lineheight: '15px',
    padding:'0px 10px',
    color: '#787878',

  },
  // cardRectangle: {
  //   position: 'inherit',
  //   width: '334px',
  //   height: '93px',
  //   left: '21px',
  //   top: '911px',
  //   padding: 10,
  //   margin: 10,

  //   background: '#227df2',
  //   borderRadius: '8px',
  // },
  clickableCard: {
    cursor: 'pointer',
    // "&:hover": {
    //   background: "rgba(255, 255, 255, 1)"
    // },
  }
}

export default withStyles(STYLES)(CardComponent)