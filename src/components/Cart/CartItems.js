import React from "react";
import "./CartItems.css";

const CartItems = (props) => {
  return (
    <li className="cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className="item-summary">
          <span className="price">{`₹${props.price.toFixed(2)}`}</span>
          <span className="amount"> X {props.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItems;
