import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import Link from 'next/link'
import Color from '../styles/colors'
const HyperLink = (props) => {
  let { text, classes, href, styles, customClass, onClick } = props
  return <>
    {onClick &&
      <span
        className={customClass || classes.label} style={styles}
        onClick={() => { onClick() }}>
        {text}
      </span> ||
      <Link href={href || "/"}>
        <a className={customClass || classes.label} style={styles}>{text}</a>
      </Link>}
  </>
}
const STYLES = {
}
export default withStyles(STYLES)(HyperLink)
