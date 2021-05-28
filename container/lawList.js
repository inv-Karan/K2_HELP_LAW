import React, { useEffect } from 'react'
import { withStyles, Grid, TextField } from '@material-ui/core'
import { SearchIcon } from '@material-ui/icons/Search'
import { PageFrame } from '../component/index'
import { CardComponent } from '../component/index'
import { useRouter } from 'next/router'
import { getLaws } from '../redux/action/lawAction'
import ReactHtmlParser from 'html-react-parser'
import { useSelector, useDispatch } from 'react-redux'

const LawList = () => {
  // const [selectedTab, changeSelectedTab] = useState('ca')
  const router = useRouter()
  const laws = useSelector((state) => state.laws.laws) || []
  const preferedlanguage = useSelector((state) => state.user.preferedlanguage) || ""
  const formattedLaws = laws.map(l => {
    const lawdata = l[preferedlanguage]
    return {
      ...lawdata,
      _id: l._id
    }
  }) 
  const dispatch = useDispatch()
   
  useEffect(() => {
    debugger
    dispatch(getLaws())
  }, []);

  return <>
    <PageFrame>
      <Grid item className={'createSelect formSquare'}>
        <h1>ACTS</h1>
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
        {/* <div className={'tab'}>
          <ListTabs
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
        </div> */}
      </div>
      <Grid container>
          {formattedLaws.map(({ lawTitle, lawSummary, pageLink, bookmark, _id }) => <CardComponent
            sub={ReactHtmlParser(lawSummary)}
            onPageChange={() => router.push(`law-detail/${_id}`)}
            label={lawTitle}
            // bookMark={bookmark}
          />)}
          </Grid>
    </PageFrame>
  </>
}

const STYLES = {
  card: {}
}

export default withStyles(STYLES)(LawList)