import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavList.module.scss';

const NavList = ({item}) => {
    return (
        <ul className={styles.flex}>
        {
            item.map(({name,type})=>
                <NavItem 
                        name={name} 
                        type={type}
                        key={name} />)
        }
    </ul>
    );
};

export default NavList;