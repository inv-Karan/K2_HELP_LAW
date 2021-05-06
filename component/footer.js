import React from 'react'
import { useRouter } from 'next/router'
import { HyperLink } from '../component/index'

const Footer = () => {
  const router = useRouter()

  return <div className={'footerContainer'}>
    <div className={'backCircle'} onClick={() => router.push('/')}>
      <div className={'blueCircle'}>
        <img src="/images/card.svg" className={'imgStyle'}/>
      </div>
      
      <HyperLink customClass={'text'} href={'support@k2helplaw.com'} text={'support@k2helplaw.com'} />
    </div>
  </div>
}

export default Footer;