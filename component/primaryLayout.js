import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { Logo, Footer } from './index';

const Layout = (props) => {
  let { className } = props
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
      <Logo />
      {props.children}
      <Footer/>
    </div>
  </>
}
const STYLES = {
  container: {
    minHeight: '100vh'
  }
}
export default withStyles(STYLES)(Layout)
