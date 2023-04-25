import React, { Fragment, useState } from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import { useCart } from "../../store/CartProvider";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import Loader from "../UI/Loader";

const Cart = (props) => {
  const cartCtx = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const submitOrderHandler = async (userData) => {
    setSubmitting(true);
    await fetch(
      "https://custom-hook-a663f-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setSubmitting(false);
    setHasSubmitted(true);
    cartCtx.clearCart();
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

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const buttonActions = (
    <div className="actions ">
      <button className="button--alt" onClick={props.onClose}>
        Close
      </button>
      <button className="button" onClick={checkoutHandler}>
        Order
      </button>
    </div>
  );

  const cartModalData = (
    <Fragment>
      {" "}
      {cartItems}
      <div className="total">
        <span>Amount:</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSave={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && buttonActions}
    </Fragment>
  );

  const cartDataSubmitting = <Loader />;

  const orderDelivered = (
    <Fragment>
      <p>Order Submitted Successfully.....</p>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal>
      {!submitting && !hasSubmitted && cartModalData}
      {submitting && !hasSubmitted && cartDataSubmitting}
      {!submitting && hasSubmitted && orderDelivered}
    </Modal>
  );
};

export default Cart;
