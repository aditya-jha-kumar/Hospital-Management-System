import React, { useContext, useState } from "react";
import { Context } from "../main";

const Sidebar = () => {
  const [show, setShow] = useState("false");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  return <nav style={!isAuthenticated ? (display:"n")}></nav>;
};

export default Sidebar;
