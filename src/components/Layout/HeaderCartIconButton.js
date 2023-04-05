import React, { useEffect, useState } from "react";
import "./HeaderCartIconButton.css";
import CartIcon from "../Cart/CartIcon";
import { useCart } from "../../store/CartProvider";

const HeaderCartIconButton = (props) => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const cartCtx = useCart();
  const { items } = cartCtx;
  const totalCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setIsItemAdded(true);

    const timerId = setTimeout(() => {
      setIsItemAdded(false);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [items]);

  return (
    <button
      className={`button ${isItemAdded ? "bump" : ""}`}
      onClick={props.onClick}
    >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Items in cart</span>
      <span className="badge">{totalCartItems}</span>
    </button>
  );
};

export default HeaderCartIconButton;
