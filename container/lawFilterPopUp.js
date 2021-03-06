import React from 'react'
import { withStyles, Dialog } from '@material-ui/core'
import { Filter } from '../utility/constants'
import { useRouter } from 'next/router'

const FilterPopUp = (props) => {
  const router = useRouter()
  let { classes, customClass, open, toggleFilter } = props;
  return <>
  <Dialog className={'customPopup'} open={open}>
  <img onClick={() => { toggleFilter()}} src={'/images/close.svg'} className={'closePopup'} />
  <nav className={`${customClass}`}>
    <ul>
      <li className={'title'}>Filter</li>
      {Filter.map(({ text, subFilter, link }, index) => <li key={index}>
        <div className={'firstLevel'} onClick={() => {
          if (link && link !== '') {
            router.push(link)
          }
        }}
        >
          {/* <img src={icon} className={'leftIcon'} /> */}
          <p>{text}</p><span />
          {/* <img src={'/images/icons-expand.svg'} className={'expandIcon'} /> */}
        </div>
        {subFilter && <ul className={'firstChild'}>
          {subFilter && subFilter.map(({ text: subtext, link: sublink }, i) => {
            // if (userData && userData.designation_id) {
            // if (Permission[parseInt(userData.designation_id) - 1].permission.includes(sublink)) {
            return <li key={i}><div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }} onClick={() => {
              if (sublink && sublink !== '') {
                // router.push(sublink)
              }
            }}>
              {subtext}
            </div></li>;
            // }
            // }
          }
          )}
        </ul>}
      </li>)}
    </ul>
  </nav >
  </Dialog>
  </>
}
const STYLES = {

}

export default withStyles(STYLES)(FilterPopUp)