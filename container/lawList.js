import React, { useState } from 'react'
import { withStyles, Grid, TextField } from '@material-ui/core'
import { SearchIcon } from '@material-ui/icons/Search'
import { PageFrame, CommonTabs } from '../component/index'
import { CardComponent } from '../component/index'
import { laws } from "../utility/constants"
// import Blog from './blog'
import { useRouter } from 'next/router'
import { Router } from 'next/router'

const LawList = () => {
  const [selectedTab, changeSelectedTab] = useState('ca')
  const router = useRouter()

  return <>
    <PageFrame>
      <Grid item className={'createSelect formSquare'}>
        <h1>LAWS</h1>
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
      <div className={'LawListPage'}>
        <div className={'tab'}>
          <CommonTabs
            tabs={
              [
                { label: 'CA', value: 'ca' },
                { label: 'Advocate', value: 'advocate' },
                { label: 'Police', value: 'police' },
                { label: 'Public', value: 'public' },
                // { label: 'Blogs', value: 'blog', component: <Blog /> }
              ]
            }
            changeSelectedTab={changeSelectedTab}
            selectedTab={selectedTab}
          />
        </div>
      </div>
      <Grid container>
        {laws.map(({ label, sub, pageLink, bookmark }) => <CardComponent
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

export default withStyles(STYLES)(LawList)