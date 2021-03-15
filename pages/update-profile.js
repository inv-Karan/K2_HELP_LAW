import React from 'react';
import UpdateProfile from '../container/updateProfile';
import styles from '../styles/Home.module.css';
import {Logo} from '../component/index';

const UpdateProfilePage = () => {
    return <div className={styles.container}>
    <Logo />
    <UpdateProfile />
    </div>
};

export default UpdateProfilePage;