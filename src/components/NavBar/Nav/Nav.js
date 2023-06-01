import React from 'react';
import NavList from './NavList/NavList';
import styles from './Nav.module.scss';

const Nav = ({data,label}) => 
        <nav 
            className={styles.nav} 
            aria-label={label}>
            {
                <NavList item={data}/>
            }
        </nav>

export default Nav;