import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart-section">
        <header className="cart-header">
          <h1 className="title">your bag</h1>
        </header>
        <p className="empty-cart-desc">is currently empty</p>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <header className="cart-header">
        <h3 className="title">your bag</h3>
      </header>
      <div className="cart-items">
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <footer className="cart-footer">
        <div className="info">
          <h4 className="text">total</h4>
          <h4 className="amount">${total}</h4>
        </div>
        <button className="btn-clear" onClick={clearCart}>
          clear all
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
