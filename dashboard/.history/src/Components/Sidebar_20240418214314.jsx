import React, { useContext, useState } from "react";
import { Context } from "../main";

const Sidebar = () => {
  const [show, setShow] = useState("false");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  return <div></div>;
};

export default Sidebar;
