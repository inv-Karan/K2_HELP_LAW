import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import Color from '../styles/colors'
import { HyperLink, Button, } from './index'

const UploadComponent = (props) => {
  let { classes, onChange, onBlur, name, value } = props
  return <>
  <Grid container spacing={2} style={{padding:'30px'}}>
  {value !== '' &&  <div style={{
      height: '120px', width: '120px',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: Color.darkgray
    }}>
      <img src={value} style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }} />
    </div>}
    <div style={{ padding: '20px 20px', textAlign: 'center' }}>
      <div style={{ }}>
        <input 
        type="file" 
        name={name}
        className={classes.inputStyle} 
        accept="image/x-png, image/gif, image/jpeg"
        onBlur={onBlur}
        onChange={(e) => {
          onChange(e.currentTarget.files[0], URL.createObjectURL(e.currentTarget.files[0]))
        }}
        />
      </div>
    </div>
    </Grid>
  </>
}
const STYLES = {
  imgStyle: {
    marginRight: 5,
    width: '20px',
    height: '20px'
  },
  inputStyle: {
    opacity: 1,
    cursor: 'pointer',
    height: '38px',
    width: '140px',
  },
  labelStyle: {
    // position: 'absolute',
    zIndex: 1,
    // left: 0,
    // top: 0,
    backgroundColor: '#2e8b57',
    height: '38px',
    width: '140px',
    cursor: 'pointer',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    color: Color.white,
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 200,
    fontStretch: 'normal',
    fontStyle: 'normal',
    alignItems: 'center'
  },
  button: {
    height: '38px',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: Color.purple,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: Color.purple,
    },
    '&::before': {
      content: 'fsd',
      backgroundColor: Color.white
    }

  }
}
export default withStyles(STYLES)(UploadComponent)