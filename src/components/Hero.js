import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="banner">
            <div className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s' }}>
                <h1 className="hero-text">Web Development</h1>
            </div>
            <div className="animate__animated animate__fadeIn" style={{ animationDelay: '1.5s' }}>
                <h1 className="hero-subtext"><i>Its essence. Its importance.</i></h1>
            </div>
            <div className="button-container">
                <div className="box-3">
                    <a href="#importance" className="btn btn-three" style={{ textDecoration: 'none' }}>
                        <span>Learn More</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;