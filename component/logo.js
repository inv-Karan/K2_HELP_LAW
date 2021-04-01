import React from 'react';
import styles from '../styles/Home.module.css';

const Logo = () => {
  return <>
    <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>
      <img src="/images/image.png" style={{ height: '80px' }} />
    </div>
    <div style={{ textAlign: 'center' }}>
      {/* <main className={styles.main}> */}
        <h1 className={styles.title}>
          <a>HELPLAW</a>
        </h1>
      {/* </main> */}
    </div>
  </>
};

export default Logo;