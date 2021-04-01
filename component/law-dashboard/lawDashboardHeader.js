import React, { useEffect } from 'react'
import { withStyles, Grid } from '@material-ui/core'
import { Button } from '../../component/index'
// import {
//   sendHttpCall
// } from '../../utiliy/api/apiCaller'

const DashboardHeader = (props) => {
  let { classes } = props

  useEffect(() => {
  }, [])

  return <>
    <Grid className={'topFilter'}>
      <Grid item className={'topFilterInn'}>
        <div>
          <h1>{`Hello, John!`}</h1>
          <h3>{`What are you looking for?`}</h3>
        </div>
      </Grid>
    </Grid>
    <Grid>
      {/* {
          <>
            <Grid sm={3} item className={classes.card}>
              <div style={{
                display: 'flex', flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between'
              }}>
                <div className={classes.labelStyle}>{``}</div>
                <div className={classes.labelStyle}>{``}</div>
              </div>
            </Grid>
            <Grid sm={3} item className={classes.card}>
              <div className={classes.labelStyle}>{''}</div>
              <div style={{
                display: 'flex', flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between'
              }}>
                <div className={classes.labelStyle}>{``}</div>
              </div>
            </Grid>
          </>
      }
      {
        <Grid sm={3} item className={classes.card}>
          <div className={classes.labelStyle}>{``}</div>
          <div className={classes.labelStyle}>{``}</div>
        </Grid>
      } */}
    </Grid>
  </>
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
      background: "rgba(0, 112, 243, 1)"
    },
  }
}

export default withStyles(STYLES)(DashboardHeader)