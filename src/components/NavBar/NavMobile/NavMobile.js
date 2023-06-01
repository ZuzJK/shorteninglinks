import React from 'react';
import Nav from '../Nav/Nav';
import {primary,secondary} from '../../../data/nav'
import styles from './NavMobile.module.scss';

const NavMobile = () => {
    return (
        <div className={styles.wrapper}>
            <Nav data={primary} label="Mobile-Primary-Menu" />
            <hr />
            <Nav data={secondary} label="Mobile-Secondary-Menu" />
        </div>
    );
};

export default NavMobile;