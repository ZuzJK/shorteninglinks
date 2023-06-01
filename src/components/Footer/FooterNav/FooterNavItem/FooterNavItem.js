
import React from 'react';
import styles from './FooterNavItem.module.scss';

const FooterNavItem = ({title, items}) =>
    <section className={styles.list}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.a}>       
            {
                items.map((item,i)=>
                <li 
                    className={styles.listItem} 
                    key={i}>
                    {item}
                </li>)
            }       
        </ul>
    </section>

export default FooterNavItem;