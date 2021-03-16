// import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {Logo, Footer} from '../component/index';
import SelectLanguagePage from '../pages/select-language';

export default function Home() {
  return (
    <div className={styles.container}>
      <SelectLanguagePage />
    </div>
  )
}
