import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core';
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { Footer, Logo } from './index';

const PublicLayout = (props) => {
  const router = useRouter()
  const apiSpinner = useSelector((state) => state.apiSpinner);

  useEffect(() => {
    // router.push('/dashboard')
  });

  return <>
    {apiSpinner > 0 && <div className={'loading-icon'}> <CircularProgress /></div>}
    {props.children}
    <Footer />
  </>
}
const STYLES = {
  container: {
    minHeight: '100vh'
  }
}
export default withStyles(STYLES)(PublicLayout)
