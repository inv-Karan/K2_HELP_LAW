import React from 'react'
import LAWDETAILS from '../../container/lawdetails'
import { useRouter } from 'next/router'

const LawDetailsPage = () => {
    const router = useRouter()
  const { _id } = router.query
  return <>
    <LAWDETAILS id={_id}/>
  </>
}

export default LawDetailsPage;