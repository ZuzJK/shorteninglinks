import React, { useState } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import styles from './Form.module.scss';

const Form = ({submitFn}) => {

const [value,setValue] = useState('');
const [error,setError] = useState(false);

const handleChange = e => {

    const value = e.target.value;
    setValue(value);
    value?setError(false):setError(true);
}
    return (
        <section className={styles.a}>
            <form className={styles.m} onSubmit={e=>submitFn(e,value,error)}>
                <Input 
                value={value}
                error={error}
                placeholder="Shorten a link here..."
                changeFn={handleChange}
                />
                <Button> Shorten it!</Button>
            </form> 
        </section>
    );
};

export default Form;