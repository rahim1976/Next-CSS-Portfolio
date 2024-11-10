import React from 'react';
import Navbar from './Navbar';
import "../styles/hero.css";


const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <Navbar />
      <div className="hero-content">
        <div className="hidden lg:block"></div>
        <div className="hero-text">
          <div className='hero-main'>
            <p data-aos="fade-up">I Am</p>
            <p data-aos="fade-right">Rahim Ali</p>
            <p data-aos="fade-left">Front-End Web <br />Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
