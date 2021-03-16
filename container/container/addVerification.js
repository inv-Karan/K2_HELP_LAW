import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

function addVerification() {

  const router = useRouter();

  return <div className={styles.main}>
    <input type='text' className={styles.textbox} placeholder='Verification Code' />
    <button className={styles.card} onClick={() => {
      router.push("/update-profile")
    }}>Proceed</button>
  </div>
};

export default addVerification;