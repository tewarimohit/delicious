import React from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import { useCart } from "../../store/CartProvider";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useCart();

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItems
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span>Amount:</span>
        <span>{totalAmount}</span>
      </div>

      <div className="actions">
        <button className="button--alt" onClick={props.onClick}>
          Close
        </button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
