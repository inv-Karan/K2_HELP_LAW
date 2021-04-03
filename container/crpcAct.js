import React, { useState } from 'react'
import { withStyles, Grid, TextField } from '@material-ui/core'
import { PageFrame, CommonTabs } from '../component/index'
import { SearchIcon } from '@material-ui/icons/Search'
import { CardComponent } from '../component/index'
import { bookmarks } from "../utility/constants"
// import Blog from './blog'

const CRPCAct = () => {
  const [selectedTab, changeSelectedTab] = useState('sections')

  return <>
    <PageFrame>
      <Grid item className={'createSelect formSquare'}>
        <h1>CRPC ACT</h1>
      </Grid>
      <div className={'CRPCActPage'}>
      <div className={'tab'}>
          <CommonTabs
            tabs={
              [
                { label: 'Sections', value: 'sections' },
                { label: 'Chapter', value: 'chapter' },
                { label: 'Judgements', value: 'judgements' },
                { label: 'Rules', value: 'rules' },
                { label: 'Details', value: 'details' }
                // { label: 'Blogs', value: 'blog', component: <Blog /> }
              ]
            }
            changeSelectedTab={changeSelectedTab}
            selectedTab={selectedTab}
          />
        </div>
      </div>
      <Grid container>
        <CardComponent 
          label={`22`}
          sub={`2015`}
        />
      </Grid>
      {/* <Grid container>
          {bookmarks.map(({ label, sub, pageLink, bookmark }) => <CardComponent
            sub={sub}
            onPageChange={() => router.push(pageLink)}
            label={label}
            bookMark={bookmark}
          />)}
      </Grid> */}
    </PageFrame>
  </>
}

const STYLES = {
  card: {}
}

export default withStyles(STYLES)(CRPCAct)