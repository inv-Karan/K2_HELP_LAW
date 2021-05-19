import React from 'react'
import { withStyles } from '@material-ui/core'
import { Filter } from '../../utility/constants'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { Checkbox, Radio } from '../component/index'

const FilterPopUp = ({showFarmPopup, toggleFarmPopup}) => {
  const router = useRouter()
  let { classes, customClass } = props;
  // const userData = useSelector((state) => state.user.userData || null);
  return <nav className={`leftMenu ${customClass}`}>
    <ul>
      <li className={'title'}>Filter</li>
      {Filter.map(({ text, subFilter, link }, index) => <li key={index}>
        <div className={'firstLevel'} onClick={() => {
          if (link && link !== '') {
            router.push(link)
          }
        }}
        >
          <img src={icon} className={'leftIcon'} />
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
      {/* <li>
        <ul className={'firstChild'}>
          <li onClick={() => {
            window.open(`mailto:support@myfarmeasy.com?body=Hi, Please find my query below. Email: ${userData.email} / Name: ${userData.name}&subject=Enquiry from Myfarmeasy`);
          }}>Contact Us</li>
        </ul>
      </li> */}
    </ul>
  </nav >
}
const STYLES = {

}

export default withStyles(STYLES)(FilterPopUp)