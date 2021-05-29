import React, { useState, useEffect } from 'react'
import { withStyles, Grid } from '@material-ui/core'
import { SearchIcon } from '@material-ui/icons/Search'
import { PageFrame, DetailsTabs, Collapsable, PrimaryLayout } from '../component/index'
import { Card } from '../component/index'
import { useSelector, useDispatch } from 'react-redux'
import { findLawById } from '../redux/action/lawAction'
import ReactHtmlParser from 'html-react-parser';
import { useRouter } from 'next/router'

const LawDetails = (props) => {
  const preferedlanguage = useSelector((state) => state.user.preferedlanguage) || ""
  const router = useRouter()
  const [selectedTab, changeSelectedTab] = useState(preferedlanguage)
  const dispatch = useDispatch()
  const { classes, id } = props
  const selectedLawDetails = useSelector((state) => state.laws.selectedLawDetails) || {}
  debugger
  useEffect(() => {
    debugger
    dispatch(findLawById(id))
  }, [router]);

  return <>
  <PrimaryLayout>
    <PageFrame>
      <Grid item>
        <h1 className={classes.labelStyle}>Act Details</h1>
      </Grid>
          <DetailsTabs
            tabs={
              [
                { label: 'Hindi', value: 'hi' },
                { label: 'English', value: 'en' },
                { label: 'Gujarati', value: 'gj' },
                { label: 'Marathi', value: 'mh' },
              ]
            }
            changeSelectedTab={changeSelectedTab}
            selectedTab={selectedTab}
          />
      {selectedLawDetails[selectedTab] && <Card>
        <div className={classes.borderCardChildren}>
          <p className={classes.labelStyle}>{selectedLawDetails[selectedTab].lawTitle}</p>
          <p className={classes.subStyle}>{ReactHtmlParser(selectedLawDetails[selectedTab].lawSummary)}</p>
          {/* <img src={bookmark}/> */}
        </div>
      </Card>}
      {/* <Card>
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
      </Card> */}
      <Grid>
        <Collapsable />
      </Grid>
    </PageFrame>
    </PrimaryLayout>
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