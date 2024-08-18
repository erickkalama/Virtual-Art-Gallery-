import React from 'react';
import './Homepage.css';
import myvideos from "./assets/videos/myvideos.mp4"

const HomePage = () => {
  return (
    <div className="homepage">
      <video className="homepage-video" autoPlay loop muted >
        <source src={myvideos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-content">
        <h1>Welcome to Chastel designs, your one stop shop for amazing arts</h1>
        <p>Enjoy the experience</p>
      </div>
    </div>
  );
};

export default HomePage;