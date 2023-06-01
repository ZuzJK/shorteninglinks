import facebookIcon from '../assets/img/icon-facebook.svg';
import twitterIcon from '../assets/img/icon-twitter.svg';
import pinterestIcon from '../assets/img/icon-pinterest.svg';
import instagramIcon from '../assets/img/icon-instagram.svg';

const createLabel = name => `Visit our ${name} page`;

export const socialLinks = [
    {
        icon: facebookIcon,
        link: '',
        label: createLabel("facebook")
    },
    {
        icon: twitterIcon,
        link: '',
        label: createLabel("twitter")
    },
    {
        icon: pinterestIcon,
        link: '',
        label: createLabel("pinterest")
    },
    {
        icon: instagramIcon,
        link: '',
        label: createLabel("instagram")
    }
];