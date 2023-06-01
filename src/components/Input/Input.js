import React from 'react';
import styles from './Input.module.scss';

const Input = ({placeholder, error, value, changeFn}) => 
        <div>
                <input 
                        className={`${error?styles.inputError:styles.input}`} 
                        placeholder={placeholder}
                        value={value}
                        onChange={changeFn}/>
                        {
                                error && <span className={styles.error}>Please add a link</span>
                        }
        </div>

export default Input;