import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
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
          Mission: Our mission is to deliver exceptional healthcare services,
          promote wellness, and improve the quality of life for those we serve.
          We strive to meet the diverse needs of our community by offering
          comprehensive medical care with a focus on empathy, respect, and
          clinical excellence.
        </p>
        <p>
          Vision: We envision a healthier community where every individual has
          access to outstanding healthcare services. Through innovation,
          collaboration, and a patient-centered approach, we aim to be a leading
          healthcare provider known for excellence and compassion.
        </p>
        
      </div>
    </div>
  );
};
export default Biography;
