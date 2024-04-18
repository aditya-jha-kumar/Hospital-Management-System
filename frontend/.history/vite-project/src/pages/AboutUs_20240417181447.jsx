import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Bio";
const AboutUs = () => {
  return (
    <div>
      <Hero
        title={"Learn More About Us | City Hospital"}
        imageUrl={"/about.png"}
      />
      <Biography/>
    </div>
  );
};
export default AboutUs;
