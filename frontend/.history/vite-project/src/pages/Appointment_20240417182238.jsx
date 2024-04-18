import React from "react";
import Hero from "./components/Hero.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
const Appointment = () => {
  return (
    <div>
      <Hero title={"Schedule an "}/>
      <AppointmentForm />
    </div>
  );
};
export default Appointment;
