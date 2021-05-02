import React, { useState } from 'react'
import { withStyles, Grid, TextField } from '@material-ui/core'
import { SearchIcon } from '@material-ui/icons/Search'
import { PageFrame, ListTabs } from '../component/index'
import { CardComponent } from '../component/index'
import { judgements } from "../utility/constants"
// import Blog from './blog'

const JudgementList = () => {
  const [selectedTab, changeSelectedTab] = useState('sections')

  return <>
    <PageFrame>
      <Grid item className={'createSelect formSquare'}>
        <h1>JUDGEMENTS</h1>
      </Grid>
      <Grid container>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* <SearchIcon style {{position: 'absolute', left: 0, top: 15, width: 20, height: 20}} /> */}
          <TextField
            style={{ textIndent: 30 }}
            placeholder={'Search'}
          />
        </div>
      </Grid>
      <div className={'JudgementListPage'}>
        <div className={'tab'}>
          <ListTabs
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
          {judgements.map(({ label, sub, pageLink, bookmark }) => <CardComponent
            sub={sub}
            onPageChange={() => router.push(pageLink)}
            label={label}
            bookMark={bookmark}
          />)}
      </Grid>
    </PageFrame>
  </>
}

const STYLES = {
  card: {}
}

export default withStyles(STYLES)(JudgementList)