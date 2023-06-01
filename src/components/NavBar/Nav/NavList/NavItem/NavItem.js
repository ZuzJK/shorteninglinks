import React from 'react';
import Button from '../../../../Button/Button';
import styles from './NavItem.module.scss';

const NavItem = ({name,type = "none"}) => {
    return (
        <li className={`${styles.navItem} ${type==='logo'&&styles.logo}`}>
            {
                type === "button" ? <Button rounded>{name}</Button> : name
            }
        </li>
    );
};

export default NavItem;