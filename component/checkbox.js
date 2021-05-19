import React from 'react'
import { withStyles } from '@material-ui/core'

const CheckboxComponent = (props) => {
  let { classes, placeholder, name, handleChange, value, label, width, list } = props
  return <div className={'checkboxBtn'}>
    <label className={'customCheckbox'}>
      <input type="checkbox"
        checked={value === false}
        onChange={handleChange}
        value="a"
        name="buttoncheck"
        inputProps={{ 'aria-label': 'A' }}
      />
      {label}
      <span className="checkmark"></span>
    </label>
  </div>
}
const STYLES = {
}
export default withStyles(STYLES)(CheckboxComponent)