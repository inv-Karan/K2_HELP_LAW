import React from 'react'
import { withStyles } from '@material-ui/core'

const TextBox = (props) => {
  let { type, classes, placeholder, name, handleChange, value, icon, label, width, onBlur, disabled, iconClick, isRequired } = props
  return <div className={'formGroup'}>
    {label && <label className={classes.label}>{label} {isRequired ? <span className={'required-field'}>*</span> : null} </label>}
    <input
      type={type || 'text'}
      className={'formControl'}
      value={value}
      onChange={handleChange}
      name={name}
      placeholder={placeholder || ''}
      onBlur={onBlur}
      disabled={disabled}
    />
    {icon && <img onClick={iconClick} className={'inputBoxIcon'} style={{ position: 'absolute', right: '15px', top: '25px', zIndex: 1 }} src={icon}></img>}
  </div>
}
const STYLES = {
  textBox: {
  }

}
export default withStyles(STYLES)(TextBox)