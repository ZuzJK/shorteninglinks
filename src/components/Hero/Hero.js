import React from 'react';
import Button from '../Button/Button';
import styles from './Hero.module.scss';

const Hero = () => 
        <section className={styles.container}>
            <div className={styles.container2}>
                <article className={styles.article}>
                    <h2 className={styles.lead}>More than just shorter links</h2>
                    <p className={styles.content}>
                        Build your Brand's recognition and get detailed insights <br />
                        on how your links are performing.
                    </p>
                    <Button rounded>Get Started</Button>
                </article>
            </div>
        </section>
        
export default Hero;