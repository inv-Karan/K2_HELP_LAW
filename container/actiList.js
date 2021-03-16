import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { actList } from "../redux/action/machineryAction"
import Data from '../utility/actListData';

const actListSchema = Yup.object({
})

function actList() {

  const router = useRouter();
  const actList = (values) => {
    // dispatch(actList(values))
    // .then(res =>
    router.push('/add-verification')
    // )
  }

  return <div>
      {Data.map(a => <div style={{
          padding:10,
          borderWidth:2, 
          backgroundColor:'aliceblue',
          margin:10
          }}>
          {a.act}
          </div>)}
  </div>
};

export default actList;