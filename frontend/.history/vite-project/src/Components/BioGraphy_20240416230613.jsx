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
        <p></p>
      </div>
    </div>
  );
};
export default Biography;
