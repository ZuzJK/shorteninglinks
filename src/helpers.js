import axios from 'axios';

export const getData = async (URL, setterItem)=>{
    try {
        const {data: {result: {full_short_link}}} = await axios.get(URL);
        setterItem(full_short_link);
 
    }
    catch (e) {
        console.log(`Error is ${e}`)
    }
}

const getValue = e => {
    e.preventDefault();
    let value = e.target[0].value;
    return value;
}

export const getLink = (e,setterLink) => {
    let link = getValue(e);
    setterLink(link);
}

export const prepareToAddToStorage = (link, shorterLink, linksContainer, setLinksContainer) => {

    const links = linksContainer.concat({link,shorterLink});
    setLinksContainer(links);
    const linksStorage = JSON.stringify(links);
    return linksStorage;
}

export const addToClipBoard = async (shortLink, setterClipBoard) => {
    try {
        await navigator.clipboard.writeText(shortLink);
        setterClipBoard(shortLink);
      } catch (e) {
        console.error('Failed to copy: ', e);
       // setError(true)
      }
}