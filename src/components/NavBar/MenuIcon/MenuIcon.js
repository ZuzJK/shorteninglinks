import React from 'react';
import style from './MenuIcon.module.scss';

const MenuIcon = ({clickFn,expanded}) => 
        <button 
                className={style.button}
                onClick={clickFn}
                aria-expanded={expanded}
                aria-label="Menu">
                <span 
                        className={style.menuOuter} 
                        aria-hidden="true">
                    <span className={style.menu}></span>
                </span>
        </button>

export default MenuIcon;