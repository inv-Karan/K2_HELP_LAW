import React from 'react';
import styles from '../styles/Home.module.css';

const Footer = () => {
	return <>

		<div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
			<div className={styles.grid}>
				<a
					className={styles.card}
				>
					<h3>Contact us</h3>
					<p>support@k2helplaw.com</p>
				</a>
			</div>
			<p>Powered by Oasis Infotech</p>
		</div>
	</>
};

export default Footer;