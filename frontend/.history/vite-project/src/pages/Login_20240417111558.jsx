import React, { useContext, useState } from "react";
import { Context } from "../main";
const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  const [email, setEmail] = useState("");
  return <div></div>;
};
export default Login;
