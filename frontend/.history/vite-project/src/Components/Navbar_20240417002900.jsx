import React, { useState } from "react";

const Navbar = () => {
  const [s] = useState(false);
  return (
    <nav className="container">
      <div className="logo">City Hospital</div>
      <div className={show ? "navlinks showmenu" : "navlinks"}> </div>
    </nav>
  );
};

export default Navbar;
