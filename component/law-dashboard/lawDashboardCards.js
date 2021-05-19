import React  from 'react'
import { Grid } from '@material-ui/core'
import { laws, judgements, bookmarks } from "../../utility/constants"
import { CardComponent, Button } from '../index'


const lawDashboardCards = (props) => {
  const { lawList, judgementList, router } = props
  const cardColors = ['#4E89AE', '#ED6663', '#FFA372']

  return <>
    <Grid>
          <div className={'dashboardLabels'}>
            <h1>LAWS</h1>
              <Button text={`View All`} onClick={() => {
                router.push('/law-list')
              }}></Button>
          </div>
          <Grid container>
          {lawList.map(({ lawTitle, lawDescription, pageLink, bookmark }) => <CardComponent
            sub={lawDescription}
            onPageChange={() => router.push()}
            label={lawTitle}
            bookMark={bookmark}
          />)}
          </Grid>
    </Grid>

    <Grid>
          <Grid className={'dashboardLabels'}>
            <h1>JUDGEMENTS</h1>

            <Button text={`View All`} onClick={() => {
                router.push('/judgement-list')
              }}></Button>
          </Grid>
          <Grid container>
          {judgementList.map(({ judgementTitle, judgementInShort, pageLink, bookmark }) => <CardComponent
            sub={judgementInShort}
            onPageChange={() => router.push(pageLink)}
            label={judgementTitle}
            bookMark={bookmark}
          />)}
          </Grid>
    </Grid>

    <Grid>
          <Grid className={'dashboardLabels'}>
            <h1>BOOKMARKS</h1>

            <Button text={`View All`} onClick={() => {
                router.push('/bookmark-list')
              }}></Button>
          </Grid>
          <Grid container>
          {bookmarks.map(({ label, sub, pageLink, bookmark }) => <CardComponent
            sub={sub}
            onPageChange={() => router.push(pageLink)}
            label={label}
            bookMark={bookmark}
          />)}
          </Grid>
    </Grid>
  </>
}

export default lawDashboardCards