import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, icon, content }) => 
        <div className={styles.card}>
            <img className={styles.icon} src={icon} alt='' />
            <h3>{title}</h3>
            <p className={styles.content}>
                {content}
            </p>
        </div>

export default Card;