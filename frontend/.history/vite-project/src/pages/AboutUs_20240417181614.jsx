import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";
const AboutUs = () => {
  return (
    <div>
      <Hero
        title={"Learn More About Us | City Hospital"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </div>
  );
};
export default AboutUs;
