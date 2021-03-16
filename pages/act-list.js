import React from 'react';
import ActList from '../container/actiList';
import styles from '../styles/Home.module.css';
import { PrimaryLayout } from '../component/index';

const ActListPage = () => {
    return <div className={styles.container}>
    <PrimaryLayout>
        <ActList />
    </PrimaryLayout>
    </div>
};

export default ActListPage;