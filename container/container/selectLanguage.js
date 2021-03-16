import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

function selectLanguage() {

  const router = useRouter();

  return <div className={styles.main}>
    <h1>Welcome to K2helplaw</h1>
    <p>Please select you language</p>
    <select className={styles.textbox}>
      <option value="ગુજરાતી">ગુજરાતી</option>
      <option value="हिन्दी">हिन्दी</option>
      <option value="English">English</option>
    </select>
    <button type="button" className={styles.card} onClick={() => {
      router.push("/add-mobile")
    }}>Next</button>
  </div>
};

export default selectLanguage;