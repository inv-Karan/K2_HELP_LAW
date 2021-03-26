import React from 'react'
import { withStyles } from '@material-ui/core'

const SelectComponent = (props) => {
  let { classes, placeholder, name, handleChange, value, label, width, list, description, onBlur, isRequired } = props
  return <div className={'formGroup'}>
    {label && <label className={classes.label}>{label} {isRequired ? <span className={'required-field'}>*</span> : null} </label>}
    {description && <div className={'dis'}>{description}</div>}
    <select
      className={'formControl'}
      value={value}
      name={name}
      // placeholder={placeholder}
      onChange={handleChange}
      onBlur={onBlur}
    >
      <option value={""} disabled>{placeholder}</option>
      {list.map((l, i) => <option key={i+1} value={l}>{l}</option>)}
    </select>
  </div>
}
const STYLES = {
}
export default withStyles(STYLES)(SelectComponent)