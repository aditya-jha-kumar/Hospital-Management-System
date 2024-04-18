import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" className="animated-image" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are?</h3>
        <p>
          At City Hospital, we are committed to providing high-quality,
          compassionate healthcare to our community. Our state-of-the-art
          facility and dedicated medical professionals ensure that each patient
          receives personalized care in a comfortable and supportive
          environment.
        </p>
        <p>
          <b>Our Mission:</b> Our mission is to deliver exceptional healthcare
          services, promote wellness, and improve the quality of life for those
          we serve. We strive to meet the diverse needs of our community by
          offering comprehensive medical care with a focus on empathy, respect,
          and clinical excellence.
        </p>
        <p>
          <b>Our Vision:</b> We envision a healthier community where every
          individual has access to outstanding healthcare services. Through
          innovation, collaboration, and a patient-centered approach, we aim to
          be a leading healthcare provider known for excellence and compassion.
        </p>
        <p>
          <b>Our Team:</b> City Hospital is proud to have a team of experienced
          and dedicated healthcare professionals, including physicians, nurses,
          and support staff. Our team works collaboratively to provide
          comprehensive care, leveraging their expertise and compassion to meet
          the unique needs of each patient.
        </p>
        <p>
          <b>Experience the City Hospital Difference:</b> We invite you to
          experience the difference at City Hospital. From routine medical care
          to specialized treatments, we are here to support your health and
          wellness journey. Thank you for entrusting us with your healthcare
          needs.
        </p>
      </div>
    </div>
  );
};
export default Biography;
