import React, { useState } from 'react'
import { withStyles, Grid } from '@material-ui/core'
import { PageFrame, CommonTabs } from '../component/index'
import { CardComponent } from '../component/index'
import { bookmarks } from "../utility/constants"
// import Blog from './blog'

const BookmarkList = () => {
  const [selectedTab, changeSelectedTab] = useState('ca')

  return <>
    <PageFrame>
      <Grid item className={'createSelect formSquare'}>
        <h1>BOOKMARKS</h1>
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
          {bookmarks.map(({ label, sub, pageLink, bookmark }) => <CardComponent
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

export default withStyles(STYLES)(BookmarkList)