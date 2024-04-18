import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";
import Departments from "../Components/Departments";
import MessageForm from "../Components/MessageForm";

const Home = () => {
  return (
    <>
      <Hero title={"Welcom"} imageUrl={""} />
      <Biography />
      <Departments />
      <MessageForm />
    </>
  );
};
export default Home;
