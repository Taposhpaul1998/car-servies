import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <p> &copy; this is footer {year}</p>
        </div>
    );
};

export default Footer;