import React, { useState } from 'react'
import { withStyles } from '@material-ui/core'
import Color from '../styles/colors'
import { PrimaryLayout, PageFrame } from '../component/index'
import { useRouter } from 'next/router'
import LAWDASHBOARDHEADER from '../component/law-dashboard/lawDashboardHeader'
import LAWDASHBOARDCARDS from '../component/law-dashboard/lawDashboardCards'
import LAWFILTERPOPUP from '../component/law-dashboard/lawFilterPopUp'
import { useSelector } from "react-redux"


const lawDashboard = () => {
  const router = useRouter()
  const laws = useSelector((state) => state.laws.laws || [])
  const judgements = useSelector((state) => state.judgements.judgements || [])
  const [showFilterPopup, toggleFilterPopup] = useState(false)

  return (
    <PrimaryLayout>
      <PageFrame>
        <div className={'dashboardPage'}>
        <LAWDASHBOARDHEADER />
        <LAWDASHBOARDCARDS lawList = {laws} judgementList = {judgements} router={router} />
        <LAWFILTERPOPUP toggleFilterPopup = {() => toggleFilterPopup(!showFilterPopup)}/>
        </div>
      </PageFrame>
    </PrimaryLayout>
  )
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
  amountStyle: {
    padding: '10px 15px',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '28px'
  },
  linkStyle: {
    padding: '10px 15px',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '16px',
    color: Color.purple
  },
  cardWelcome: {
    width: '66%',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10
  },
  stepStyle: {
    height: '56px',
    borderRadius: '8px',
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
    margin: '10px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  cardAdded: {
    width: '33%',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10
  },
  clickableCard: {
    cursor: 'pointer',
    "&:hover": {
      background: "rgba(0, 112, 243, 1)"
    },
  }
}

export default withStyles(STYLES)(lawDashboard)