import React, {useState, useEffect} from 'react';
import Form from './Form/Form';
import LinkContainer from './LinkContainer/LinkContainer';
import API from '../../data/API';
import { getData,
    prepareToAddToStorage,
    addToClipBoard } from '../../helpers';
import styles from './LinkShortener.module.scss';

const LinkShortener = () => {

    const storageContainer = JSON.parse(sessionStorage.getItem("linksContainer"));
    const [linksContainer,setLinksContainer] = useState(storageContainer?storageContainer:[]);
    const [link,setLink] = useState(null);
    const [shorterLink,setShorterLink] = useState(null);
    const [currentClipBoard, setCurrentClipBoard] = useState('');

    const handleSubmit = (e,value,error) => {
       e.preventDefault();
        if(error === false) {
            setLink(value);
        }
    };

    useEffect(()=>{
        getData(`${API}${link}`, setShorterLink);
    },[link]);

    useEffect(()=>{
        if(link) {
            const linksStorage = prepareToAddToStorage(link, shorterLink, linksContainer, setLinksContainer);
            sessionStorage.setItem("linksContainer", linksStorage);
        }
    },[shorterLink]);
    return (
        <section className={styles.wrapper}>
            <Form submitFn={handleSubmit}/>
            <div className={styles.container}>
                {
                    linksContainer.map(({link,shorterLink},i) => 
                        <LinkContainer 
                            key={i} 
                            link={link} 
                            shorterLink={shorterLink}
                            clickFn={() => addToClipBoard(shorterLink, setCurrentClipBoard)}
                            copied={shorterLink===currentClipBoard?true:false}/>)
                }
            </div>
        </section>
    );
};

export default LinkShortener;