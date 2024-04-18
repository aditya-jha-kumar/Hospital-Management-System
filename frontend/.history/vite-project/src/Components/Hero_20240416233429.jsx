import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span src="/Vector.png" alt="vector" />
      </div>
    </div>
  );
};

export default Hero;
