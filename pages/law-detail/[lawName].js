import React from 'react'
import LAWDETAILS from '../../container/lawdetails'
import { useRouter } from 'next/router'
import {laws} from "../../utility/constants"

const LawDetailsPage = () => {
    const router = useRouter()
  const { lawName } = router.query
  let neededLaw = laws.find(l => l.lawName === lawName)
  console.log(neededLaw)
  return <>
    <LAWDETAILS law={neededLaw}/>
  </>
}

export default LawDetailsPage;