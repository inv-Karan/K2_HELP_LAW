import React, {useState} from 'react'
import { withStyles } from '@material-ui/core'
import { Menu } from '../utility/constants'
import { useRouter } from 'next/router'
import LawFilterPopup from '../container/lawFilterPopUp'

const SideMenu = (props) => {
  const router = useRouter()
  let { classes, customClass } = props;
  let [showFilter, setToggleFilter] = useState(false)
  // const userData = useSelector((state) => state.user.userData || null);
  return <><nav className={`navigation ${customClass}`}>
    <ul>
      <li className={'title'}>Help</li>
      {Menu.map(({ text, icon, link }, index) => <li key={index}>
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
      </li>)}
      {/* <li>
        <ul className={'firstChild'}>
          <li onClick={() => {
            window.open(`mailto:support@myfarmeasy.com?body=Hi, Please find my query below. Email: ${userData.email} / Name: ${userData.name}&subject=Enquiry from Myfarmeasy`);
          }}>Contact Us</li>
        </ul>
      </li> */}
      <li>
        <div className={'firstLevel'} onClick={() => {setToggleFilter(!showFilter)}}>
          <img src={''} className={'leftIcon'} />
          <p>{'Filter'}</p><span />
        </div>
      </li>
    </ul>
  </nav >
  <LawFilterPopup open={showFilter} toggleFilter={() => setToggleFilter(!showFilter)}/>
  </>
}
const STYLES = {

}

export default withStyles(STYLES)(SideMenu)