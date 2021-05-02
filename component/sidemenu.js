import React from 'react'
import { withStyles } from '@material-ui/core'
import { Menu, HelpMenu, Permission } from '../utility/constants'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";

const SideMenu = (props) => {
  const router = useRouter()
  let { classes, customClass } = props;
  // const userData = useSelector((state) => state.user.userData || null);
  return <nav className={`leftMenu ${customClass}`}>
    <ul>
      <li className={'title'}>Filter</li>
      {Menu.map(({ text, subMenu, icon, link }, index) => <li key={index}>
        <div className={'firstLevel'} onClick={() => {
          if (link && link !== '') {
            router.push(link)
          }
        }}>
          <img src={icon} className={'leftIcon'} />
          <p>{text}</p><span/>
          {/* <img src={'/images/icons-expand.svg'} className={'expandIcon'} /> */}
        </div>
        {subMenu && <ul className={'firstChild'}>
          {subMenu && subMenu.map(({ text: subtext, link: sublink }, i) => {
            // if (userData && userData.designation_id) {
              // if (Permission[parseInt(userData.designation_id) - 1].permission.includes(sublink)) {
                return <li key={i} onClick={() => {
                  if (sublink && sublink !== '') {
                    router.push(sublink)
                  }
                }}>
                  {subtext}
                </li>;
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

export default withStyles(STYLES)(SideMenu)