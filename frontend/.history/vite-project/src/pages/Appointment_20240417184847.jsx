import React from "react";
import Hero from "../Components/Hero";
import AppointmentForm from "../Components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"../public/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
