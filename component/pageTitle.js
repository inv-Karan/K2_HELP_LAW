import React, { useState } from 'react'
import { withStyles, Grid, Dialog, TextareaAutosize, Table, TableHead, TableBody } from '@material-ui/core'
import Color from '../styles/colors'
import { PrimaryLayout, PageFrame, Select, TextBox, Button, HyperLink, Radio } from '../component/index'


const PageTitle = (props) => {
  const { title, actionButton, onClickButton, otherUI } = props
  return <Grid className={'pageTitle'} >
    <h1>{title}</h1>
    {otherUI}
    {actionButton && actionButton.map((b, i) => <React.Fragment key={i}>
      <Button text={b.title} onClick={() => onClickButton(b.title)} />
    </React.Fragment>
    )}
  </Grid >
}

export default PageTitle;