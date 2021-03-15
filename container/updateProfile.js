import React from 'react';
import styles from '../styles/Home.module.css';

function updateProfile() {

  return <div className={styles.main}>
    <p>Update Profile</p>
    <input type='text' className={styles.textbox} placeholder='Name' />
    <input type='tel' className={styles.textbox} placeholder='Mobile' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
    <select type='text' className={styles.textbox} placeholder='Place'>
    <option value="Gujarat">Gujarat[GJ]</option>
    </select>
    <select type='text' className={styles.textbox} placeholder='Type'>
    <option value="Advocate">Advocate</option>
    <option value="Police">Police</option>
    <option value="Public">Public</option>
    <option value="Student">Student</option>
    </select>
    <button type="button" className={styles.card} onClick={() => {
    }}>Update</button>
  </div>
};

export default updateProfile;