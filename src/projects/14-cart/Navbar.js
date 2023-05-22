import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="nav-logo">useReducer</h3>
          <div className="cart-icon-container">
            <HiOutlineShoppingBag className="cart-icon" />
            <div className="cart-amount">{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
