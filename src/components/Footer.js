import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>2024 | Cedrick Alfredo Catimbang</h1>
            <a id="icon1" href="https://www.facebook.com/profile.php?id=100010574402509" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a id="icon2" href="https://www.messenger.com/t/100010574402509" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-messenger"></i>
            </a>
            <a id="icon3" href="https://www.youtube.com/channel/UCTmZhsmb4LbUQoU6AnwtAMQ" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
            </a>
            <img id="logo-image" src={`${process.env.PUBLIC_URL}/logo1.png`} alt="Logo" />
        </footer>
    );
};

export default Footer;