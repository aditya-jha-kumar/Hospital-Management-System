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
        <p>
          At City Hospital, we understand that each patient is unique, and we
          tailor our approach to meet individual needs. Whether you are seeking
          routine medical care, specialized treatment, or emergency services,
          our hospital is equipped to address a wide range of medical needs.
        </p>
        <p>
          We invite you to explore our website to learn more about our services,
          medical staff, and commitment to patient-centered care. At City
          Hospital, your health and comfort are our top priorities, and we look
          forward to being your partner in wellness. Thank you for considering
          us for your healthcare needs.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
