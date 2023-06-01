import React from 'react';
import FooterNav from './FooterNav/FooterNav';
import SocialLinks from './SocialLinks/SocialLinks';
import styles from './Footer.module.scss';

const Footer = () => 
    <footer className={styles.footer}>
        <div className={styles.container}>
            <h2 className={styles.title}>Shortly</h2>
            <FooterNav />
            <SocialLinks />
        </div>
    </footer>

export default Footer;