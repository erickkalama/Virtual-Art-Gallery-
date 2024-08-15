import React from 'react';
import videoSrc from '../assets/background-video.mp4';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay muted loop id="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="hero-text">
        <h1>Chastel Art Gallery</h1>
        <p>Where Art Meets Essence.</p>
      </div>
    </div>
  );
};

export default HeroSection;
