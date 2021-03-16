import React from 'react';
import AddVerification from '../container/addVerification';
import styles from '../styles/Home.module.css';
import { PublicLayout } from '../component/index';

const AddVerificationPage = () => {
    return <div className={styles.container}>
    <PublicLayout>
    <AddVerification />
    </PublicLayout>
    </div>
};

export default AddVerificationPage;