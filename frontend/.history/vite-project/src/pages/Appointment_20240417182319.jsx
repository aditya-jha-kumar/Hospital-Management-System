import React from "react";
import Hero from "./components/Hero.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
const Appointment = () => {
  return (
    <div>
      <Hero title={"Schedule An Appointment | City Hospital"} imageUrl={"/signin"}/>
      <AppointmentForm />
    </div>
  );
};
export default Appointment;
