import React from 'react';
import FooterNavItem from './FooterNavItem/FooterNavItem';
import { footerData } from '../../../data/footer';
import styles from './FooterNav.module.scss';

const FooterNav = () =>
    <div className={styles.wrapper}>        
        {
            footerData.map(
                ({title,items},i)=>
                    <FooterNavItem title={title} 
                    items={items} 
                    id={i}
                    key={title} />
                )
        }
     </div>
    
export default FooterNav;