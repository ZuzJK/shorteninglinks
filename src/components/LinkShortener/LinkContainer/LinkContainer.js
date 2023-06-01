import React from 'react';
import Button from '../../Button/Button';
import styles from './LinkContainer.module.scss';

const LinkContainer = ({ link, shorterLink, clickFn, copied}) => {

    return (
        <div className={styles.container}>
            <span>
                {link}
            </span>
            <span className={styles.col}>
                <a className={styles.shorterLink}
                href={shorterLink}
                target="_blank"
                rel="noopener noreferrer">
                    {shorterLink}</a>
                    {
                        <Button 
                            clickFn={()=>clickFn(shorterLink)}>
                                { 
                                    copied?"Copied!":"Copy"
                                }       
                        </Button>  
                    }
                    {
                     //   error && <span className={styles.error}> We couldn't copy </span>
                    }
            </span>
        </div>
    );
};

export default LinkContainer;