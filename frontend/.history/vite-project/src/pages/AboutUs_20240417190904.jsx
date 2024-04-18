import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";
import Footer from "../Components"
const AboutUs = () => {
  return (
    <div>
      <Hero
        title={"Learn More About Us | City Hospital"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
      <footer />
    </div>
  );
};
export default AboutUs;
