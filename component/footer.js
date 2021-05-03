import React from 'react'
import { withStyles } from '@material-ui/core'
import Color from '../styles/colors'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
// import urlMapper from '../utiliy/api/urlMapper'
import { HyperLink, Button } from '../component/index'


const ProfileComponent = (props) => <div className={'profileBlk'}>
  <img src={props.profile ? `${urlMapper.PROFILE_IMAGES}${props.profile}` : `/images/avatar.jpg`} alt="" className={'profileImg'} />
  <div className={'profileBlkInn'}>
    <div className={'name'}>{props.name}</div>
    <div className={'discription'}>{props.email}</div>
  </div>
</div>

const Footer = (props) => {
  let { menuIconClick, sidemunuIsOpen, classes } = props
  const router = useRouter()

  return <div className={'footerContainer'} onClick={() => router.push('/')}>
    <HyperLink href={'support@k2helplaw.com'} text={'support@k2helplaw.com'}/>
  </div>
}
const STYLES = {
  label: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 200,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: Color.labels,
    textAlign: 'right'
  }
}
export default withStyles(STYLES)(Footer)