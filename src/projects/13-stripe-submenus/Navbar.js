import React from "react";
import logo from "./images/logo.svg";

import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    openSubmenu(page);
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="navbar" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="nav-link" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="nav-link" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="nav-link" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn-signin">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
