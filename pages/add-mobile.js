import React from 'react';
import AddMobile from '../container/addMobile';
import styles from '../styles/Home.module.css';
import {Logo, Footer} from '../component/index';

const AddMobilePage = () => {
    return <div className={styles.container}>
    <Logo />
    <AddMobile />
    <Footer />
    </div>
};

export default AddMobilePage;