import React from 'react';
import AddVerification from '../container/addVerification';
import styles from '../styles/Home.module.css';
import {Logo, Footer} from '../component/index';

const AddVerificationPage = () => {
    return <div className={styles.container}>
    <Logo />
    <AddVerification />
    <Footer />
    </div>
};

export default AddVerificationPage;