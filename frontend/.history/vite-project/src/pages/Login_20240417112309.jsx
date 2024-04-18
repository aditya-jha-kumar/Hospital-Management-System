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

  return (
    <div className="container form-component login-form">
      <h2>Sign In</h2>
      <p>Please Login To Continue.</p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam molestiae hic maiores repellendus veritatis fugit? Consequatur similique vel ab ipsa dolores, praesentium nam earum, facilis odit, dolore placeat error.
    </div>
  );
};
export default Login;
