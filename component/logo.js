import React from 'react';
import styles from '../styles/Home.module.css';

const Logo = () => {
  return <>
    <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
      <img src="/images/image.png" style={{ height: '80px' }} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>HELPLAW</a>
        </h1>
      </main>
    </div>
  </>
};

export default Logo;