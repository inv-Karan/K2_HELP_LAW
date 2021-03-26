import React, { useState } from 'react'
import { withStyles } from '@material-ui/core'
import Color from '../styles/colors'
import { PrimaryLayout, PageFrame } from '../component/index'
import { useSelector } from "react-redux"
import { useRouter } from 'next/router'
import DashboardHeader from '../component/dashboard/dashboardHeader'
import DashboardCards from '../component/dashboard/dashboardCards'
import DashboardFarmPopUp from '../component/dashboard/dashboardFarmPopup'


const mainDashBoard = () => {
  const [showFarmPopup, toggleFarmPopup] = useState(false)
  const { designation_id } = useSelector((state) => state.user.userData || {})
  const router = useRouter()

  return (
    <PrimaryLayout>
      <PageFrame>
        <DashboardHeader toggleFarmPopup = {() => toggleFarmPopup(!showFarmPopup)}/>
        <DashboardCards designationId = {designation_id} router={router}/>
        <DashboardFarmPopUp showFarmPopup = {showFarmPopup} toggleFarmPopup = {() => toggleFarmPopup(!showFarmPopup)}/>
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
      background: "rgba(46,139,87,1)"
    },
  }
}

export default withStyles(STYLES)(mainDashBoard)