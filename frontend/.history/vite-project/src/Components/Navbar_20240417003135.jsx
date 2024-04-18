import React, { useState } from "react";
import {Link} from "reac"
const Navbar = () => {
  const [show, setShow] = useState(false); 
  return (
    <nav className="container">
      <div className="logo">City Hospital</div>
      <div className={show ? "navlinks showmenu" : "navlinks"}>
        <div className="links">
            <Link></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
