import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <img className="logo" id="logo-image" src="/logo1.png" alt="Logo" />
            <ul>
                <li><a href="#banner">Home</a></li>
                <li><a href="#prog-lang">About</a></li>
            </ul>
        </header>
    );
};

export default Navbar;