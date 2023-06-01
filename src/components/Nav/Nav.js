import React from 'react';
import NavItem from './NavItem/NavItem';
import { Data } from '../../../data/';
import styles from './Nav.module.scss';

const Nav = () =>

    <div className={styles.wrapper}>        
        {
            Data.map(
                ({title,items},i)=>
                    <NavItem title={title} items={items} id={i} />
                )
        }
     </div>
    
export default Nav;