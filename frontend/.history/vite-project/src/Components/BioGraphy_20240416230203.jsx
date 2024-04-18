import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="ab" />
      </div>
    </div>
  );
};
export default Biography;
