import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/BioGraphy";
import Departments from "../Components/Departments";

const Home = () => {
  return (
    <>
      <Hero />
      <Biography />
      <Departments />
      <MessageForm />
    </>
  );
};
export default Home;
