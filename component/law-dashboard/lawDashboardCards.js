import React , { useState } from 'react'
import { withStyles, Grid } from '@material-ui/core'
import { laws, judgements, bookmarks } from "../../utility/constants"
import { CardComponent, Button } from '../index'
// import { isFarmer } from '../../utiliy/commonFunctions'
import { useRouter } from 'next/router'


const DashboardCards = () => {
  // [bookMark, togglebookMark] = useState(false)
  const router = useRouter()


  return <>
    <Grid>
      <Grid item>
        <Grid>
          <Grid item className={'formSquare'}>
            <h1>LAWS</h1>
            
              <Button text={`View All`} onClick={() => {
                router.push('/law-list')
              }}></Button>
            
            {/* {
              <Button text={'view All'} onClick={() => {
                sendHttpCall(dispatch, 'get', ``)
                  .then(res => {
                  }).catch(err => {
                  })
              }} />
            } */}
          </Grid>
          <Grid container>
          {laws.map(({ label, sub, pageLink, bookmark }) => <CardComponent
            sub={sub}
            onPageChange={() => router.push(pageLink)}
            label={label}
            bookMark={bookmark}
          />)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Grid>
      <Grid item>
        <Grid>
          <Grid item className={'formSquare'}>
            <h1>JUDGEMENTS</h1>

            <Button text={`View All`} onClick={() => {
                router.push('/judgement-list')
              }}></Button>

            {/* {
              <Button text={'view All'} onClick={() => {
                sendHttpCall(dispatch, 'get', ``)
                  .then(res => {
                  }).catch(err => {
                  })
              }} />
            } */}
          </Grid>
          <Grid container>
          {judgements.map(({ label, sub, pageLink, bookmark }) => <CardComponent
            sub={sub}
            onPageChange={() => router.push(pageLink)}
            label={label}
            bookMark={bookmark}
          />)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Grid>
      <Grid item>
        <Grid>
          <Grid item className={'formSquare'}>
            <h1>BOOKMARKS</h1>

            <Button text={`View All`} onClick={() => {
                router.push('/bookmark-list')
              }}></Button>

            {/* {
              <Button text={'view All'} onClick={() => {
                sendHttpCall(dispatch, 'get', ``)
                  .then(res => {
                  }).catch(err => {
                  })
              }} />
            } */}
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
      </Grid>
    </Grid>
  </>
}

const STYLES = {
  card: {
    width: "100%",
    height: '139px',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10
  },
  labelStyle: {
    padding: '10px 15px',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '16px'
  },
  clickableCard: {
    cursor: 'pointer',
    "&:hover": {
      background: "rgba(0, 112, 243, 1)"
    },
  }
}

export default withStyles(STYLES)(DashboardCards)