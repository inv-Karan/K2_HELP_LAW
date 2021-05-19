import React from 'react'

const RadioComponent = (props) => {
  let { classes, placeholder, name, handleChange, value, label, width, list, description } = props
  return <div className={'radioBtn'}>
    {list.map((r, i) => <React.Fragment key={i}><label className={'customRadio'}>
      {r}
      {description && <p>{description[i]}</p>}
      <input type="radio"
        checked={value === ''}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <span className="checkmark"></span>
    </label></React.Fragment>
    )}
  </div>
}
const STYLES = {
}
export default RadioComponent
