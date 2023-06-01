import React from 'react';
import { socialLinks } from '../../../data/socialLinks';
import styles from './SocialLinks.module.scss';

const SocialLinks = () => {
    return (
        <div className={styles.links}>
            {
                socialLinks.map(({icon,link,label})=>
                <a href={link} 
                    className={styles.link} 
                    aria-label={label}
                    key={label}>
                    <img src={icon} alt=""/>
                </a>)
            }
        </div>
    );
};

export default SocialLinks;















