import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false); 
  return (
    <nav className="container">
      <div className="logo">City Hospital</div>
      <div className={show ? "navlinks showmenu" : "navlinks"}>
        .l
      
      </div>
    </nav>
  );
};

export default Navbar;
