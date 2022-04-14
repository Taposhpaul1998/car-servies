import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer-conteiner'>
            <p> &copy; this is footer {year}</p>
        </div>
    );
};

export default Footer;