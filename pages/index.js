// import Head from 'next/head'
import styles from '../styles/Home.module.css';
import SELECTLANGUAGE from '../pages/select-language';

export default function Home() {
  return (
    <div className={styles.container}>
      <SELECTLANGUAGE />
    </div>
  )
}
