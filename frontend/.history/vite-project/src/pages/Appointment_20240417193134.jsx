import React from "react";
import Hero from "../Components/Hero";
import AppointmentForm from "../Components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | City H"}
        imageUrl={"signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
