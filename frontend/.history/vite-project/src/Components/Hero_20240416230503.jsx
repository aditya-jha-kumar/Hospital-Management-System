import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Welcome to City Hospital, where we are dedicated to providing
          exceptional healthcare services to our patients and their families.
          Our state-of-the-art facility, combined with a team of highly skilled
          medical professionals, ensures that you receive the highest quality
          care in a comfortable and nurturing environment.
        </p>
        p
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span src="/Vector.png" alt="vector" />
      </div>
    </div>
  );
};

export default Hero;
