import React, { useState } from 'react'
import { withStyles, Grid, TextField } from '@material-ui/core'
import { SearchIcon } from '@material-ui/icons/Search'
import { PageFrame, DetailsTabs, Collapsable } from '../component/index'
import { Card, CardComponent } from '../component/index'
// import Blog from './blog'
import { useRouter } from 'next/router'

const LawDetails = (props) => {
  const [selectedTab, changeSelectedTab] = useState('hindi')
  const router = useRouter()
  const { classes, law } = props
  const { label, description, section, summary, inShort, bookmark } = law || {}
  return <>
    <PageFrame>
      <Grid item>
        <h1 className={classes.labelStyle}>Laws Details</h1>
      </Grid>
          <DetailsTabs
            tabs={
              [
                { label: 'Hindi', value: 'hindi' },
                { label: 'English', value: 'english' },
                { label: 'Gujarati', value: 'gujarati' },
                { label: 'Marathi', value: 'marathi' },
              ]
            }
            changeSelectedTab={changeSelectedTab}
            selectedTab={selectedTab}
          />
      <Card>
        <div className={classes.borderCardChildren}>
          <p className={classes.labelStyle}>{label}</p>
          <p className={classes.subStyle}>{description}</p>
          <img src={bookmark}/>
        </div>
      </Card>
      <Card>
        <div className={classes.borderCardChildren}>
          <p className={classes.labelStyle}>{'Section'}</p>
          <p className={classes.subStyle}>{section}</p>
          <p className={classes.labelStyle}>{'Summary'}</p>
          <p className={classes.subStyle}>{summary}</p>
        </div>
      </Card>
      <Card>
        <div className={classes.borderCardChildren}>
          <p className={classes.labelStyle}>{'In Short'}</p>
          <p className={classes.subStyle}>{inShort}</p>
        </div>
      </Card>
      <Grid>
        <Collapsable />
      </Grid>
    </PageFrame>
  </>
}

const STYLES = {
  borderCardChildren: { backgroundColor: 'white', padding: 10 },
  labelStyle: {
    fontfamily: 'Public Sans',
    fontstyle: 'normal',
    fontweight: 600,
    fontsize: '18px',
    color: '#227df2',
  },
  subStyle: {
    fontfamily: 'Public Sans',
    fontstyle: 'normal',
    fontweight: 'normal',
    fontsize: '13px',
    color: '#787878',
  },
}

export default withStyles(STYLES)(LawDetails)