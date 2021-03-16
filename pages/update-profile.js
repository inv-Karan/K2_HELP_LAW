import React from 'react';
import UpdateProfile from '../container/updateProfile';
import styles from '../styles/Home.module.css';
import { PrimaryLayout } from '../component/index';

const UpdateProfilePage = () => {
    return <div className={styles.container}>
    <PrimaryLayout />
    <UpdateProfile />
    </div>
};

export default UpdateProfilePage;