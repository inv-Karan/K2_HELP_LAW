import React from 'react'
import { withStyles } from '@material-ui/core'
import Color from '../styles/colors'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
// import urlMapper from '../utiliy/api/urlMapper';
// import { deleteUser, resetPassword } from "../redux/action/userAction"

const ProfileComponent = (props) => <div className={'profileBlk'}>
  <img src={props.profile ? `${urlMapper.PROFILE_IMAGES}${props.profile}` : `/images/image.png`} alt="" className={'profileImg'} />
  <div className={'profileBlkInn'}>
    <div className={'name'}>{props.name || 'John'}</div>
    <div className={'discription'}>{props.email || 'john@gmail.com'}</div>
  </div>
</div>

const Header = (props) => {
  let { menuIconClick, sidemunuIsOpen } = props
  const router = useRouter()
  const dispatch = useDispatch();
  // const { name, email, profile } = useSelector((state) => state.user.userData || {});

  return <header>
    <div className={'logo'}>
      <img src={'/images/image.png'} alt="" style={{ height: '70px' }} />
      <h1 className={'logotext'}>HELPLAW</h1>
    </div>
    <div className={'rightCol'}>
      <div className="dropdown">
        <span className="dropbtn">
          <img src="/images/cog-wheel-silhouette.png" style={{height: 20,display: "inline-block",width: 20,backgroundColor: "white"}} />
          <img src="/images/chevron_down_font_awesome.png" style={{height: 15,width: 15,marginLeft: 5,display: "inline-block",top: -10,backgroundColor: "white"}} />
        </span>
        <div className="dropdown-content">
          <span onClick={() => {
            window.open(`mailto:admin@myfarmeasy.com?body=Hi MyFarmEasy Admin, Email: ${email} / Name: ${name}&subject=Important! Admin MyFarmEasy Contact`);
          }} style={{cursor: "pointer"}} >Contact Us</span>
          <span onClick={() => {
            dispatch(deleteUser())
            .then(() => {
              router.push('/')
            })
          }} style={{cursor: "pointer"}} >Logout</span>
        </div>
      </div>
      <div onClick={() => router.push('user-profile')} className={'profileDropDown'}>
        <div className={'profileInn'}>
          {/* <img src={'/images/notification.svg'} /> */}
          {/* <ProfileComponent profile={profile} name={name} email={email} /> */}
          <button className={`mobNav ${sidemunuIsOpen ? 'mobNavClose' : ""}`} onClick={() => menuIconClick()}></button>
        </div>
      </div>
    </div>
  </header>
}
const STYLES = {
  label: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: Color.labels,
    textAlign: 'center'
  }
}
export default withStyles(STYLES)(Header)
