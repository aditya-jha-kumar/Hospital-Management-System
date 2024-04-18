import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(Context);
  const [show, setShow] = useState(false);
    
  const navigateTo = 

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const gotoLogin = () => {};
  return (
    <nav className="container">
      <div className="logo">City Hospital</div>
      <div className={show ? "navlinks showmenu" : "navlinks"}>
        <div className="links">
          <Link to={"/"}>HOME</Link>
          <Link to={"/appointment"}>APPOINTMENT</Link>
          <Link to={"/about"}>ABOUT US</Link>
        </div>
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="logoutBtn btn" onClick={gotoLogin}>
            LOGIN
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
