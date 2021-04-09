import React, { useState } from 'react'
import { withStyles, Grid, TextField } from '@material-ui/core'
import { SearchIcon } from '@material-ui/icons/Search'
import { PageFrame, CommonTabs } from '../component/index'
import { CardComponent } from '../component/index'
import { laws } from "../utility/constants"
// import Blog from './blog'
import { useRouter } from 'next/router'
import { Router } from 'next/router'

const JudgementDetails = () => {
  const [selectedTab, changeSelectedTab] = useState('hindi')
  const router = useRouter()

  return <>
    <PageFrame>
      <Grid item className={'createSelect formSquare'}>
        <h1>Judgement Details</h1>
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
                { label: 'Hindi', value: 'hindi' },
                { label: 'English', value: 'english' },
                { label: 'Gujarati', value: 'gujarati' },
                { label: 'Marathi', value: 'marathi' },
                // { label: 'Blogs', value: 'blog', component: <Blog /> }
              ]
            }
            changeSelectedTab={changeSelectedTab}
            selectedTab={selectedTab}
          />
        </div>
      </div>
      <Grid>
        <CardComponent 
          label={`22 Lorem Ipsum`}
          sub={`2015 lorem ipsum`}
        />
      </Grid>
      <Grid>
      <CardComponent 
          label={`Section`}
          sub={`lorem ipsum`}
        />
        <CardComponent 
          label={'Summary'}
          sub={'lorem ipsum'}
        />
      </Grid>
      <Grid>
        <CardComponent 
          label={`In Short`}
          sub={`lorem ipsum`}
        />
      </Grid>
    </PageFrame>
  </>
}

const STYLES = {
  card: {}
}

export default withStyles(STYLES)(JudgementDetails)