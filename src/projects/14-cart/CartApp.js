import React from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";

const CartApp = () => {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <div className="loading-div">
        <h2 className="text">loading...</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
};

export default CartApp;
