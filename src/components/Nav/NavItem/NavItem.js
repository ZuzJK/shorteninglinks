import React from 'react';
import styles from './NavItem.module.scss';



const NavItem = ({title, items}) =>
<section className={styles.list}>
    {
        title?<h3 className={styles.title}>{title}</h3>:<img src='' alt="Shortly" />
    }
        
        <ul className={styles.a}>       
            {
                items.map((item,i)=><li className={styles.listItem} key={i}>{item}</li>)
            }       
        </ul>
    </section>




export default NavItem;