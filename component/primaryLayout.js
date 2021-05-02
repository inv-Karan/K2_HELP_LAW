import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core';
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { Header, Footer, SideMenu } from './index';

const Layout = (props) => {
  let { className } = props
  const [sidemunuIsOpen, toggleSidemenu] = useState(false)
  const router = useRouter()
  const apiSpinner = useSelector((state) => state.apiSpinner);

  useEffect(() => {
    // if (userData === null) {
    //   router.push('/')
    // }
  }, []);
  
  return <>
    <div className={className}>
      {apiSpinner > 0 && <div className={'loading-icon'}> <CircularProgress /></div>}
      <Header sidemunuIsOpen={sidemunuIsOpen} menuIconClick={() => toggleSidemenu(!sidemunuIsOpen)}/>
      <div style={{ display: 'flex', flexDirection: 'row', 
      minHeight: 'calc(100vh - 70px)'}}>
        <SideMenu customClass={sidemunuIsOpen ? 'mobNav' : ''} />
        {props.children}
      </div>
      <Footer sidemunuIsOpen={sidemunuIsOpen} menuIconClick={() => toggleSidemenu(!sidemunuIsOpen)}/>
    </div>
  </>
}
const STYLES = {
  container: {
    minHeight: '100vh'
  }
}
export default withStyles(STYLES)(Layout)
