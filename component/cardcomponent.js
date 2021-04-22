import React from 'react'
import { withStyles, Grid } from '@material-ui/core'

const CardComponent = (props) => {
  let { classes, onPageChange, label, imgSrc, sub, bookmark } = props
  return <Grid
    sm={2}
    item className={[classes.card, classes.cardRectangle, classes.clickableCard]}
    onClick={() => onPageChange()} >
    <div className={classes.labelStyle} >
      {label}
    </div>
    <p className={classes.subStyle}>
      {sub}
    </p>
    <img src={imgSrc} />
    {bookmark}
  </Grid>
}

const STYLES = {
  card: {
    // width: "100%",
    // height: '139px',
    // borderRadius: '8px',
    // backgroundColor: '#ffffff',
    // margin: 10,
    // padding: 10,
    // position: 'inherit'
    position: 'inherit',
    width: '100%',
    height: '93px',
    left: '21px',
    top: '911px',
    padding: 10,
    margin: 10,

    background: '#FFFFFF',
    borderRadius: '8px'
  },
  labelStyle: {
    position: 'inherit',
    width: '78px',
    height: '21px',
    left: '37px',
    top: '1035px',
  
    fontfamily: 'Public Sans',
    fontstyle: 'normal',
    fontweight: 600,
    fontsize: '18px',
    lineheight: '21px',

    color: '#227df2',

  },
  subStyle: {
    position: 'inherit',
    width: '78px',
    height: '21px',
    left: '37px',
    top: '1035px',
  
    fontfamily: 'Public Sans',
    fontstyle: 'normal',
    fontweight: 'normal',
    fontsize: '13px',
    lineheight: '15px',

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