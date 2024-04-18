import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";
import Departments from "../Components/Departments";
import MessageForm from "../Components/MessageForm";

const Home = () => {
  return (
    <>
      <Hero title={"Welcome to City Hospital"} imageUrl={"/hero.png"} />
      <Biography imageUrl={"/hero2.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};
export default Home;
