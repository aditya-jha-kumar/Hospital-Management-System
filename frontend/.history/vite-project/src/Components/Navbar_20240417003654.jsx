import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isAuthenticated] = useContext(Context);
  const [show, setShow] = useState(false);
  return (
    <nav className="container">
      <div className="logo">City Hospital</div>
      <div className={show ? "navlinks showmenu" : "navlinks"}>
        <div className="links">
          <Link to={"/"}>HOME</Link>
          <Link to={"/appointment"}>APPOINTMENT</Link>
          <Link to={"/about"}>ABOUT US</Link>
        </div>
        {isAuthenticated ? (<button className="logoutBtn btn" onClick></button>):(<button></button>)}
      </div>
    </nav>
  );
};

export default Navbar;
