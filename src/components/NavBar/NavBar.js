import React, {useState} from 'react';
import Nav from './Nav/Nav';
import MenuIcon from './MenuIcon/MenuIcon';
import {primary, secondary} from '../../data/nav';
import styles from './NavBar.module.scss';

const NavBar = () => {

    const [ openMenu, setOpenMenu ] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleClick = () => setOpenMenu(!openMenu);

    window.onresize = () => setWindowWidth(window.innerWidth);
    return (
        <>
            <header className={`${styles.flex} ${styles.nav}`}>
                <h2 className={styles.title}>Shortly</h2>
                <MenuIcon clickFn={handleClick} 
                expanded={openMenu} 
                aria-controls="navigation"/>
                <div className={`${styles.wrapper}
                ${
                    openMenu && windowWidth<768 && styles.mobile
                }
                `}
                id="navigation">
                    <Nav data={primary} label="Primary-Menu" />
                    <hr className={styles.line} />
                    <Nav data={secondary} label="Secondary-Menu" />
                </div>
            </header>        
        </>
    );
};

export default NavBar;