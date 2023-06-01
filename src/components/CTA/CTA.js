import React from 'react';
import Button from '../Button/Button';
import styles from './CTA.module.scss';

const CTA = () => 
        <div className={styles.container}>
            <h2 className={styles.title}>Boost your links today</h2>
            {
              <Button rounded>Get Started</Button>
            }
        </div>

export default CTA;