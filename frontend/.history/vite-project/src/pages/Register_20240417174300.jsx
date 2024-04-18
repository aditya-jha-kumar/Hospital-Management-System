import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate, Navigate } from "react-router-dom";

const Register = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container form-component register-form">
      <h2>Sign Up</h2>
      <p>Please Sign Up to Continue</p>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="" />
      </form>
    </div>
  );
};
export default Register;
