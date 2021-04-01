// import Head from 'next/head'
import styles from '../styles/Home.module.css';
import LAWDASHBOARD from '../pages/law-dashboard';

export default function Home() {
  return (
    <div className={styles.container}>
      <LAWDASHBOARD />
    </div>
  )
}
