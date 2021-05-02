import React from 'react';
import UpdateProfile from '../container/updateProfile';
import styles from '../styles/Home.module.css';
import { PublicLayout } from '../component/index';

const UpdateProfilePage = () => {
    return <PublicLayout>
    <UpdateProfile />
    </PublicLayout>
};

export default UpdateProfilePage;