import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
    useEffect(() => {
        const header = document.querySelector("header");
        const logoImage = document.getElementById("logo-image");

        const handleScroll = () => {
            if (window.scrollY > 0) {
                header.classList.add("sticky");
                logoImage.src = "logo2.png";
            } else {
                header.classList.remove("sticky");
                logoImage.src = "logo1.png";
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const importanceElement = document.getElementById("banner");
        if (importanceElement) {
            importanceElement.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Footer />
        </div>
    );
}

export default App;