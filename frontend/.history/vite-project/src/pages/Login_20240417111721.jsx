import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  cosnt 

  return <div></div>;
};
export default Login;
