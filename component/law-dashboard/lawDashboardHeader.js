import React , { useEffect } from 'react'
import { withStyles, Grid } from '@material-ui/core'
import { Button, Select } from '../../component/index'
import {
  sendHttpCall
} from '../../utiliy/api/apiCaller'

const DashboardHeader = (props) => {
  let { classes } = props

  useEffect(() => {
  }, [])
  
  return <>
    <Grid container spacing={0} className={'topFilter'}>
      <Grid item className={'topFilterInn'}>
        {showIfFarmer ? 
          <h1>{`Hello ${a} !`}</h1> : 
          <div>
            <h1>{`Hello ${a}! `}</h1>
            <h2>{`Farmer Name: ${b} `}</h2>
            <h2>{`Farmer Mobile: ${c} `}</h2>
          </div>}
      </Grid>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item className={'createSelect formSquare'}>
            {showIfFarmer ? showFarmListing && 
              <Select
                value={selectedFarm.name || ""}
                name="genderType"
                placeholder='choose Farm'
                handleChange={(e) => {
                  const selectedFarm = farms.filter(f => f.name === e.target.value)[0]
                  dispatch(updateSelectFarm(selectedFarm))
                  dispatch(getWeatherList(selectedFarm.lat, selectedFarm.lng))
                }}
                list={formatedFarm}
              /> : null
            }
          </Grid>
          <Grid item>
            {showIfFarmer && showFarmListing ?
              <Button text={'Add Farm'} onClick={() => toggleFarmPopup()} />
              : null
            }
          </Grid>
          {(clock_in_time === null || clock_out_time === null) && <Grid item>
            {
              !isFarmer(designation_id) ?
                <Button text={clock_in ? 'Clock-out' : 'Clock-in'} onClick={() => {
                  sendHttpCall(dispatch, 'get', `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.lat},${position.long}&key=AIzaSyBoPku-cWzJZ7FCqlLmHq8UAvDfmK_Uw-4&sensor=true`)
                    .then(res => {
                      let values = {
                        location: res.plus_code.compound_code.split(' ')[1].slice(0, -1) ? res.plus_code.compound_code.split(' ')[1].slice(0, -1) : " ",
                        lat: position.lat,
                        lng: position.long,
                        weather: (weather && weather[0]) ? weather[0].description : '0',
                        type: clock_in ? 'clock-out' : 'clock-in'
                      }
                      debugger
                      dispatch(updateStatus(values))
                    }).catch(err => {
                      alert(err.error_message)
                    })
                }} />
                : null
            }
          </Grid>}
        </Grid>
      </Grid>
    </Grid>
    <Grid spacing={0} container>

      <Grid sm={3} item className={classes.card}>
        <div className={classes.labelStyle}>{formatTodayDate()}</div>
      </Grid>
      {
        showIfFarmer && showFarmListing ?
          <>
            <Grid sm={3} item className={classes.card}>
              {/* <div className={classes.labelStyle}>{formatTodayDate()}</div> */}
              <div style={{
                display: 'flex', flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between'
              }}>
                <div className={classes.labelStyle}>{`Temprature ${temp} °C`}</div>
                <div className={classes.labelStyle}>{(weather && weather[0]) ? weather[0].description : ''}</div>
              </div>
            </Grid>
            <Grid sm={3} item className={classes.card}>
              <div className={classes.labelStyle}>{'Elevation'}</div>
              <div style={{
                display: 'flex', flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between'
              }}>
                <div className={classes.labelStyle}>{`${elevation && elevation.toFixed(2) || 0} m`}</div>
              </div>
            </Grid>
          </> : null
      }
      {
        (!showIfFarmer && (clock_in_time || clock_out_time !== null)) &&
        <Grid sm={3} item className={classes.card}>
          <div className={classes.labelStyle}>{`Last Clock-in: ${clock_in_time} `}</div>
          {clock_out_time !== null && <div className={classes.labelStyle}>{`Last Clock-out: ${clock_out_time} `}</div>}
        </Grid>
      }
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
      background: "rgba(46,139,87,1)"
    },
  }
}

export default withStyles(STYLES)(DashboardHeader)