import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";
const CartItem = ({ cartItem }) => {
  const { id, title, img, price, amount } = cartItem;
  const { removeItem, increaseAmount, decreaseAmount, toggleAmount } =
    useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} className="item-img" />
      <div className="info">
        <h5 className="item-title">{title}</h5>
        <h4 className="price">${price}</h4>
        <button className="btn-remove" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="count-toggle">
        <button className="toggle-btn" onClick={() => toggleAmount(id, "inc")}>
          <FaChevronUp />
        </button>
        <p className="item-count">{amount}</p>
        <button className="toggle-btn" onClick={() => toggleAmount(id, "dec")}>
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
