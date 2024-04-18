import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return <div className="container form-component login-form">
    <h2></h2>
  </div>;
};
export default Login;
