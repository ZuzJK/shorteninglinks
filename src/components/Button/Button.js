import React from 'react';
import styles from './Button.module.scss';

const Button = ({children,rounded,clickFn}) => 
        <button 
                className = {`${rounded?styles.buttonRounded:styles.button}
                ${children ==='Copied!'&&styles.copied}`}
                onClick={clickFn}>
            {children}           
        </button>

export default Button;
