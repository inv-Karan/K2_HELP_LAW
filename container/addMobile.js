import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

function addMobile() {

  const router = useRouter();  

  return <div className={styles.main}>
    <input type='text' className={styles.textbox} placeholder='Mobile Number' />
    <button className={styles.card} onClick={() => {
      router.push("/add-verification")
    }}>Proceed</button>
  </div>
};

export default addMobile;