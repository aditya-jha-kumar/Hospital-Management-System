import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/appointment"  element={<Appointment />} />
          <Route path="/about"  element={<AboutUs />} />
          <Route path="/reg"  element={<Register />} />
          <Route path="/about" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
