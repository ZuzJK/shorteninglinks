import React from 'react';
import Card from './Card/Card';
import { cards } from '../../data/cards';
import styles from './Cards.module.scss'

const Cards = () => 
        <section className={styles.container}>
            <article className={styles.statistics}>
                <h3 className={styles.title}>Advanced Statistics</h3>
                <p className={styles.content}>
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
            </article>
            <div className={styles.wrapper}>
                {
                    cards.map((props,i)=><Card {...props} key={i} />)
                }
            </div>
        </section>

export default Cards;
