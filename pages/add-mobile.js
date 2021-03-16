import React from 'react';
import AddMobile from '../container/addMobile';
import styles from '../styles/Home.module.css';
import { PublicLayout } from '../component/index';

const AddMobilePage = () => {
    return <div className={styles.container}>
    <PublicLayout>
        <AddMobile />
    </PublicLayout>
    </div>
};

export default AddMobilePage;